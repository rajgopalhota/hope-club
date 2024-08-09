import React, { useEffect, useMemo, useState } from "react";
import { useSortBy, useTable } from "react-table";
import { useAuth } from "../AuthContext";
import axiosInstance from "../axiosInstance";
import Loading from "../pages/Loading";
import RoleModal from "./RoleModal";

const Users = () => {
  const auth = useAuth();
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user for modal

  // Define columns for the table
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
      setLoading(true);
      const response = await axiosInstance.get("api/users/all");
      setData(response.data);
      setFilteredData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error.message);
    }
  };

  // Initial data state
  const [data, setData] = useState([]);

  if (auth.user && auth.user.role === "Admin") {
    columns.push({
      Header: "Actions",
      Cell: ({ row }) => (
        <button
          onClick={() => setSelectedUser(row.original)} // Open modal with selected user
          className="bg-blue-500 rounded p-2 text-white"
        >
          Manage
        </button>
      ),
    });
  }

  // Use memoization for performance optimization
  const memoizedColumns = useMemo(() => columns, []);

  // Use react-table hooks to create the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: memoizedColumns, data: filteredData }, useSortBy);

  // Date cell renderer
  function DateCell({ value }) {
    return <span>{new Date(value).toLocaleDateString()}</span>;
  }

  // Filter data based on search input
  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);
    const filteredResults = data.filter((user) =>
      user.name.toLowerCase().includes(inputValue)
    );
    setFilteredData(filteredResults);
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Users Component</h2>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchInput}
        onChange={handleSearch}
        className="p-2 mb-4 border rounded-md"
      />

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

      {/* Render the modal if a user is selected */}
      {selectedUser && (
        <RoleModal
          userId={selectedUser._id}
          role={selectedUser.role}
          name={selectedUser.name}
          onClose={() => setSelectedUser(null)}
          fetchData={fetchData}
        />
      )}
    </div>
  );
};

export default Users;
