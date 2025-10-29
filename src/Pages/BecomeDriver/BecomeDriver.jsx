import React from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaIdCard, FaMapMarkerAlt, FaRegMoneyBillAlt, FaClipboardList } from "react-icons/fa";
import car from '../../assets/car.jpg'
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const BecomeDriver = () => {
  const {user} = useAuth();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();
  


  const onSubmit = async (data) => {
    data.photo = user?.photoURL;
    data.email = user?.email;
    data.status = "Pending"; 
    // console.log(data);
    const res = await axiosSecure.post('/drivers', data);
    if(res.data.insertedId){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Application is submitted for review.',
        showConfirmButton: false,
        timer: 1500
      })
    }    
    reset();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16  ">
      {/* Left section */}
      <div className="">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
            Be a Driver
          </span>
        </h1>
        <p className="text-gray-600 mb-10">
          Join our professional driving network and start earning while ensuring
          a comfortable and safe ride experience for passengers. Let’s make travel smarter, faster, and more reliable together.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                {...register("name", { required: true })}
                placeholder="Your name"
                className="input input-bordered w-full"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Age</label>
              <input
                type="number"
                {...register("age", { required: true })}
                placeholder="Your age"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">NID Number</label>
              <input
                {...register("nid", { required: true })}
                placeholder="NID Number"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Driving License Number</label>
              <input
                {...register("license", { required: true })}
                placeholder="License Number"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Experience (in years)</label>
              <input
                type="number"
                {...register("experience", { required: true })}
                placeholder="Experience"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hourly Charges (BDT)</label>
              <input
                type="number"
                {...register("charges", { required: true })}
                placeholder="e.g. 500"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Communication Skill</label>
              <select
                {...register("communicationSkill", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select skill level</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                {...register("location", { required: true })}
                placeholder="Your working area"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              {...register("description")}
              placeholder="Write a short description about yourself..."
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Extra Suggestion: Vehicle Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Type</label>
            <select
              {...register("vehicleType", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="">Select vehicle type</option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="Microbus">Microbus</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4 w-8/12 mx-auto">
            <button
              type="submit"
              className="btn w-full text-white bg-gradient-to-r from-[#ff8971] to-[#fa2a00] border-none hover:opacity-90"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default BecomeDriver;
