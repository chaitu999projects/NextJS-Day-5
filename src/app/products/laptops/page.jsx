import { DBConnection } from '@/app/lib/config/db';
import LaptopModel from '@/app/models/Laptop';
import React from 'react';

const LaptopsForm = () => {
  const formSubmitHandler = async (formData) => {
    "use server";
    await DBConnection();

    const title = formData.get("laptopName");
    const model = formData.get("laptopModel");
    const price = formData.get("laptopPrice");

    const theData = { laptopName: title, laptopModel: model, laptopPrice: price };
    await LaptopModel.create(theData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        action={formSubmitHandler}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add Laptop
        </h2>

        {/* Laptop Name */}
        <div>
          <label htmlFor="laptopName" className="block text-sm font-medium text-gray-600">
            Laptop Name
          </label>
          <input
            type="text"
            name="laptopName"
            id="laptopName"
            placeholder="Enter laptop name"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            required
          />
        </div>

        {/* Laptop Model */}
        <div>
          <label htmlFor="laptopModel" className="block text-sm font-medium text-gray-600">
            Laptop Model
          </label>
          <input
            type="text"
            name="laptopModel"
            id="laptopModel"
            placeholder="Enter laptop model"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            required
          />
        </div>

        {/* Laptop Price */}
        <div>
          <label htmlFor="laptopPrice" className="block text-sm font-medium text-gray-600">
            Laptop Price
          </label>
          <input
            type="text"
            name="laptopPrice"
            id="laptopPrice"
            placeholder="Enter price"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LaptopsForm;
