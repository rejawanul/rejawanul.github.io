import re

with open('src/index.css', 'r') as f:
    css = f.read()

# 1. Update Fonts and :root variables
root_pattern = re.compile(r"/\* Google Font Import \*/.*?/\* Global Reset", re.DOTALL)
new_root = """/* Google Font Import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

:root {
  /* Design Tokens - Premium Minimal Light */
  --bg: #fafafa;
  --bg-card: #ffffff;
  --bg-secondary: #f4f4f5;
  --text: #52525b;
  --text-muted: #a1a1aa;
  --text-h: #09090b;
  --border: rgba(0, 0, 0, 0.06);
  --accent: #3b82f6;
  --accent-light: rgba(59, 130, 246, 0.1);
  --accent-hover: #2563eb;
  --creative: #ec4899;
  --creative-light: rgba(236, 72, 153, 0.1);
  --creative-hover: #db2777;
  
  --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.03);
  --shadow: 0 12px 32px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 24px 48px rgba(0, 0, 0, 0.08);
  
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-head: 'Outfit', system-ui, sans-serif;
  --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --radius: 24px;
}

/* Dark Theme Variables */
:root.dark {
  --bg: #09090b;
  --bg-card: #141416;
  --bg-secondary: #1c1c1f;
  --text: #a1a1aa;
  --text-muted: #71717a;
  --text-h: #fafafa;
  --border: rgba(255, 255, 255, 0.05);
  --accent: #60a5fa;
  --accent-light: rgba(96, 165, 250, 0.15);
  --accent-hover: #93c5fd;
  --creative: #f472b6;
  --creative-light: rgba(236, 72, 153, 0.15);
  --creative-hover: #fbcfe8;
  
  --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.2);
  --shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 24px 48px rgba(0, 0, 0, 0.4);
}

/* Global Reset"""
css = root_pattern.sub(new_root, css)

# 2. Headings
h_pattern = re.compile(r"h1, h2, h3, h4, h5, h6 \{.*?\}", re.DOTALL)
new_h = """h1, h2, h3, h4, h5, h6 {
  color: var(--text-h);
  font-weight: 700;
  font-family: var(--font-head);
  letter-spacing: -0.02em;
  line-height: 1.25;
}"""
css = h_pattern.sub(new_h, css)

# 3. .card
card_pattern = re.compile(r"\.card \{.*?\}", re.DOTALL)
new_card = """.card {
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2.5rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}"""
css = card_pattern.sub(new_card, css)

# 4. Buttons
btn_pattern = re.compile(r"/\* Buttons \*/.*?(?=\.btn-cv \{)", re.DOTALL)
new_btns = """/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 9999px;
  cursor: pointer;
  transition: var(--transition);
  border: 1px solid transparent;
  font-family: var(--font-sans);
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  color: white;
  box-shadow: 0 4px 12px var(--accent-light);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px var(--accent-light);
  color: white;
}

.btn-outline {
  background-color: transparent;
  border-color: var(--border);
  color: var(--text-h);
}

.btn-outline:hover {
  background-color: var(--bg-secondary);
  border-color: var(--accent);
  transform: translateY(-2px);
}

"""
css = btn_pattern.sub(new_btns, css)

# 5. .sidebar-sticky
sidebar_pattern = re.compile(r"\.sidebar-sticky \{.*?\}", re.DOTALL)
new_sidebar = """.sidebar-sticky {
  position: sticky;
  top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
}
.sidebar-sticky:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}"""
css = sidebar_pattern.sub(new_sidebar, css)

with open('src/index.css', 'w') as f:
    f.write(css)

print("CSS successfully updated")
