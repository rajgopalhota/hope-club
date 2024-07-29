import React, { useEffect, useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useSortBy, useTable } from "react-table";
import { toast } from "react-toastify";
import axiosInstance from "../axiosInstance";
import Loading from "../pages/Loading";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  // Define columns for the table
  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Email", accessor: "email" },
    { Header: "Message", accessor: "message" },
    { Header: "Timestamp", accessor: "timestamp", Cell: DateCell },
    { Header: "Actions", Cell: DeleteButton },
  ];

  // Fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/api/messages/all");
      setMessages(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error.message);
    }
  };

  // Initial data state
  const [messages, setMessages] = React.useState([]);

  // Use memoization for performance optimization
  const memoizedColumns = useMemo(() => columns, []);

  // Use react-table hooks to create the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: memoizedColumns, data: messages }, useSortBy);

  // Delete button cell renderer
  function DeleteButton({ row }) {
    const handleDelete = async () => {
      const shouldDelete = window.confirm(
        "Are you sure you want to delete this message?"
      );
      if (shouldDelete) {
        try {
          // Make API call to delete message
          setLoading(true);
          await axiosInstance.delete(`/api/messages/${row.original._id}`);
          // Refetch data after deletion
          fetchData();
          setLoading(false);
          toast.info("Message Deleted");
        } catch (error) {
          setLoading(false);
          console.error("Error deleting message:", error.message);
        }
      }
    };

    return (
      <button onClick={handleDelete} className="text-red-500">
        <FaTrashAlt />
      </button>
    );
  }

  // Date cell renderer
  function DateCell({ value }) {
    // Display date in a readable format
    return <span>{new Date(value).toLocaleString()}</span>;
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Messages Component</h2>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default Contacts;
