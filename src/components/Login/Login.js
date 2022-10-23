import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {

  const {loginWithEmailAndPassword, facebookSignIn, googleSignIn, resetPassword } = useContext(AuthContext)


  const [passwordType,setPasswordType] = useState('password')

  const [email,setEmail] = useState('')

  const handlePasswordType = () =>{
    if(passwordType === 'password'){
      setPasswordType('text')
      return
    }
    else{
      setPasswordType('password')
    }
  }

  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

  const handleLogIn = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailAndPassword(email,password)
    .then(result=> {
      const user = result.user;
      console.log(user)
      form.reset()
      navigate(from, {replace: true})
    })
    .catch(error =>{
      console.error(error)
    })

  }


  const signInWithFacebook = () =>{
    facebookSignIn(facebookProvider)
    .then(result=> {
      const user = result.user;
      console.log(user)
    })
    .catch(error =>{
      console.error(error)
    })
  }

  const signInWithGoogle = () =>{
    googleSignIn(googleProvider)
    .then(result=> {
      const user = result.user;
      console.log(user)
    })
    .catch(error =>{
      console.error(error)
    })
  }


  const handleResetPassword = (email) =>{
    resetPassword(email)
    .then(()=> {
      toast.success('Password reset email was send please check your email')
      console.log('passowrd reset email was send ')
    })
    .catch(error =>{
      console.error(error)
    })
  }

  return (
    <div className="  mt-10 ">
      <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100 w-4/12 mx-auto">
        <form onSubmit={handleLogIn} className="card-body">
          <h2>Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
              onBlur={(e)=> setEmail(e.target.value)}
            />
            
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={passwordType}
              placeholder="password"
              name="password"
              className="input input-bordered"
            />
            {
                  passwordType === 'password' ? <FaEye className="relative bottom-7 left-72 cursor-pointer" onClick={handlePasswordType}></FaEye> : <FaEyeSlash className="relative bottom-7 left-72 cursor-pointer" onClick={handlePasswordType}></FaEyeSlash>
                }
            <label className="label">
              <Link onClick={()=>handleResetPassword(email)} to="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="text-xl">
            <small>Dont't have an account ?</small>
            <Link
              to="/register"
              className="label-text-alt link link-hover text-sm"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
      <div className="divider w-2/12 mx-auto">OR</div>
      <div className="w-4/12 mx-auto">
        <div onClick={signInWithFacebook} className="flex justify-evenly w-full items-center border py-2 mb-3 rounded-full hover:cursor-pointer">
          <FaFacebook className="text-xl text-blue-400"></FaFacebook>
          <p>Continue with Facebook</p>
        </div>
        <div onClick={signInWithGoogle} className="flex justify-evenly w-full items-center border py-2 rounded-full hover:cursor-pointer">
          <FaGoogle className="text-xl text-red-400"></FaGoogle>
          <p>Continue with Google</p>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
