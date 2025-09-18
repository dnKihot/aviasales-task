import React from 'react'
import Ticket from './Ticket'

const MOCK_TICKETS = [
  {
    id: 1,
    price: '13 400 ₽',
    carrier: '/images/S7.png',
    segments: [
      {
        route: 'MOW – HKT',
        time: '10:45 – 08:00',
        duration: '21ч 15м',
        stops: ['HKG', 'JNB'],
      },
      {
        route: 'HKT – MOW',
        time: '11:20 – 09:45',
        duration: '19ч 10м',
        stops: ['HKG'],
      },
    ],
  },
  {
    id: 2,
    price: '10 200 ₽',
    carrier: '/images/TK.png',
    segments: [
      {
        route: 'MOW – DXB',
        time: '06:15 – 14:30',
        duration: '8ч 15м',
        stops: [],
      },
      {
        route: 'DXB – MOW',
        time: '18:00 – 22:15',
        duration: '4ч 15м',
        stops: [],
      },
    ],
  },
]

const TicketList = () => {
  return (
    <div className="flex flex-col gap-4">
      {MOCK_TICKETS.map((ticket) => (
        <Ticket key={ticket.id} {...ticket} />
      ))}
    </div>
  )
}

export default TicketList
