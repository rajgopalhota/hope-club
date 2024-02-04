import React, { useEffect, useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { FaTrashAlt } from "react-icons/fa";
import axiosInstance from "../axiosInstance";
import { toast } from "react-toastify";
import { useAuth } from "../AuthContext";

const Users = () => {
  // Define columns for the table
  const auth = useAuth();
  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Email", accessor: "email" },
    { Header: "Phone Number", accessor: "phoneNumber" },
    { Header: "Department", accessor: "department" },
    { Header: "Role", accessor: "role" },
    { Header: "Created At", accessor: "createdAt", Cell: DateCell },
  ];

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("api/users/all");
      setData(response.data.filter((user) => user.role !== "Admin"));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // Initial data state
  const [data, setData] = React.useState([]);

  if (auth.user && auth.user.role === "Admin") {
    columns.push({
      Header: "Actions",
      Cell: DeleteButton,
    });
  }

  // Use memoization for performance optimization
  const memoizedColumns = useMemo(() => columns, []);

  // Use react-table hooks to create the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: memoizedColumns, data }, useSortBy);

  // Delete button cell renderer
  function DeleteButton({ row }) {
    const handleDelete = async () => {
      const shouldDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (shouldDelete) {
        try {
          // Make API call to delete user
          await axiosInstance.delete(`api/users/del/${row.original._id}`);
          toast.info("User deleted");
          // Refetch data after deletion
          fetchData();
        } catch (error) {
          console.error("Error deleting user:", error.message);
        }
      }
    };

    return (
      auth.user.role == "Admin" && (
        <button onClick={handleDelete} className="text-red-500">
          <FaTrashAlt />
        </button>
      )
    );
  }

  // Date cell renderer
  function DateCell({ value }) {
    // Display date in a readable format
    return <span>{new Date(value).toLocaleDateString()}</span>;
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-dark">Users Component</h2>

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

export default Users;
