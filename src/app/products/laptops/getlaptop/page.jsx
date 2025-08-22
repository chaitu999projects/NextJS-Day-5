import { DBConnection } from '@/app/lib/config/db'
import LaptopModel from '@/app/models/Laptop'
import React from 'react'

const getLaptops = async () => {
    await DBConnection()
  const allLaptopData = await LaptopModel.find({})

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Added Laptops
      </h2>

      {allLaptopData.length === 0 ? (
        <p className="text-center text-gray-500">No laptops added yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allLaptopData.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600">
                {item.laptopName}
              </h3>
              <p className="text-gray-700 mt-2">
                <span className="font-medium">Model:</span> {item.laptopModel}
              </p>
              <p className="text-gray-700 mt-1">
                <span className="font-medium">Price:</span> ₹{item.laptopPrice}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default getLaptops