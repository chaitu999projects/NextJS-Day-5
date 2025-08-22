import { DBConnection } from '@/app/lib/config/db'
import MobileModel from '@/app/models/Mobile'
import React from 'react'

const MobilePage = () => {
  const mobileFormFn = async (formData) => {
    "use server"
    await DBConnection();

    const title = formData.get("title");
    const model = formData.get("model");
    const price = formData.get("price");

    const theData = { title, model, price };
    await MobileModel.create(theData);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        action={mobileFormFn}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add Mobile
        </h2>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Mobile Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter mobile title"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            required
          />
        </div>

        {/* Model */}
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-600">
            Mobile Model
          </label>
          <input
            type="text"
            name="model"
            id="model"
            placeholder="Enter mobile model"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
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
  )
}

export default MobilePage
