import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, ScrollRestoration, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
// import useAxios from '../../Hooks/useAuth';
import lottieBg from '../../assets/lottie/carLottie.json'
import { toast } from 'react-toastify';
import Lottie from 'lottie-react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Login = () => {
    const { signImWithGoogle, loginUser, setUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate()
    // const axiosInstance = useAxios()
    const from = location.state?.from || '/';
    const [errorMsg, setErrormsg] = useState('');
    const formRef = useRef(null);

    const { register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [showPass, setShowPass] = useState(false);


    const onSubmit = data => {
        const { email, password } = data;
        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                toast.success("You have successfully logged in")
                navigate(from);

            })
            .catch((error) => {

                const errorMessage = error.message;
                setErrormsg(errorMessage);
            });
    }
    useEffect(() => {
        reset();
    }, []);

    const handleGoogleSignIn = () => {
        // signImWithGoogle()
        //     .then(async (userCredential) => {
        //         const user = userCredential.user;
        //         const userInfo = {
        //             email: user.email,
        //             displayName: user.displayName,
        //             photoURL: user.photoURL,
        //             role: 'user',
        //             createdAt: new Date().toISOString(),
        //             lastLogin: new Date().toISOString()
        //         }
        //         const userRes = await axiosInstance.post('/users', userInfo);
        //         toast.success("You have successfully logged in");
        //         navigate(from);
        //     })
        //     .catch((error) => {
        //         const errorMessage = error.message;
        //         setErrormsg(errorMessage);
        //     });
    }

    useGSAP(() => {
        const elements = formRef.current.querySelectorAll('.gsap-item');
        gsap.from(elements, {
            x: -100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.15,
        })
        
    })

    return (
        <div className='flex justify-center my-10 items-center flex-col lg:flex-row-reverse gap-10'>
            <div className="w-[300px] md:w-[600px] h-auto md:pt-30">
                <Lottie animationData={lottieBg} loop={true} />
            </div>
            <div ref={formRef}>
                <h1 className="text-5xl font-extrabold">Welcome Back</h1>
                <p className='my-3'>Login with <span className='bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent'>Rentify</span></p>
                <form onSubmit={handleSubmit(onSubmit)}  className="gsap-item">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" {...register('email', {
                            required: true
                        })} className="input" required placeholder="Email" />

                        {errors.email?.type === "required" && (
                            <p className='text-red-400'>Email is required</p>
                        )}

                        <label className="label">Password</label>
                        <div className='relative'>
                            <input
                                type={showPass ? 'text' : "password"}
                                className="input mb-2"
                                placeholder="Your password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                },
                                )} />
                            <button onClick={() => setShowPass(!showPass)} type='button' className='btn btn-ghost btn-xs absolute top-2 right-2 '>
                                {
                                    showPass ? <FaEyeSlash /> : <FaEye />
                                }
                            </button>
                        </div>
                        {errors.password?.type === "required" && (
                            <p className='text-red-400'>Password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className='text-red-400'>Password must be at least 6 characters long</p>
                        )}
                        {
                            errors.password?.type === "pattern" && <p className='text-red-400'>Password must contain at least one letter and one number</p>
                        }
                        {
                            errorMsg && errorMsg == 'Firebase: Error (auth/invalid-credential).' && <p className='text-red-400'>You have entered Wrong Password</p>
                        }


                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="hover:scale-105 hover:shadow-lg transition-all btn bg-gradient-to-r from-[#ff8971] to-[#fa2a00] text-white mt-4">Login</button>

                    </fieldset>
                </form>
                <p className='my-5'>Don’t have any account? <Link
                    to="/register"
                    state={{ from: location.state?.from || { pathname: '/' } }}
                    className=' bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent'>
                    Register
                </Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Login;