import SmoothScroll from "./SmoothScroll";
import './App.css'
import NavigationBar from './pages/Navbar'
import Hero from './pages/Hero'
import Section1 from './pages/Section1'
import Section2 from './pages/Section2'
import Section2C1 from './pages/Section2C1'
import Section2C2 from './pages/Section2C2'
import PurchasePlan from './pages/PurPlane'
import Footer from './pages/Footer'
function App() {
  return (
    <>
    <SmoothScroll>
          <NavigationBar/>
          <Hero/>
          <Section1/>
          <Section2/>
          <Section2C1/>
          <Section2C2/>
          <PurchasePlan/>
          <Footer/>
    </SmoothScroll>
    </>
  )
}

export default App
