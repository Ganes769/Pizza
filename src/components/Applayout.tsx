import Header from "./Header";
import { Provider } from "react-redux";
import store from "../../store";
import { Outlet } from "@tanstack/react-router";
import { useAppSelector } from "../hooks";
import { Link } from "@tanstack/react-router";
export default function Applayout() {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <div>
      <Header />
      {cart.length > 0 ? (
        <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm  text-stone-200 sm:px-6 md:text-base">
          <Link to="/cart">
            <p className="uppercase">Open cart &rarr;</p>
          </Link>
          <p>{cart.length} items</p>
        </div>
      ) : (
        ""
      )}
      <Outlet />
    </div>
  );
}
