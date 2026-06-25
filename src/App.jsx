import { ThemeProvider } from "./context/ThemeContext";
import { ProductProvider } from "./context/ProductContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./index.css";

export default function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <Navbar />
        <Home />
      </ProductProvider>
    </ThemeProvider>
  );
}
