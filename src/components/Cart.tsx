import { useSelector } from "react-redux";
import { cartSliceType } from "../Types/type";
import {
  cleaarcart,
  decreaseQuantity,
  deleteItem,
  getcart,
  increaseQuantity,
} from "../../CartSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { totalCartPrice } from "../../CartSlice";
import EmptyCart from "./EmptyCart";
import { useCallback } from "react";

export default function Cart() {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.user.username);
  const cart = useSelector(getcart);
  const totalPrice = useSelector(totalCartPrice);
  const handleIncreaseQuantity = useCallback(
    (itemId: number) => {
      dispatch(increaseQuantity(itemId));
    },
    [dispatch]
  );
  const handleDecreseQuantity = useCallback(
    (itemid: number) => {
      dispatch(decreaseQuantity(itemid));
    },
    [dispatch]
  );
  return (
    <div className="px-4 py-3">
      {cart.length > 0 ? (
        <div>
          <h2 className="mt-7 text-xl font-semibold">Your cart,{username}</h2>
          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {cart.map((item: cartSliceType) => (
              <li className="py-3 sm:flex sm:items-center sm:justify-between">
                <p className="mb-1 sm:mb-0">{item.quantity}&times;</p>
                <div className="flex items-center justify-between sm:gap-6">
                  <div className="flex items-center justify-center">
                    <div
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="bg-yellow-500 rounded-full flex cursor-pointer  h-9 w-9 justify-center items-center"
                    >
                      +
                    </div>
                    <p className="m-2">{item.quantity}</p>
                    <div
                      onClick={() => handleDecreseQuantity(item.id)}
                      className="bg-yellow-500 rounded-full flex cursor-pointer  h-9 w-9 justify-center items-center"
                    >
                      -
                    </div>
                  </div>
                  <p className="text-sm font-bold">{item.totalPrice} $</p>
                  <p className="text-sm font-bold">{item.name}</p>
                  <button
                    onClick={() => dispatch(deleteItem(item.id))}
                    className="bg-yellow-500 rounded-md h-8 font-semibold w-32
                text-sm "
                  >
                    Delete from cart
                  </button>
                </div>
              </li>
            ))}
            <div className="flex justify-between">
              <p>Total price</p>
              <h4 className="mr-">{totalPrice}$</h4>
            </div>
          </ul>
          <button onClick={() => dispatch(cleaarcart())} className="btn mt-4">
            Clear Cart
          </button>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
