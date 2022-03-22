import { Link, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import Event from './pages/event';
import Keranjang from './pages/keranjang';


import './App.css';

function App() {
  return (
    <div className="flex justify-center p-6 w-screen h-screen bg-gray-200 overflow-y-auto">
      <div className="max-w-full">
        <div className="flex items-center justify-center mb-4 text-xs text-gray-600 font-semibold uppercase tracking-wide">
          <Link
          className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out"
          to="/home">
            Home
          </Link>
          <Link
          className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
          to="/about">
            About
          </Link>
          <Link
          className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
          to="/gallery">
            Gallery
          </Link>
          <Link
          className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
          to="/event">
            Event
          </Link>
          <Link
          className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
          to="/keranjang">
            Keranjang
          </Link>
        </div>

        <div className="p-6 w-full bg-white rounded-xl shadow-lg">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/event" component={Event}></Route> 
            <Route path="/keranjang" component={Keranjang}></Route>
          </Switch>

        </div>
      </div>
    </div>
  );
}

export default App;
