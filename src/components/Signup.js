import React, { useState } from 'react';
import toast from 'react-hot-toast';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    console.log(formData);
    toast.success("Sign up successful!");
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block mb-1 text-sm text-gray-600">
            First Name <sup className="text-red-600">*</sup>
          </label>
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleOnChange}
            placeholder="Enter first name"
            className="input-style"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block mb-1 text-sm text-gray-600">
            Last Name <sup className="text-red-600">*</sup>
          </label>
          <input
            required
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleOnChange}
            placeholder="Enter last name"
            className="input-style"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
            Email <sup className="text-red-600">*</sup>
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="input-style"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-sm text-gray-600">
            Password <sup className="text-red-600">*</sup>
          </label>
          <input
            required
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter password"
            className="input-style"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-1 text-sm text-gray-600">
            Confirm Password <sup className="text-red-600">*</sup>
          </label>
          <input
            required
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
            placeholder="Confirm password"
            className="input-style"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out w-full">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
