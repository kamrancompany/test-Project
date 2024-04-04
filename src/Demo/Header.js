import React from 'react'
import img1 from '../Pics/headphone.png'
import img2 from '../Pics/Vector.png'
import img3 from '../Pics/construction.png'
import bar from '../Pics/Rectangle 18.png'
import img4 from '../Pics/revalotion.png'
import img5 from '../Pics/consultation.png'
import img6 from '../Pics/repair.png'
import img7 from '../Pics/architecture.png'
import img8 from '../Pics/electric.png'
import box from '../Pics/box.png'
import p1 from '../Pics/p1.png'
import p2 from '../Pics/p2.png'
import p3 from '../Pics/p3.png'
import p4 from '../Pics/p4.png'
import e1 from '../Pics/notebook.png'
import e2 from '../Pics/vbar.png'
import e3 from '../Pics/handshake.png'
import e4 from '../Pics/trophy.png';
import e5 from '../Pics/ntbook.png';
import OurReputation from './OurReputation';
import Footer from './Footer';
import Main from './Main'


import Services from './Services';

import NewsLetter from './NewsLetter';
import Form from './Form';
import Projects from './Projects';
import Transparent from './Transparent';
import Experiance from './Experiance';

import About from './About';

import logo from '../Pics/logo.png'
import {Link} from 'react-scroll'
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';


const Header = () => {
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
      <div class="nav" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class=" titletext ">
            <img src={logo} alt="" style={{ width: '2rem', height: "3rem", marginLeft: "45px" }} /><h2 className='thebox'>TheBox</h2>
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links float-right">
          {/* <a href="#" target="_blank">Home</a>
          <a href="#" target="_blank">About</a>
          <a href="#" target="_blank">Projects</a>
          <a href="#" target="_blank">Services</a>
          <a href="#" target="_blank" style={{color:"orange", paddingRight:"3rem"}}>Contact us</a> */}

          <Link to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
          <Link to="aboutid" spy={true} smooth={true} offset={-100} duration={500}>Aboutus</Link>
          <Link to="projectid" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
          <Link to="servicid" spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
          <Link to="newslatterid" spy={true} smooth={true} offset={-100} duration={500} style={{ color: "orange", paddingRight: "3rem" }}>Contact us</Link>
          {/* <Link to="/" >Home</Link>
          <Link to="/aboutus" >Aboutus</Link>
          <Link to="/project" >Projects</Link>
          <Link to="/services" >Services</Link>
          <Link to="/newsletter"  style={{ color: "orange", paddingRight: "3rem" }}>Contact us</Link> */}

        </div>
        {/* <Outlet /> */}
      </div>
      
      <Main />
      <OurReputation send={data} />
      <About />
      <Services send={data1} />
      <Experiance send={data4} />
      <Transparent />
      <Projects send={data3} />
      <Form />
      <NewsLetter />
      <Footer />

    </>
  );
}

export default Header