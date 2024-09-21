import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Avicola Frutos del Nido</h3>
      <div>
        <button>Balanceados</button>
        <button>Animales de Granja</button>
        <button>Insumos</button>
        <br></br>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
