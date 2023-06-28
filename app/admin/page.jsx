import React from "react";

const DashboardCard = ({ color, title, value }) => {
  return (
    <div className={`${color} text-white px-3 py-5 rounded-lg ring-2 w-full`}>
      <h2 className="text-4xl font-black text-white">{value}</h2>
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </div>
  );
};

const page = async () => {
 
  let callingCategory = await fetch("http://127.0.0.1:3000/api/category");
  callingCategory = await callingCategory.json();
  callingCategory = callingCategory.data.length + 1;

  let callingBooks = await fetch("http://127.0.0.1:3000/api/book");
  callingBooks = await callingBooks.json();
  callingBooks = callingBooks.data.length + 1;
  
  return (
    <div className="grid grid-cols-3 gap-10 p-10">
      <DashboardCard color="bg-green-600" title="total Books" value={callingBooks} />
      <DashboardCard
        color="bg-sky-600"
        title="total Category"
        value={callingCategory}
      />
      <DashboardCard color="bg-red-600" title="total Users" value={20} />
    </div>
  );
};


export default page;