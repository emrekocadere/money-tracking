import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profle';
import Dashboard from './Components/Dashboard';
import Expenses from './Components/Expenses';
import AddingTransactionModal from './Components/AddingTransactionModal';
import Transaction from './Components/Transaction';
import Settings from './Components/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />  
          <Route path="login" element={<Login />} />
          <Route path="settings" element={<Settings />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="Profile" element={<Profile />} /> 
          <Route path="Expenses" element={<Transaction />} /> 
           {/* <Route path="*" element={<CustomNavigation />} /> */}

        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
