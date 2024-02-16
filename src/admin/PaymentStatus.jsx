import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useTable, useSortBy } from "react-table";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Chart from "chart.js/auto";
import Loading from "../pages/Loading";

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
  const [loading, setLoading] = useState(true);
  const [payments, setPayments] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [totalCollected, setTotalCollected] = useState(0);
  const [totalRemaining, setTotalRemaining] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const paymentsData = await fetchPayments();
      setPayments(paymentsData);
      setFilteredPayments(paymentsData);
      setLoading(false);
      // Calculate total collected and remaining amounts
      const collected = paymentsData
        .filter((payment) => payment.paymentVerified)
        .reduce((acc, payment) => acc + payment.totalPrice, 0);
      const remaining = paymentsData
        .filter((payment) => !payment.paymentVerified)
        .reduce((acc, payment) => acc + payment.totalPrice, 0);
      setTotalCollected(collected);
      setTotalRemaining(remaining);

      // Render pie chart
      renderPieChart(collected, remaining);

      // Render activity pie chart
      renderActivityPieChart(paymentsData);
    };

    fetchData();
  }, []); // Run only on mount

  const renderPieChart = (collected, remaining) => {
    const ctx = document.getElementById("pie-chart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Collected Amount", "Remaining Amount"],
        datasets: [
          {
            data: [collected, remaining],
            backgroundColor: ["#36A2EB", "#FFCE56"],
            hoverOffset: 4,
          },
        ],
      },
    });
  };

  const renderActivityPieChart = (paymentsData) => {
    const activities = paymentsData.flatMap((payment) =>
      payment.activities.map((activity) => activity.name)
    );
    const activityCounts = activities.reduce((acc, activity) => {
      acc[activity] = (acc[activity] || 0) + 1;
      return acc;
    }, {});

    const activityChartCanvas = document.getElementById("activity-pie-chart");
    new Chart(activityChartCanvas, {
      type: "pie",
      data: {
        labels: Object.keys(activityCounts),
        datasets: [
          {
            data: Object.values(activityCounts),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
              "#50B432",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  };

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
            className={`py-1 px-2 rounded-md ${
              row.original.paymentVerified
                ? "bg-black text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {row.original.paymentVerified ? "Unverify" : "Verify"}
          </button>
        ),
      },
    ],
    []
  );

  // Filter data based on search input
  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);
    const filteredResults = payments.filter((payment) =>
      payment.user.name.toLowerCase().includes(inputValue)
    );
    setFilteredPayments(filteredResults);
  };

  const handleVerify = async (payment) => {
    const shouldVerify = window.confirm(
      `Are you sure you want to ${
        payment.paymentVerified ? "unverify" : "verify"
      } this payment?`
    );

    if (shouldVerify) {
      try {
        setLoading(true);
        // Make API call to verify/unverify payment
        await axios.put(`/pay/verify/${payment._id}`, {
          paymentVerified: !payment.paymentVerified,
        });

        // Refetch data after verification
        const updatedPayments = await fetchPayments();
        setPayments(updatedPayments);
        setFilteredPayments(updatedPayments);

        setLoading(false);
      } catch (error) {
        console.error("Error verifying/unverifying payment:", error.message);
      }
    }
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: filteredPayments }, useSortBy);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Payment Status Component
      </h2>
      {loading && <Loading />}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchInput}
        onChange={handleSearch}
        className="p-2 mb-4 border rounded-md"
      />

      {/* Pie Charts */}
      <div className="flex flex-col md:flex-row justify-around mb-8">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Total Collection</h3>
          <canvas id="pie-chart" width="300" height="300"></canvas>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Activity Distribution</h3>
          <canvas id="activity-pie-chart" width="300" height="300"></canvas>
        </div>
      </div>

      {/* Table */}
      <table {...getTableProps()} className="min-w-full table-auto border">
        {/* Table Header */}
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
        {/* Table Body */}
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
