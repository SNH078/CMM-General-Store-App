import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Address = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const [errors, setErrors] = useState({}); // For inline error messages

  const { axios, user, navigate } = useContext(AppContext);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    // Required fields check
    for (const key in address) {
      if (!address[key].toString().trim()) {
        newErrors[key] = "This field is required";
      }
    }
    // Email validation
    if (address.email && !/^\S+@\S+\.\S+$/.test(address.email)) {
      newErrors.email = "Invalid email format";
    }
    // Phone validation (10 digits)
    if (address.phone && !/^\d{10}$/.test(address.phone.toString())) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    // Zip code validation (5-6 digits)
    if (address.zipCode && !/^\d{5,6}$/.test(address.zipCode.toString())) {
      newErrors.zipCode = "Zip code must be 5 or 6 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validate()) return; // Stop submission if validation fails

    try {
      const { data } = await axios.post("/api/address/add", { address });
      if (data.success) {
        toast.success(data.message);
        navigate("/cart");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="mt-12 flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Left Side: Address Fields */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Address Details
        </h2>

        <form
          onSubmit={submitHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* First Name */}
          <div>
            <label className="block text-gray-600">First Name</label>
            <input
              type="text"
              name="firstName"
              value={address.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-600">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={address.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div className="col-span-2">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={address.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Street */}
          <div className="col-span-2">
            <label className="block text-gray-600">Street</label>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.street && (
              <p className="text-red-500 text-sm">{errors.street}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-600">City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>

          {/* State */}
          <div>
            <label className="block text-gray-600">State</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state}</p>
            )}
          </div>

          {/* Zip Code */}
          <div>
            <label className="block text-gray-600">Zip Code</label>
            <input
              type="number"
              name="zipCode"
              value={address.zipCode}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.zipCode && (
              <p className="text-red-500 text-sm">{errors.zipCode}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-600">Country</label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country}</p>
            )}
          </div>

          {/* Phone */}
          <div className="col-span-2">
            <label className="block text-gray-600">Phone</label>
            <input
              type="number"
              name="phone"
              value={address.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-md"
            >
              Save Address
            </button>
          </div>
        </form>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          // src={assets.add_address_iamge}
          src="https://plus.unsplash.com/premium_vector-1727131975453-7aa6281e2cef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxvbmxpbmUlMjBkZWxpdmVyeSUyMGFkZHJlc3N8ZW58MHwxfDB8fHww"
          alt="Address Illustration"
          className="w-full max-w-xs rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Address;

