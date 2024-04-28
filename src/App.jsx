import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Partners from "./pages/Partners"
import Contact from "./pages/Contact"
import Partnerlist from "./component/partners/Partnerlist"
import Partnerdetails from "./component/partners/Partnerdetails"
import Error from "./pages/Error"
import FetchComp from "./component/DevFetch/FetchComp"
import Footer from "./component/Footer"


function App() {

  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/partners" element={<Partners/>} />
        <Route path="/contact" element={<Contact/>} />
        
        <Route path="/partners/partnerlist" element={<Partnerlist/>} />

        <Route path="/partnerlist/partnerdetails/:id" element={<Partnerdetails/>} />

        <Route path="/partnerlist" element={<Partnerlist/>}/>

        <Route path="/partners" element={<Partners/>} />

        <Route path="/*" element={<Error/>}/>

        <Route path="/devlopers" element={<FetchComp/>} />

      </Routes>

      <Footer/>

    </div>
  )
}

export default App