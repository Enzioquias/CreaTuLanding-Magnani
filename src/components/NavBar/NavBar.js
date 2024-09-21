import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <h3>Avicola Frutos del Nido</h3>
      <div className="NavBarButtons">
        <button>Balanceados</button>
        <button>Animales de Granja</button>
        <button>Insumos</button>
        <br></br>
        
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
