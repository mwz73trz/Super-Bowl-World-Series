import { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import championAPI from "../api/championAPI";

export default function SuperBowlDetail() {
  const [superbowl, setSuperbowl] = useState(null);
  let params = useParams();

  useEffect(() => {
    const getSuperbowl = async () => {
      const data = await championAPI.fetchSuperBowlById(params.superbowlId);
      if (data) {
        setSuperbowl(data);
      }
    };

    getSuperbowl();
  }, [params.superbowlId]);

  const renderSuperbowl = () => {
    if (!superbowl) {
      return null;
    }

    return (
      <main style={{ padding: "1rem" }}>
        <h2>{superbowl.name}</h2>
        <p>Played on: {superbowl.date_played}</p>
        <p>
          {superbowl.win_team}: {superbowl.win_score}
        </p>
        <p>
          {superbowl.lose_team}: {superbowl.lose_score}
        </p>
        <p>
          Played at {superbowl.stadium} in {superbowl.where}
        </p>
        <p>MVP: {superbowl.mvp}</p>
        <Outlet />
      </main>
    );
  };

  return <div>{renderSuperbowl()}</div>;
}
