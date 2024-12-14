import logo from './logo.svg';
import './App.css';
import Contador from './Components/Contador';
import BotaoAlterador from './Components/BotaoAlterador';
import ListaDeTarefas from './Components/ListaDeTarefas';

function App() {
  return (
    <div className="App">
     <Contador></Contador>
     <BotaoAlterador></BotaoAlterador>
     <ListaDeTarefas></ListaDeTarefas>
    </div>
  );
}

export default App;
