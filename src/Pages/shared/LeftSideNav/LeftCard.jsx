import React from 'react';
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'
const LeftCard = () => {
    return (
        <div className=' mt-4 space-y-4'>
           <img className='mx-auto' src={img1} alt="" />
           <p className='px-2 ml-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
           <img className='mx-auto' src={img2} alt="" />
           <p className='px-2 ml-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
           <img className='mx-auto' src={img3} alt="" />
           <p className='px-2 ml-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        </div>
    );
};

export default LeftCard;