import React, { useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import authHook from "../../customHook/authHook";
import toast from "react-hot-toast";

const Login = () => {
  const [success, setSuccess] = useState("");

  const { signIn } = authHook();
  const location = useLocation()
  const navigate = useNavigate()
  console.log('login location',location);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const pass = form.get("password");
    console.log(email, pass);

    signIn(email, pass)
      .then((res) =>{
         console.log(res.user)


        navigate(location?.state ? location.state : '/')

        })
      .catch((err) => console.log(err));




    setSuccess(toast.success("user login successfully"));
    e.target.reset()

    {success && success}
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="my-4">
        <h2 className="text-xl font-semibold text-center">Please Login</h2>

        <form
          onSubmit={handleLogin}
          className="card-body md:w-3/4 lg:w-1/3 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        <p className="text-center mt-2">
          Don't have an account ?
          <Link to="/register" className="text-blue-300 font-bold">
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
