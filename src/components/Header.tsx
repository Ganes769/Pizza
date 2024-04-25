import { useSelector } from "react-redux";
import { Link } from "@tanstack/react-router";
export default function Header() {
  const username = useSelector((state: any) => state.user.username);
  return (
    <nav className="bg-yellow-500 w-full p-5 flex justify-between">
      {username ? (
        <Link to="/menu">
          <h4>Hello React...</h4>
        </Link>
      ) : (
        <h4>Hello React Co..</h4>
      )}
      <h2>{username}</h2>
    </nav>
  );
}
