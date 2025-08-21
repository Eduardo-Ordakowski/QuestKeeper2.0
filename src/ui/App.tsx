import React from "react";
import Navbar from "./Navbar";
import AddGame from "./pages/AddGame";
import Home from "./pages/Home";

export default function App() {
  const [route, setRoute] = React.useState(window.location.hash || "#/");
  React.useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        {route === "#/" && <Home />}
        {route === "#/add" && <AddGame />}
      </div>
    </div>
  );
}
