import { Link } from "react-router-dom";

export default function SuperBowls(props) {
  const renderSuperBowls = () => {
    if (!props.superbowls) {
      return null;
    }

    return props.superbowls.map((superbowl, index) => {
      return (
        <li key={index}>
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/superbowls/${superbowl.id}`}
          >
            {superbowl.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{renderSuperBowls()}</ul>
    </div>
  );
}
