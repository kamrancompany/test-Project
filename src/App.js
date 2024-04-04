import React from 'react'
import './index.css';
// import Header from './Demo/Header';
import img1 from '../src/Pics/headphone.png'
import img2 from '../src/Pics/Vector.png'
import img3 from '../src/Pics/construction.png'
import bar from '../src/Pics/Rectangle 18.png'
import img4 from '../src/Pics/revalotion.png'
import img5 from '../src/Pics/consultation.png'
import img6 from '../src/Pics/repair.png'
import img7 from '../src/Pics/architecture.png'
import img8 from '../src/Pics/electric.png'
import box from '../src/Pics/box.png'
import p1 from '..//src/Pics/p1.png'
import p2 from '../src/Pics/p2.png'
import p3 from '../src/Pics/p3.png'
import p4 from '../src/Pics/p4.png'
import e1 from '../src/Pics/notebook.png'
import e2 from '../src/Pics/vbar.png'
import e3 from '../src/Pics/handshake.png'
import e4 from '../src/Pics/trophy.png'
import e5 from '../src/Pics/ntbook.png'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import OurReputation from './Demo/OurReputation';
import Footer from './Demo/Footer';
import Main from './Demo/Main'
import Header from './Demo/Header';

import Services from './Demo/Services';

import NewsLetter from './Demo/NewsLetter';
import Form from './Demo/Form';
import Projects from './Demo/Projects';
import Transparent from './Demo/Transparent';
import Experiance from './Demo/Experiance';
import About from './Demo/About';
import Services2 from './Demo/Services2'
import Commercial from './Demo/Commercial';

const App = () => {

  let data = [
    {
      img: img1,
      title: "Best Services",
      desc: "Nullam senectus porttitor in eget. Eget rutrum leo interdum."
    },
    {
      img: img1,
      title: "Best Teams",
      desc: "Cursus semper tellus volutpat aliquet lacus."
    },
    {
      img: img2,
      title: "Best Designs",
      desc: "Ultricies at ipsum nunc, tristique nam lectus."
    }
  ]
  let data1 = [
    {
      img: img3,
      img2: box,
      img1: bar,
      title: "Constraction"
    },
    {
      img: img4,
      img2: box,
      img1: bar,
      title: "Renuvation"
    },
    {
      img: img5,
      img2: box,
      img1: bar,
      title: "Consultation"
    },
    {
      img: img6,
      img2: box,
      img1: bar,
      title: "Repair Service"
    },
    {
      img: img7,
      img2: box,
      img1: bar,
      title: "Architecture"
    },
    {
      img: img8,
      img2: box,
      img1: bar,
      title: "Electric"
    }
  ]
  let data3 = [
    {
      img: p1,
      title: 'Wildstone Infra Hotel',
      subheading: "2715 Ash Dr. San Jose, South Dakota"
    },
    {
      img: p2,
      title: 'Wish Stone Building',
      subheading: "2972 Westheimer Rd. Santa Ana, Illinois "
    },
    {
      img: p3,
      title: 'Mr. Parkinston’s House',
      subheading: "3517 W. Gray St. Utica, Pennsylvania"
    },
    {
      img: p4,
      title: 'Oregano Height',
      subheading: "2464 Royal Ln. Mesa, New Jersey "
    }
  ]
  let data4 = [
    {
      img: e1,
      img1: e2,
      heading: 123,
      text: "Projects Completed"
    },
    {
      img: e3,
      img1: e2,
      heading: 84,
      text: "Happy Clients"
    },
    {
      img: e4,
      img1: e2,
      heading: 37,
      text: "Awards Win"
    },
    {
      img: e5,
      img1: e2,
      heading: 30,
      text: "Years in Business"
    }
  ]
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"   element={<Header />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/repudation" element={<OurReputation send={data} />} />
          <Route path="/services" element={<Services send={data1} />} />
          <Route path='/form' element={<Form />} />
          <Route path='/newsletter' element={<NewsLetter />} />
          <Route path='/experiance' element={<Experiance send={data4} />} />
          <Route  path='/project' element={<Projects send={data3} />} >
              <Route  path='commercial' element={<Projects send={data3}/>} />
              <Route  path='residential' element={<Projects send={data3}/>} />
              <Route  path='other' element={<Projects send={data3}/>} />
          </Route>
          <Route path='/transparent' element={<Transparent />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App