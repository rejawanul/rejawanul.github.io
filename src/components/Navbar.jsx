import { useState } from "react";

import { navLinks } from "../data/navLinks";

export default function Navbar({ active, scrolled }) {
  const [open, setOpen] = useState(false);

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="title_name">
            <a href="#" onClick={(e) => go(e, "home")}>
              <span className="first_name">Reja</span>
              <span className="last_name">wanul</span>
            </a>
          </div>

          <nav className={`nav${open ? " open" : ""}`}>
            <ul>
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className={`nav-link${active === l.id ? " active" : ""}`}
                    onClick={(e) => go(e, l.id)}
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`nav-toggle${open ? " open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <div className={`nav-scrim${open ? " open" : ""}`} onClick={() => setOpen(false)}></div>
    </>
  );
}
