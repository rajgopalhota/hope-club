import React from "react";

export default function Loading() {
  return (
    <div className="loadingOnAction">
      <span className="loader slide-fwd-center"></span>
      <p className="text-white slide-fwd-center">
        We are processing your request!
      </p>
    </div>
  );
}
