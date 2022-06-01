import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <section className="heading">
        <h1>What do you need help with {user ? user.name : null} ?</h1>
        <p>Select an option below</p>
      </section>

      <Link to={"/new-ticket"} className="btn btn-reverse btn-block">
        {" "}
        <FaQuestionCircle />
        Create a new ticket
      </Link>
      <Link to={"/tickets"} className="btn btn-block">
        {" "}
        <FaTicketAlt />
        View my ticket
      </Link>
    </>
  );
}

export default Home;
