import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function Header() {
  const username = useSelector((state: any) => state.user.username);
  return (
    <nav className="bg-yellow-500 w-full p-5 flex justify-between">
      {username ? (
        <NavLink to={"/menu"}>
          <h4>Hello React...</h4>
        </NavLink>
      ) : (
        <h4>Hello React Co..</h4>
      )}
      {/* <button className="bg-yellow-500 p-2">Register</button> */}
      <h2>{username}</h2>
    </nav>
  );
}
