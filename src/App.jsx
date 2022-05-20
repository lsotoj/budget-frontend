import './App.css';
import { 
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import Accounts from '../src/components/Accounts/Accounts'
import Moves from './components/Moves/Moves';
import History from './components/History/History';
import Transfers from './components/Transfers/Transfers';
import Currencies from './components/Currencies/Currencies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path='/Dashboard' element={ <Dashboard /> } />
        <Route path="/accounts" element={ <Accounts /> } />
        <Route path="/moves" element={ <Moves /> } />
        <Route path="/history" element={ <History />} />
        <Route path='/transfers' element={ <Transfers /> }/>
        <Route path='/currencies' element={ <Currencies /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
