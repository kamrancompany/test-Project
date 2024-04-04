import React from 'react'
import p1 from '../Pics/p1.png'
import p2 from '../Pics/p2.png'
import p3 from '../Pics/p3.png'
import p4 from '../Pics/p4.png'
import circle from '..//Pics/circle.png'
import circle1 from '..//Pics/circle2.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
const Commercial = () => {
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
    return (
        <>
            <div className='container' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",margin:"5rem" }}>
                <div className='l-commercial'>
                    <div style={{ width: "30%" }}>
                        <h1>Projects</h1>
                        <div>
                            All
                        </div>
                        <div>
                           <Link to ='commercial'> Comercial </Link>
                        </div>
                        <div>
                            Residential
                        </div>
                        <div>
                            other
                        </div>
                    </div>
                </div>
                <div className='row' style={{ width: "70%",marginTop:"5rem" }}>

                    <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                        {data3.map((user) => (
                            <li key={Math.random()} style={{ listStyleType: "none" }}>
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top" src={user.img} alt="Card image cap" />
                                    <div class="card-body bg-primary text-white">
                                        <h5 class="card-title ">{user.title}</h5>
                                        <p class="card-text  " style={{ fontSize: "small" }}>{user.subheading}</p>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div style={{display:"flex",justifyContent:"space-between",width:"79%"}}>
                    <button style={{width:"10rem",color:"white",background:"black"}}><ArrowBackIcon/>Back</button>
                    <img src={circle} style={{width:"18px",height:"18px"}}/>
                    <img src={circle1}style={{width:"18px",height:"18px"}}/>
                    <img src={circle1}style={{width:"18px",height:"18px"}}/>
                    <img src={circle1}style={{width:"18px",height:"18px"}}/>
                    <img src={circle1}style={{width:"18px",height:"18px"}}/>
                    <button style={{width:"10rem",color:"white",background:"black"}}>Next<ArrowForwardIcon/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Commercial