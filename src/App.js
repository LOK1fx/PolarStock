import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar"
import { MainPage } from "./pages/Main/main_page"
import { ShopsPage } from "./pages/Shops/shops_page"

function App() {
  return (
    <div className='App'>
      <Router>

        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/shops" element={<ShopsPage></ShopsPage>}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
