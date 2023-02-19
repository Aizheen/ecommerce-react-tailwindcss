import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import ProductDetails from "./pages/ProductDetails"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Foo from "./components/Foo"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Foo />
      </Router>
    </>
  );
}

export default App
