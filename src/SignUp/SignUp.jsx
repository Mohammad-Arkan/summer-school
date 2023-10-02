import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import {useContext, useState} from 'react'
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile, logOut} = useContext(AuthContext)
    const navigate = useNavigate()
//----------------------------------------------------------------------------------------------//

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
        .then((result)=> {
            const loggedUser = result.user;
            console.log(loggedUser);
          updateUserProfile(data.name, data.photoURL)
          .then(()=> {
            console.log('user profile info update')
            reset()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your account created successful',
              showConfirmButton: false,
              timer: 1500
            })
            logOut()
              .then(()=> {})
              .catch((error)=> console.log(error))
              navigate('/login');

          })
          .catch((error)=> {
            console.log(error)
          }) 
      

        })
    
    };

   
  
       
    return (
       <>
       <Helmet><title>Summer School || SingUp</title> </Helmet>
        <div className="hero min-h-screen bg-base-200 py-20">
        <div className="hero-content flex ">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Please Sign up</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card   max-w-sm shadow-2xl bg-base-100 w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name",  { required: true,  })} name='name'  placeholder="Your name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name='email' placeholder="Youre email" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { 
                    required: true,
                    minLength: 6, 
                    maxLength: 20,  
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                    })} name='password'  placeholder="Your password" className="input input-bordered" />
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">One upper case, One lower case, One special character, One Nuber</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" {...register("confirm")} name='confirm'  placeholder="Your confirm password" className="input input-bordered" />
                <br />


              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your photo URL</span>
                </label>
                <input type="text" {...register("photo",  { required: true })} name='photo' placeholder="Your photo URL" className="input input-bordered" />
                {errors.photo && <span className="text-red-600">Photo is required</span>}
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="SignUp" />
              </div>
              <p >Have an Summer School account <Link className="underline" to='/login'>login</Link> </p>
            </form>
          </div>
        </div>
      </div>
       </>
    );
};

export default SignUp;