import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-zinc-100 border-b border-black mb-4 sticky top-0">
      <nav className="flex justify-between items-center py-4 w-11/12 mx-auto">
        <h2 className="text-xl">NOME</h2>
        <ul className="flex gap-3">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/images">
            <li>Immagini</li>
          </Link>
        </ul>
        <div className="flex gap-2">
          <Button variant="success">Login</Button>
          <Button variant="outline-white">Registrati</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
