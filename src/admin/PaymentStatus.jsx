import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useTable, useSortBy } from "react-table";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const fetchPayments = async () => {
  try {
    const response = await axios.get("/pay/all");
    return response.data.map((payment) => ({
      ...payment,
      totalPrice: payment.activities.reduce(
        (total, activity) => total + activity.price,
        0
      ),
    }));
  } catch (error) {
    console.error("Error fetching payments:", error);
    return [];
  }
};

const PaymentStatus = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const paymentsData = await fetchPayments();
      setPayments(paymentsData);
    };

    fetchData();
  }, []); // Run only on mount

  // Columns for the table
  const columns = React.useMemo(
    () => [
      {
        Header: "Payment ID",
        accessor: "_id",
      },
      {
        Header: "Name",
        accessor: "user.name",
      },
      {
        Header: "Email",
        accessor: "user.email",
      },
      {
        Header: "Activities",
        accessor: "activities",
        Cell: ({ cell }) => (
          <div>
            {cell.row.original.activities.map((activity) => (
              <div key={activity._id} className="flex items-center mb-2">
                {cell.row.original.paymentVerified ? (
                  <FaCheckCircle className="text-green-500 mr-2" />
                ) : (
                  <FaTimesCircle className="text-red-500 mr-2" />
                )}
                <span>{activity.name}</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        Header: "Total Price",
        accessor: "totalPrice",
        Cell: ({ cell }) => <span>&#8377; {cell.value}</span>,
      },
      {
        Header: "Verified By",
        accessor: "paymentVerifiedBy.name",
      },
      {
        Header: "Timestamp",
        accessor: "timestamp",
        Cell: ({ cell }) => (
          <span>{new Date(cell.value).toLocaleString()}</span>
        ),
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <button
            onClick={() => handleVerify(row.original)}
            className="bg-blue-500 text-white py-1 px-2 rounded-md"
          >
            {row.original.paymentVerified ? "Unverify" : "Verify"}
          </button>
        ),
      },
    ],
    []
  );

  const handleVerify = async (payment) => {
    const shouldVerify = window.confirm(
      `Are you sure you want to ${
        payment.paymentVerified ? "unverify" : "verify"
      } this payment?`
    );

    if (shouldVerify) {
      try {
        // Make API call to verify/unverify payment
        await axios.put(`/pay/verify/${payment._id}`, {
          paymentVerified: !payment.paymentVerified,
        });

        // Refetch data after verification
        const updatedPayments = await fetchPayments();
        setPayments(updatedPayments);
      } catch (error) {
        console.error("Error verifying/unverifying payment:", error.message);
      }
    }
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: payments }, useSortBy);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Payment Status Component
      </h2>
      <table {...getTableProps()} className="min-w-full table-auto border">
        <thead className="bg-blue-900 text-white">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-4 text-left border-b"
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

export default PaymentStatus;
