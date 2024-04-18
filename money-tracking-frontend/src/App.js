import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profle';
import NavigationBar from './Components/NavigationBar';
import AddIncome from './Components/AddIncome';
function App() {
  return (
    <div className="App">

    <BrowserRouter>

      <Routes>
      
      <Route path="/" element={<Login />}/>
      <Route path="register" element={<Register/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="Graphic" element={<Graphic/>}/>
      <Route path="Profile" element={<Profile />} />
      <Route path="income" element={<Incomes />} />
      <Route path="expenses" element={<Expenses/>}/>
      <Route path="*" element={<CustomNavigation />} />
      
      </Routes>

    </BrowserRouter>

  </div>

  );
}

export default App;
