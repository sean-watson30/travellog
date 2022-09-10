import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data/data';

function App() {
  return (
    <div className="App">
      <Header/>
      {
        data.map(item => {
          return <Card item={item}/>
        })
      }
    </div>
  );
}

export default App;
