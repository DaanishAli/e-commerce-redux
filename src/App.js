
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import ShopingCard from './components/ShopingCard';
import { Provider } from 'react-redux'
import store from './store/'
import Details from './components/Details'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="shoping_card" exact element={<ShopingCard />} />
          <Route path="details/:id"  element={<Details />}/>
          {/* <Route path=":id"  element={<Details />} /> */}
          <Route />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
