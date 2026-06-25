import { Sun, Moon, ShoppingBag } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <ShoppingBag size={22} />
          <span>ShopVault</span>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          <span>{isDark ? "Light" : "Dark"}</span>
        </button>
      </div>
    </nav>
  );
}
