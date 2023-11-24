import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar"

import { ContextProvider } from './context/context';

import { MainPage } from "./pages/Main/main_page"
import { AccountPage } from './pages/Account/account_page';
import { ShopsPage } from "./pages/Shops/shops_page"
import { SpotListPage } from './pages/SpotList/spot_list'; 
import { CartPage } from './pages/Cart/cart_page';


function App() {
  return (
    <div className='App'>

      <ContextProvider>

        <Router>

          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<MainPage></MainPage>}></Route>
            <Route path="/account" element={<AccountPage></AccountPage>}></Route>
            <Route path="/shops" element={<ShopsPage></ShopsPage>}></Route>
            <Route path="/spotlist" element={<SpotListPage></SpotListPage>}></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
          </Routes>

        </Router>

      </ContextProvider>

    </div>
  );
}

export default App;
