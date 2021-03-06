import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import championAPI from "../api/championAPI";
import SuperBowls from "../components/superbowls";

export default function SuperBowlPage() {
  const [superbowls, setSuperbowls] = useState([]);

  useEffect(() => {
    const getSuperbowls = async () => {
      const data = await championAPI.fetchSuperBowls();
      if (data) {
        setSuperbowls(data);
      }
    };

    getSuperbowls();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <Link to="/superbowls/add">Add New Super Bowl</Link>
        <SuperBowls superbowls={superbowls} />
      </nav>
      <Outlet />
    </div>
  );
}
