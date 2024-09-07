import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product';


function App() {
  return (
  <section className='container-xxl d-flex flex-row gap-3 flex-wrap justify-content-center'>
  <Product/>
  <Product/>
  <Product/>
  <Product/>
  <Product/>
  <Product/>
  <Product/>
    {/* <Componente1/> */}
  </section>
  );
}

export default App;
