import { Link } from "react-router-dom";
import "../component/Style.css";

function Partners() {
  return (
    <div className="mainpartner">
      <h1>Partners</h1>

      <h3>click here to see the partners list</h3>

      <button className="submit">
        <Link to="/partners/partnerlist" className="ptrl"> Partnerlist </Link>
      </button>

    </div>
  );
}

export default Partners;