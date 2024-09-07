import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product';

const Products = [
  {
    prezzo: "10,00",
    nome: "PROMAVERIX",
    image: "https://th.bing.com/th/id/R.4fa63f127ec1a820b0c95ceb1f88a015?rik=E4mb48miX5RBHQ&pid=ImgRaw&r=0",
  },
  {
    prezzo: "15,00",
    nome: "MENO-15",
    image: "https://th.bing.com/th/id/OIP.V761uo8rBp5wlJn9PgoxjAAAAA?rs=1&pid=ImgDetMain",
  },
  {
    prezzo: "10,00",
    nome: "PROMAVERIX",
    image: "https://th.bing.com/th/id/R.4fa63f127ec1a820b0c95ceb1f88a015?rik=E4mb48miX5RBHQ&pid=ImgRaw&r=0",
  },
  {
    prezzo: "15,00",
    nome: "MENO-15",
    image: "https://th.bing.com/th/id/OIP.V761uo8rBp5wlJn9PgoxjAAAAA?rs=1&pid=ImgDetMain",
  },
    {
    prezzo: "10,00",
    nome: "PROMAVERIX",
    image: "https://th.bing.com/th/id/R.4fa63f127ec1a820b0c95ceb1f88a015?rik=E4mb48miX5RBHQ&pid=ImgRaw&r=0",
  },
  {
    prezzo: "15,00",
    nome: "MENO-15",
    image: "https://th.bing.com/th/id/OIP.V761uo8rBp5wlJn9PgoxjAAAAA?rs=1&pid=ImgDetMain",
  }
];

function App() {

  const PrdocutList = Products.map((productElem) => {
    return <Product {...productElem}></Product>;
  });

  return (
    <section className='container-xxl d-flex flex-row gap-3 flex-wrap justify-content-center mt-5'>

      {PrdocutList}

      {/* <Componente1/> */}
    </section>
  );
}

export default App;
