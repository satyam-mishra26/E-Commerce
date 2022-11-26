import React, { useEffect } from "react";

function Customize() {
    useEffect(() => {
        window.location.href = "http://localhost:3006/";
      }, []);
  return (
    <div>
        <h4>Redirecting To Customization T-Shirt Editor page</h4>
    </div>
  )
}

export default Customize;
