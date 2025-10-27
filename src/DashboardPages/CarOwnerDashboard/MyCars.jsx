import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";

const MyCars = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient(); 

    const { data: myCars = [], isPending, refetch } = useQuery({
        queryKey: ["myCars", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myCars?email=${user?.email}`);
            return res.data;
        },
    });

    if (isPending) {
        return <Loading />;
    }

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This car will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#fa2a00",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/cars/${id}`);
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your car has been deleted successfully.",
                            icon: "success",
                            confirmButtonColor: "#fa2a00",
                            timer: 1500,
                            showConfirmButton: false,
                        });

                        
                        refetch();
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete this car. Try again.",
                            icon: "error",
                            confirmButtonColor: "#fa2a00",
                        });
                    }
                } catch (err) {
                    console.error(err);
                    Swal.fire({
                        title: "Error!",
                        text: "Something went wrong while deleting.",
                        icon: "error",
                        confirmButtonColor: "#fa2a00",
                    });
                }
            }
        });
    };

    const handleView = (car) => console.log("View:", car);
    const handleUpdate = (car) => console.log("Update:", car);

    return (
        <div className="bg-base-100 p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
                My Cars
            </h2>

            {myCars.length === 0 ? (
                <p className="text-center text-base-content/70">
                    You haven’t listed any cars yet.
                </p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr className="text-base bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
                                <th>#</th>
                                <th>Image</th>
                                <th>Car Info</th>
                                <th>Price (৳)</th>
                                <th>Status</th>
                                <th>Driver</th>
                                <th>Posted</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myCars.map((car, index) => (
                                <tr key={car._id} className="hover">
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={car.carImage}
                                            alt={car.model}
                                            className="w-16 h-12 object-cover rounded-md border"
                                        />
                                    </td>
                                    <td>
                                        <div className="font-bold bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
                                            {car.brand} {car.model}
                                        </div>
                                        <div className="text-sm text-gray-500">{car.type}</div>
                                    </td>
                                    <td>
                                        <p className="font-semibold bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
                                            {car.pricePerDay}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Deposit: {car.securityDeposit}
                                        </p>
                                    </td>
                                    <td>
                                        <span
                                            className={`badge ${
                                                car.status === "Approved"
                                                    ? "badge-success"
                                                    : car.status === "Pending"
                                                    ? "badge-warning"
                                                    : "badge-error"
                                            }`}
                                        >
                                            {car.status}
                                        </span>
                                    </td>
                                    <td>
                                        <p className="font-semibold bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
                                            {car.assignedTo || "N/A"}
                                        </p>
                                    </td>
                                    <td className="text-sm text-gray-600">
                                        {new Date(car.postedAt).toLocaleDateString()}
                                    </td>
                                    <td className="flex gap-2 justify-center">
                                        <button
                                            onClick={() => handleView(car)}
                                            className="btn btn-sm border-none text-white bg-gradient-to-r from-[#ff8971] to-[#fa2a00] hover:opacity-90"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => handleUpdate(car)}
                                            className="btn btn-sm border-none text-white bg-gradient-to-r from-[#ff8971] to-[#fa2a00] hover:opacity-90"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(car._id)}
                                            className="btn btn-sm border-none bg-red-600 hover:bg-red-700 text-white"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyCars;
