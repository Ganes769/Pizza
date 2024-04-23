import { useSelector } from "react-redux";
import { deleteItem, getcart } from "../../CartSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { totalCartPrice } from "../../CartSlice";
export default function Cart() {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.user.username);
  const cart = useSelector(getcart);
  const totalPrice = useAppSelector(totalCartPrice);
  console.log(totalPrice);
  return (
    <div className="px-4 py-3">
      <h2 className="mt-7 text-xl font-semibold">Your cart,{username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item: any) => (
          <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">{item.quantity}&times;</p>
            <div className="flex items-center justify-between sm:gap-6">
              <div className="flex items-center justify-center">
                <div className="bg-yellow-500 rounded-full flex cursor-pointer  h-9 w-9 justify-center items-center">
                  +
                </div>
                <p className="m-2">1</p>
                <div className="bg-yellow-500 rounded-full flex cursor-pointer  h-9 w-9 justify-center items-center">
                  -
                </div>
              </div>
              <p className="text-sm font-bold">{item.unitPrice} $</p>
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
    </div>
  );
}