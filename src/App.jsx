import React from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Tabs from "./components/Tabs";
import TicketList from "./components/TicketList";
import useInitTickets from "./features/tickets/hooks/useInitTickets";

function App() {
  useInitTickets();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <Header />
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <aside className="w-full lg:w-72 bg-white rounded-lg shadow-sm p-4">
          <Filter />
        </aside>

        <main className="flex-1">
          <Tabs />
          <TicketList />
        </main>
      </div>
    </div>
  );
}

export default App;
