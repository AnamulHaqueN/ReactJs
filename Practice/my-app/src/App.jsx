import './App.css';
import Home from './Components/Home/Home';

function App() {
  const products = [
      {name: "Samsung", price: 2200},
      {name: "Nokia", price: 1900},
      {name: "Symphone", price: 1200}
    ];

  return (

    <div>
      
       <Home></Home>
    
    </div>

  )

}

export default App