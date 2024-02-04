import React, { useEffect, useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { FaTrashAlt } from "react-icons/fa";
import axiosInstance from "../axiosInstance";
import AddActivity from "../pages/AddActivity";

const Activity = () => {
  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Description", accessor: "description" },
    { Header: "Image", accessor: "image", Cell: ImageCell },
    { Header: "Price", accessor: "price" },
    { Header: "Date", accessor: "date", Cell: DateCell },
    { Header: "Created By", accessor: "createdBy" },
    { Header: "Created At", accessor: "createdAt", Cell: DateCell },
    { Header: "Actions", Cell: DeleteButton },
  ];

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/hope/activities/all");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const [data, setData] = React.useState([]);

  const memoizedColumns = useMemo(() => columns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: memoizedColumns, data }, useSortBy);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-dark">Activity Component</h2>
      <AddActivity />

      <div className="overflow-x-auto">
        <table {...getTableProps()} className="min-w-full table-auto border">
          <thead className="bg-zinc-900 text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="p-4 text-left border-b"
                  >
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        " 🔽"
                      ) : (
                        " 🔼"
                      )
                    ) : (
                      ""
                    )}
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
                  className={`${rowIndex % 2 === 0 ? "bg-gray-200" : "bg-gray-100"} border-b`}
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
    </div>
  );
};

export default Activity;
