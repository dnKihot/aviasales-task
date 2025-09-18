import React from 'react'

const Ticket = () => {
  return (
    <article className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold text-blue-600">13 400 ₽</span>
        <img
          src="/public/images/S7 Logo.png"
          alt="S7 Airlines"
          className="h-6 object-contain"
        />
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-sm sm:text-base">
          <div>
            <p className="font-semibold text-gray-500 uppercase">MOW – HKT</p>
            <p className="text-gray-900">10:45 – 08:00</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase">В пути</p>
            <p className="text-gray-900">21ч 15м</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase">2 пересадки</p>
            <p className="text-gray-900">HKG, JNB</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm sm:text-base">
          <div>
            <p className="font-semibold text-gray-500 uppercase">HKT – MOW</p>
            <p className="text-gray-900">11:20 – 09:45</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase">В пути</p>
            <p className="text-gray-900">19ч 10м</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase">1 пересадка</p>
            <p className="text-gray-900">HKG</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Ticket
