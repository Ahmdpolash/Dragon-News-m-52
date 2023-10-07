import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-3'>
           
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-[18px] text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <h3 className="font-medium">{moment().format("dddd, MMMM D, YYYY")}</h3>

        </div>
    );
};

export default Header;