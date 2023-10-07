import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import authHook from "../../../customHook/authHook";

const RightSideNav = () => {


  // const {googleLogin} = authHook()

  // const handleLogin = () =>{
  //   googleLogin()
  //   .then(result => console.log(result.user))
  //   .catch(err => console.log(err))
  // }


  return (
    <div className="px-4 py-2 ">
      <h2 className="text-2xl font-semibold mb-3">Login with</h2>
      {/* //! Login */}

      <div className="mb-8">
        <div className="mb-2 flex gap-4 items-center border mt-2 p-2 justify-center duration-200 hover:bg-black hover:text-white bg-[#3E5998] rounded-md text-white">
          <FcGoogle className="text-2xl"></FcGoogle>
          <button className="font-semibold ">Login with Google</button>
        </div>

        <div className="flex gap-4 items-center border mt-2 p-2 justify-center duration-200  bg-red-500 text-white hover:bg-black hover:text-white rounded-md">
          <BsGithub className="text-2xl"></BsGithub>
          <button className="font-semibold ">Login with Github</button>
        </div>
      </div>

      {/* //!Find Us */}
      <h2 className="text-2xl font-semibold mb-3">Find Us On</h2>
      <div className="mb-8">
        <a
          href=""
          className="p-4 gap-3 flex items-center border rounded-t-lg text-[#706F6F] font-medium"
        >
          <FaFacebookF className="text-[#1178F2]"></FaFacebookF>
          Facebook
        </a>
        <a
          href=""
          className="p-4 gap-3 flex items-center border-x text-[#706F6F] font-medium"
        >
          <FaTwitter className="text-[#179CF0]"></FaTwitter>
          Twitter
        </a>
        <a
          href=""
          className="p-4 gap-3 flex items-center border text-[#706F6F] rounded-b-lg font-medium"
        >
          <FaInstagram className="text-[#D91B49] "></FaInstagram>
          Instagram
        </a>
      </div>

      {/* //!Q-Zone */}
      <div className="bg-[#F3F3F3] rounded-md">
        <h2 className="text-2xl font-semibold p-2 lg:p-4">Q-Zone</h2>
        <div className="mb-8 p-2 ">
          <img className="mx-auto w-full lg:w-auto" src={qZone1} alt="" />
         
          <img className="mx-auto  w-full lg:w-auto" src={qZone2} alt="" />
          <img className="mx-auto  w-full lg:w-auto" src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
