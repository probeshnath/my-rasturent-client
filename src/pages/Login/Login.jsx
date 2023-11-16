import React, { useContext, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled]= useState(true)
    const {loginUser} = useContext(AuthContext)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email,password)
        .then((res =>{
            console.log(res.user)
        }))
        .catch(error =>{
            console.log(error)
        })


    }

    const handleValidateCaptcha = (e) =>{
        e.preventDefault()
        const user_captcha_value = captchaRef.current.value;
        // console.log(value)
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }else{
            setDisabled(true)
        }

    }

  return (
    <>
    <Helmet>
        <title>Tasty Treat | Login</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
            <div className="text-center md:w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <input ref={captchaRef}  type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                        <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>

                    </div>
                    <div className="form-control mt-6">
                        {/* TODO: apply disabled for re captcha */}
                        <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='px-6'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                {/* <SocialLogin></SocialLogin> */}
            </div>
        </div>
    </div>
</>
  )
}

export default Login