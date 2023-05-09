import logo from './logo.svg';
import './App.css';
import Task from './Components/Task';
import ListTask from './Components/ListTask';
import AddTask from './Components/AddTask';

function App() {
  return (
   <div>
      <ListTask/>
      <AddTask/>
   </div>
  );
}

export default App;
