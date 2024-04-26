import { useAppSelector } from "../hooks";
import { Link } from "@tanstack/react-router";

export default function EmptyCart() {
  const username = useAppSelector((state) => state.user.username);
  return (
    <div className="m-5 ">
      <h2 className=" text-xl font-semibold">
        {username} Your cart is Empty Start Shopping
      </h2>
      <Link to="/menu">
        {" "}
        <button className="btn my-3 ">Start Shopping</button>
      </Link>
    </div>
  );
}
