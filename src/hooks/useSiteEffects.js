import { useEffect, useState } from "react";
import { navLinks } from "../data/navLinks";

// Ports the interactive behaviour of the base design: scroll-spy, scroll
// reveal, 3D tilt cards, magnetic buttons, parallax hero glow and the
// three.js wireframe behind the hero photo.
export default function useSiteEffects(ready) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy + shrink header
  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.id)];
    const onScroll = () => {
      let current = "home";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) current = id;
      });
      setActive(current);
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Reveal on scroll, tilt, magnetic, parallax
  useEffect(() => {
    if (!ready) return;
    const cleanups = [];

    document
      .querySelectorAll(".about-stats, .skills-grid, .featured-projects, .education-timeline, .timeline, .pillars-grid, .building-grid")
      .forEach((group) => {
        Array.from(group.children).forEach((child, i) => {
          child.style.setProperty("--reveal-delay", Math.min(i * 90, 360) + "ms");
        });
      });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    cleanups.push(() => observer.disconnect());

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hover = window.matchMedia("(hover: hover)").matches;

    const on = (el, ev, fn) => {
      el.addEventListener(ev, fn);
      cleanups.push(() => el.removeEventListener(ev, fn));
    };

    if (!reduced && hover) {
      document.querySelectorAll(".tilt").forEach((card) => {
        let raf = null;
        on(card, "mousemove", (e) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          if (raf) cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
          });
        });
        on(card, "mouseleave", () => {
          if (raf) cancelAnimationFrame(raf);
          card.style.transform = "";
        });
      });

      document.querySelectorAll(".magnetic").forEach((btn) => {
        on(btn, "mousemove", (e) => {
          const r = btn.getBoundingClientRect();
          btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
        });
        on(btn, "mouseleave", () => (btn.style.transform = ""));
      });

      const g1 = document.getElementById("glow1");
      const g2 = document.getElementById("glow2");
      const hero = document.getElementById("home");
      if (g1 && g2 && hero) {
        on(hero, "mousemove", (e) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          g1.style.transform = `translate(${nx * 40}px, ${ny * 40}px)`;
          g2.style.transform = `translate(${nx * -30}px, ${ny * -30}px)`;
        });
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, [ready]);

  // three.js wireframe accent (progressive enhancement)
  useEffect(() => {
    if (!ready) return;
    const canvas = document.getElementById("hero3d");
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 900px)").matches) return;

    let stopped = false;
    let frame;
    (async () => {
      try {
        const THREE = await import(/* @vite-ignore */ "https://unpkg.com/three@0.160.0/build/three.module.js");
        if (stopped) return;
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.z = 6.5;
        const mesh = new THREE.Mesh(
          new THREE.IcosahedronGeometry(1.7, 0),
          new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.28 })
        );
        const inner = new THREE.Mesh(
          new THREE.IcosahedronGeometry(1.05, 0),
          new THREE.MeshBasicMaterial({ color: 0xe0fbff, wireframe: true, transparent: true, opacity: 0.18 })
        );
        scene.add(mesh, inner);
        const wrap = canvas.parentElement;
        const resize = () => {
          const w = wrap.clientWidth || 1;
          const h = wrap.clientHeight || 1;
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        };
        resize();
        window.addEventListener("resize", resize);
        let mx = 0, my = 0;
        window.addEventListener("mousemove", (e) => {
          mx = e.clientX / window.innerWidth - 0.5;
          my = e.clientY / window.innerHeight - 0.5;
        });
        const animate = () => {
          if (stopped) return;
          frame = requestAnimationFrame(animate);
          mesh.rotation.x += 0.0022;
          mesh.rotation.y += 0.0032;
          inner.rotation.x -= 0.0016;
          inner.rotation.y -= 0.0026;
          camera.position.x += (mx * 1.4 - camera.position.x) * 0.04;
          camera.position.y += (-my * 1.4 - camera.position.y) * 0.04;
          camera.lookAt(scene.position);
          renderer.render(scene, camera);
        };
        animate();
      } catch (err) {
        console.warn("3D hero accent skipped:", err);
      }
    })();
    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
    };
  }, [ready]);

  return { active, scrolled };
}
