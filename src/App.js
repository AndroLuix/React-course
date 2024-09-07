import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product';
import Products from './products';


function App() {

  const PrdocutList = Products.map((prodotto) => {
    const {id} = prodotto;
    return <Product key = {id} {...prodotto}></Product>;
  });

  return (
    <section className='container-xxl d-flex flex-row gap-3 flex-wrap justify-content-center mt-5'>

      {PrdocutList}

      {/* <Componente1/> */}
    </section>
  );
}

export default App;
