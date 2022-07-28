import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Categorias from './components/Categorias/Categorias';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <ItemListContainer greetings="Bienvenidos a AM Liquor Store!"/>
      
    </div>
  );
}

export default App;
