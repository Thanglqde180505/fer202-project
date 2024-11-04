import { Route, Routes } from 'react-router-dom'
import './App.css'
import Annocement from './components/Annocement'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import DetailsProduct from './pages/DetailsProduct'
import Home from './pages/Home'
function App() {

  return (
    <>
      <Annocement text={'MIỄN PHÍ VẬN CHUYỂN ĐƠN HÀNG TỪ 299K'} />
      <Navbar />
      <div className="d-flex align-items-center justify-content-center">
        {/* <SearchProduct /> */}
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details-product/:id' element={<DetailsProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
