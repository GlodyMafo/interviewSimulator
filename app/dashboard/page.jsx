import { UserButton } from "@clerk/nextjs";
import React from "react";
import NewInterview from "./_components/NewInterview.jsx";

function Dashboard() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">Tableau de bord</h2>
      <h2 className="text-gray-500">Creer une nouvelle interview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <NewInterview />
      </div>
    </div>
  );
}

export default Dashboard;
