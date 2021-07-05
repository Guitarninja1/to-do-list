import './App.css';
import ToDo from './components/ToDo'
import ListAdd from './components/ListAdd';




function App() {
  let listItems = [];

  
  return (
    <div className="App">
      <header className="App-header">
        <ToDo listItems={listItems}/>
        <ListAdd />
      </header>
    </div>
  );
}

export default App;
