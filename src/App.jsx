import React from 'react'
import './App.scss'
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import HeaderMain from './Header/HeaderMain';
import Contact from './Contact/Contact';
import Headercom from './Header/Headercom';
import About from './AboutUs/About';
import Gallery from './Gallery/Gallery';
import Classes from './Classes/Classes';
import Pricing from './Pricing/Pricing';
import Schedule from './Schedule/Schedule';

const  App = () => {
  return (
    

    <BrowserRouter>
   
    <Routes>
      {/* <Headercom></Headercom> */}
     
     <Route path='/' element={<HeaderMain></HeaderMain>}/>
     <Route path='/contact' element={<Contact></Contact>}/>
     <Route path='/about' element={<About></About>}/>
     <Route path='/gallery' element={<Gallery></Gallery>}/>
     <Route path='/classes' element={<Classes></Classes>}/>
     <Route path='/pricing' element={<Pricing></Pricing>}/>
     <Route path='/schedule' element={<Schedule></Schedule>}/>
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default  App;