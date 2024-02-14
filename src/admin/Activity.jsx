import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import { FaTrashAlt } from "react-icons/fa";
import axiosInstance from "../axiosInstance";
import AddActivity from "../pages/AddActivity";
import { toast } from "react-toastify";
import { useAuth } from "../AuthContext";

const Activity = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showAddActivity, setShowAddActivity] = useState(false);

  const auth = useAuth();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/hope/activities/all");
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Description", accessor: "description" },
    { Header: "Image", accessor: "image", Cell: ImageCell },
    { Header: "Price", accessor: "price" },
    { Header: "Date", accessor: "date", Cell: DateCell },
    { Header: "Created By", accessor: "createdBy" },
    { Header: "Created At", accessor: "createdAt", Cell: DateCell },
  ];

  if (auth.user && auth.user.role === "Admin") {
    columns.push({
      Header: "Actions",
      Cell: DeleteButton,
    });
  }

  const memoizedColumns = useMemo(() => columns, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: memoizedColumns, data: filteredData }, useSortBy);

  function ImageCell({ value }) {
    return (
      <img
        src={value}
        alt="Activity"
        className="rounded-full"
        style={{ width: "50px", height: "50px" }}
      />
    );
  }

  function DateCell({ value }) {
    return <span>{new Date(value).toLocaleDateString()}</span>;
  }

  function DeleteButton({ row }) {
    const handleDelete = async () => {
      const shouldDelete = window.confirm(
        "Are you sure you want to delete this activity?"
      );
      if (shouldDelete) {
        try {
          await axiosInstance.delete(`/hope/activities/${row.original._id}`);
          toast.info("Activity Deleted");
          fetchData();
        } catch (error) {
          console.error("Error deleting activity:", error.message);
        }
      }
    };

    return (
      <button onClick={handleDelete} className="text-red-500">
        <FaTrashAlt />
      </button>
    );
  }

  // Filter data based on search input
  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);
    const filteredResults = data.filter(
      (activity) => activity.name.toLowerCase().includes(inputValue)
    );
    setFilteredData(filteredResults);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-dark">Activity Component</h2>

      {/* Button to toggle AddActivity component */}
      <button
        onClick={() => setShowAddActivity(!showAddActivity)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
      >
        {showAddActivity ? "Hide Activity" : "Add Activity"}
      </button>

      {/* AddActivity component with sliding in animation */}
      <div
        className={`${
          showAddActivity ? "translate-x-0" : "translate-x-full"
        } z-10 px-4 fixed right-0 top-0 bottom-0 bg-white w-100 shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        {/* Close button for small screens */}
        <button
          onClick={() => setShowAddActivity(false)}
          className="block md:hidden absolute top-2 right-2 text-gray-500"
        >
          Close
        </button>
        <AddActivity />
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchInput}
        onChange={handleSearch}
        className="ml-5 p-2 mb-4 border rounded-md"
      />

      <div className="overflow-x-auto">
        <table {...getTableProps()} className="min-w-full table-auto border">
          <thead className="bg-zinc-900 text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="p-4 text-left border-b"
                    key={index}
                  >
                    {column.render("Header")}
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={`${
                    rowIndex % 2 === 0 ? "bg-gray-200" : "bg-gray-100"
                  } border-b`}
                  key={rowIndex}
                >
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      {...cell.getCellProps()}
                      className="p-4"
                      key={cellIndex}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activity;
