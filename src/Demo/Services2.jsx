import React from 'react'
import './Services2.css'
import img3 from '../Pics/construction.png'
import bar from '../Pics/Rectangle 18.png'
import img4 from '../Pics/revalotion.png'
import img5 from '../Pics/consultation.png'
import img6 from '../Pics/repair.png'
import img7 from '../Pics/architecture.png'
import img8 from '../Pics/electric.png'
import img2 from '../Pics/box.png'

let users = [
    {
        img: img3,
        img2: img2,
        img1: bar,
        title: "Constraction"
    },
    {
        img: img4,
        img2: img2,
        img1: bar,
        title: "Renuvation"
    },
    {
        img: img5,
        img2: img2,
        img1: bar,
        title: "Consultation"
    },
    {
        img: img6,
        img2: img2,
        img1: bar,
        title: "Repair Service"
    },
    {
        img: img7,
        img2: img2,
        img1: bar,
        title: "Architecture"
    },
    {
        img: img8,
        img2: img2,
        img1: bar,
        title: "Electric"
    }
];

const Services2 = () => {
    return (
        <>
            <div className='card  uldiv gap-3'>
                <div><h2 className='text-center'>Services</h2>
                    <ul className=''>
                        {users.map((user) => (
                            <li key={Math.random()} className="col-md-6 col-lg-4 my-4 mappingfun text-center mt-4">
                                <h5 className="card-title"><img src={user.img} alt={user.title} className='t-img' /><img src={user.img2} alt={user.title} className='boximg' /></h5>
                                <h5 className="card-title"><img src={user.img1} alt={user.title} className='secondchild' /></h5>
                                <p className="card-text text3 cardcontaint" ></p>{user.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Services2;
