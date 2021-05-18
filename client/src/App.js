// import logo from './logo.svg';
import './App.css';
import { Router, Link } from '@reach/router';
import AllProducts from './components/AllProducts';
import SpecificProduct from './components/SpecificProduct';
import Create from './components/Create';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <Link to='/new'>Add New Product</Link>
        <Router>
        <AllProducts path="/"></AllProducts>
        <Create path="/new"></Create>
        <SpecificProduct path='/products/:prodId'></SpecificProduct>
        <EditProduct path='/edit/:prodId'></EditProduct>
        </Router>
    </div>
  );
}

export default App;
