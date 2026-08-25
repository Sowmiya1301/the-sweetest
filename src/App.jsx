import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import ProductCard from "./components/products/ProductCard";
import cakes from "./data/cakes.json";
import Cakes from "./pages/Cakes";
import { FavoritesProvider } from "./context/FavoritesContext";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter basename="/the-sweetest">
      <FavoritesProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-1">
            <AppRoutes />
          </main>

          <Footer />
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
