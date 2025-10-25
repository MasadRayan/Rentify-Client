import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";


const ListCars = () => {
    const [carImage, setCarImage] = useState(null);
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.carImage = carImage;
        data.userName = user?.displayName;
        data.userEmail = user?.email;
        data.status = "Pending"
        data.postedAt = new Date().toISOString();
        console.log(data);
        axiosSecure.post('/cars', data)
            .then(res => {
                console.log(res.data);
            })


        toast.success("Car information submitted For Approval!");
        reset();
    };

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

            setCarImage(res.data.secure_url);
        }
        catch (error) {
            console.error("Image upload failed:", error);
        }

    }

    return (
        <div className="max-w-5xl mx-auto my-10  shadow-lg rounded-2xl p-10">
            <h1 className="text-3xl font-bold text-center mb-8">
                🚗 List Your Car on{" "}
                <span className="bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
                    Rentify
                </span>
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                {/* ================== Car Type ================== */}
                <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold mb-4">Choose Your Car Type</h2>
                    <div className="flex flex-wrap gap-8">
                        {["Car", "SUV", "Hiace", "Truck", "Bus"].map((type) => (
                            <label key={type} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value={type}
                                    {...register("type", { required: "Please select a car type" })}
                                    className="radio checked:bg-[#fa2a00]"
                                />
                                <span>{type}</span>
                            </label>
                        ))}
                    </div>
                    {errors.type && (
                        <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
                    )}
                </div>

                {/* VEHICLE DETAILS */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-[#fa2a00]">
                        Vehicle Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            {...register("brand", { required: true })}
                            placeholder="Brand / Make"
                            className="input input-bordered w-full"
                        />
                        <input
                            {...register("model", { required: true })}
                            placeholder="Model"
                            className="input input-bordered w-full"
                        />
                        <input
                            {...register("registrationNumber", { required: true })}
                            placeholder="Registration Number"
                            className="input input-bordered w-full"
                        />
                        <input
                            {...register("year", { required: true })}
                            type="number"
                            placeholder="Year"
                            className="input input-bordered w-full"
                        />
                        <input
                            {...register("color", { required: true })}
                            placeholder="Color"
                            className="input input-bordered w-full"
                        />
                        <input
                            {...register("engineCC", { required: true })}
                            type="number"
                            placeholder="Engine Capacity (CC)"
                            className="input input-bordered w-full"
                        />
                        <input
                            {...register("mileage", { required: true })}
                            type="number"
                            placeholder="Mileage (km/L)"
                            className="input input-bordered w-full"
                        />
                        <select
                            {...register("transmission", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Transmission</option>
                            <option value="Automatic">Automatic</option>
                            <option value="Manual">Manual</option>
                        </select>
                        <select
                            {...register("fuelType", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Fuel Type</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Electric">Electric</option>
                        </select>
                        <input
                            {...register("doors", { required: true })}
                            type="number"
                            placeholder="Number of Doors"
                            className="input input-bordered w-full"
                        />
                        <input
                            {...register("luggageCapacity")}
                            placeholder="Luggage Capacity (e.g. 2 Large, 1 Small)"
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                {/* CAPACITY & CATEGORY */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-[#fa2a00]">
                        Capacity & Category
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            {...register("passengerCapacity", { required: true })}
                            type="number"
                            placeholder="Passenger Capacity"
                            className="input input-bordered w-full"
                        />
                        <select
                            {...register("category", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Category</option>
                            <option value="Economy">Economy</option>
                            <option value="Sports">Sports</option>
                            <option value="Luxury">Luxury</option>
                        </select>
                    </div>
                </div>

                {/* RENTAL INFO */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-[#fa2a00]">
                        Rental Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            {...register("pricePerDay", { required: true })}
                            type="number"
                            placeholder="Price per Day (৳)"
                            className="input input-bordered w-full"
                        />
                        <input
                            {...register("securityDeposit")}
                            type="number"
                            placeholder="Security Deposit (৳)"
                            className="input input-bordered w-full"
                        />

                    </div>
                </div>

                {/* OWNER INFO */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-[#fa2a00]">
                        Owner Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            {...register("ownerName", { required: true })}
                            placeholder="Owner Name"
                            className="input input-bordered w-full"
                        />

                    </div>
                </div>

                {/* MEDIA */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-[#fa2a00]">Media</h2>
                    <input
                        type="file"
                        onChange={handleImageUpload}
                        accept="image/*"
                        className="file-input file-input-bordered w-full"
                    />
                    <textarea
                        {...register("description")}
                        placeholder="Description (features, condition, etc.)"
                        className="textarea textarea-bordered w-full mt-4"
                    ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="btn bg-gradient-to-r from-[#ff8971] to-[#fa2a00] text-white px-10"
                    >
                        Submit Car Details
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ListCars;
