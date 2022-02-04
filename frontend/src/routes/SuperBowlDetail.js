import { useParams } from "react-router-dom";

export default function SuperBowlDetail() {
  let params = useParams();
  return <h2>Super Bowl: {params.superbowlId}</h2>;
}
