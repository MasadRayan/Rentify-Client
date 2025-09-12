import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, ScrollRestoration, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
// import useAxios from '../../Hooks/useAxios';
import Lottie from 'lottie-react';
import lottieBg from '../../assets/lottie/carLottie.json'
import useAuth from '../../Hooks/useAuth';


const Register = () => {
    const { createUser, signImWithGoogle, setUser, updateUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState('')
    // const axiosInstance = useAxios();
    const from = location.state?.from || '/';

    const { register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [showPass, setShowPass] = useState(false);

    const onSubmit = data => {
        const { email, password } = data;
        createUser(email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;

                // update userinfo in the database
                const userInfo = {
                    email: data.email,
                    displayName: data.name,
                    photoURL: profilePic,
                    role: 'student',
                    createdAt: new Date().toISOString(),
                    lastLogin: new Date().toISOString()
                }
                const userRes = await axiosInstance.post('/users', userInfo);


                // set image in the firebase
                const userProfile = {
                    displayName: data.name,
                    photoURL: profilePic
                }
                updateUser(userProfile)
                    .then(() => {
                        setUser({ ...user, displayName: data.name, photoURL: profilePic })
                        toast.success("Your Profile has been created")
                        navigate(from);
                    })
            })
            .catch((error) => {
                const errorMessage = error.message;

            });

    }

    useEffect(() => {
        reset();
    }, []);

    const handleGoogleSignIn = () => {
        //     signImWithGoogle()
        //         .then(async (userCredential) => {
        //             const user = userCredential.user;
        //             const userInfo = {
        //                 email: user.email,
        //                 displayName: user.displayName,
        //                 role: 'student',
        //                 photoURL: user.photoURL,
        //                 createdAt: new Date().toISOString(),
        //                 lastLogin: new Date().toISOString()
        //             }
        //             const userRes = await axiosInstance.post('/users', userInfo);

        //             toast.success("Your Profile has been created")
        //             navigate(from);
        //         })
        //         .catch((error) => {
        //             const errorMessage = error.message;
        //             console.error(errorMessage);
        //         });
    }


    const handleImageUpload = async (e) => {
        const image = e.target.files[0];

        if (!image) return;

        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

        try {
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData
            );

            console.log('Uploaded image URL:', res.data.secure_url);
            setProfilePic(res.data.secure_url);
        } catch (error) {
            console.error("Cloudinary upload failed:", error);
        }
    };

    return (
        <div className='flex justify-center items-center flex-col lg:flex-row-reverse my-10 gap-10'>

            <div className="w-[300px] sm:w-[400px] md:w-[550px] h-auto">
                <Lottie animationData={lottieBg} loop={true} />
            </div>
            <div>
                <h1 className="text-5xl font-extrabold ">Create an <br />Account</h1>
                <p className='my-3'>Register with Skill Nova</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">

                        {/* name filed */}
                        <label className="label">Your Name</label>
                        <input type="text" {...register('name', {
                            required: true
                        })} className="input" required placeholder="Your Name" />

                        {errors.email?.type === "required" && (
                            <p className='text-red-400'>Name is required</p>
                        )}

                        {/* image filed */}
                        <label className="label">Your Image</label>
                        <input type="file" onChange={handleImageUpload} className="input" required placeholder="Your Image" />

                        {/* email filed */}
                        <label className="label">Email</label>
                        <input type="email" {...register('email', {
                            required: true
                        })} className="input" required placeholder="Email" />
                        {errors.email?.type === "required" && (
                            <p className='text-red-400'>Email is required</p>
                        )}

                        {/* password field */}
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input
                                type={showPass ? 'text' : "password"}
                                className="input mb-2"
                                placeholder="Your password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                },
                                )} />
                            <button onClick={() => setShowPass(!showPass)} type='button' className='btn btn-ghost btn-xs absolute top-2 right-6 '>
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

                        <button className="btn bg-[#07A698] text-white mt-4 w-11/12">Register</button>

                    </fieldset>
                </form>
                <p className='my-5 '>Already have an account?<Link to={'/login'} className=' text-[#07A698]'>Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Register with Google
                </button>
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>

    );
};

export default Register;