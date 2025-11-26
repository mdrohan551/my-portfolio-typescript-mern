// App.tsx
import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Routers from "./Routers";
import Loader from "../Layout/Loader";
import { HelmetProvider } from "react-helmet-async";




const App: React.FC = () => {
  const [loading, setLoading] = useState(true); // Full screen loader state

  useEffect(() => {
    // Full screen loader 3 seconds দেখাবে window reload এ
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // Full screen loader

  return (
    <>
      <HelmetProvider>
        <Toaster position="top-right" />
        <Routers />
      </HelmetProvider>
    </>

  );
};

export default App;
