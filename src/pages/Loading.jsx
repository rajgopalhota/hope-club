import React, { useEffect, useState } from "react";

export default function Loading() {
  const [showRefreshButton, setShowRefreshButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRefreshButton(true);
    }, 8000); // Show the button after 3 seconds

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, []); // Run only once when the component mounts

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="loadingOnAction">
      <span className="loader slide-fwd-center"></span>
      <p className="text-white slide-fwd-center" onClick={refreshPage}>
        {!showRefreshButton ? <>We are processing your request!</> : <>Click here to reload</>}
      </p>
    </div>
  );
}
