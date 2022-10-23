import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

  const {googleSignIn, facebookSignIn, createUser, updateUserProfile, varifyEmailAddress} = useContext(AuthContext)


  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider();

  const [passwordType,setPasswordType] = useState('password')

  const handlePasswordType = () =>{
    if(passwordType === 'password'){
      setPasswordType('text')
      return
    }
    else{
      setPasswordType('password')
    }
  }


  const handleSignInWithGoogle = ()=>{
    googleSignIn(googleProvider)
    .then(result=> {
      const user = result.user;
      console.log(user)
    })
    .catch(error =>{
      console.error(error)
    })
  }


  const handleSignInWithFacebook = () =>{
    facebookSignIn(facebookProvider)
    .then(result=> {
      const user = result.user;
      console.log(user)
      
    })
    .catch(error =>{
      console.error(error)
    })
  }

  const handleOnSubmit = (event)=>{
    event.preventDefault()
    const form= event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)


    createUser(email,password)
    .then(result=> {
      const user = result.user;
      console.log(user)
      handleProfile(firstName,lastName)
      handleEmailVerify()
      form.reset()
      toast.success('Varification email was send, please check your email')
    })
    .catch(error =>{
      console.error(error)
    })
  }


  const handleProfile = (firstName,lastName) =>{
    // const name = firstName + lastName
    const profile = {
      displayName: `${firstName} ${lastName}`
    }
    updateUserProfile(profile)
  }

  const handleEmailVerify = () =>{
    varifyEmailAddress()
    .then(()=>{})
  }


  return (
    <div className="  mt-10 ">
      <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100 w-4/12 mx-auto">
        <form onSubmit={handleOnSubmit} className="card-body">
          <h2>Create an account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={passwordType}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {
                  passwordType === 'password' ? <FaEye className="relative bottom-7 left-72 cursor-pointer" onClick={handlePasswordType}></FaEye> : <FaEyeSlash className="relative bottom-7 left-72 cursor-pointer" onClick={handlePasswordType}></FaEyeSlash>
                }
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="text-xl">
            <small>Already have an account ?</small>
            <Link
              to="/login"
              className="label-text-alt link link-hover text-sm"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="divider w-2/12 mx-auto">OR</div>
      <div className="w-4/12 mx-auto">
        <div onClick={handleSignInWithFacebook} className="flex justify-evenly w-full items-center border py-2 mb-3 rounded-full hover:cursor-pointer">
          <FaFacebook className="text-xl text-blue-400"></FaFacebook>
          <p>Continue with Facebook</p>
        </div>
        <div onClick={handleSignInWithGoogle} className="flex justify-evenly w-full items-center border py-2 rounded-full hover:cursor-pointer">
          <FaGoogle className="text-xl text-red-400"></FaGoogle>
          <p>Continue with Google</p>
        </div>
      </div>
      <Toaster  position="top-center"/>
    </div>
  );
};

export default Register;
