import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Md Rejawanul Haque. All rights reserved.</p>

        </div>
        <div className="footer-right">
          <button onClick={scrollToTop} className="back-to-top" aria-label="Scroll to top">
            <ArrowUp size={16} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
