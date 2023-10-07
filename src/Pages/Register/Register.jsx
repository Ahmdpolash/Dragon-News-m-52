import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { authContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(authContext);
  const [success, setSuccess] = useState("");


  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    
    setSuccess('')

    //!create user
    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
    e.target.reset();
    setSuccess(toast.success("user created successfully"));
   
    {
      success && success;
    }
   
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="my-4">
        <h2 className="text-xl font-semibold text-center">Please Register</h2>

        <form
          onSubmit={handleRegister}
          className="card-body md:w-3/4 lg:w-1/3 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>

        <p className="text-center mt-2">
          Already have an account ?
          <Link className="text-blue-300 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
