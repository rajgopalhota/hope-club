import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import { FaCheckCircle } from "react-icons/fa";
import axiosInstance from "../axiosInstance";
import Loading from "../pages/Loading";

const Engagement = () => {
  // Define columns for the table
  const [loading, setLoading] = useState(true);

  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Email", accessor: "email" },
    { Header: "Phone Number", accessor: "phoneNumber" },
    { Header: "Department", accessor: "department" },
    {
      Header: "Registered Activities",
      accessor: "registeredActivities",
      Cell: RegisteredActivitiesCell,
    },
    { Header: "Total Price", accessor: "totalPrice", Cell: TotalPriceCell },
  ];

  // Fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/hope/users-activities");
      const userData = response.data.map((user) => ({
        ...user,
        totalPrice: calculateTotalPrice(user.registeredActivities),
      }));
      setData(userData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // Calculate the total price for registered activities
  const calculateTotalPrice = (activities) => {
    return activities.reduce((total, activity) => total + activity.price, 0);
  };

  // Initial data state
  const [data, setData] = React.useState([]);

  // Use memoization for performance optimization
  const memoizedColumns = useMemo(() => columns, []);

  // Use react-table hooks to create the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: memoizedColumns, data }, useSortBy);

  // Custom cell renderer for displaying registered activities
  function RegisteredActivitiesCell({ value }) {
    return (
      <div>
        {value.map((activity) => (
          <div key={activity._id} className="flex items-center mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>{activity.name}</span>
          </div>
        ))}
      </div>
    );
  }

  // Custom cell renderer for displaying total price
  function TotalPriceCell({ value }) {
    return <span>&#8377; {value}</span>;
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container mx-auto">
      {loading && <Loading />}

      <h2 className="text-2xl font-bold mb-4 text-dark">
        Engagement Component
      </h2>

      {/* Table */}
      <table {...getTableProps()} className="min-w-full table-auto border">
        <thead className="bg-zinc-900 text-white">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={"p-4 text-left border-b"}
                >
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
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
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-4">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Engagement;
