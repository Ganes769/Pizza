import { menuItem, menuProps } from "../Types/type";
import { useAppDispatch } from "../hooks";
import { addtocart } from "../../CartSlice";
import { toast } from "react-hot-toast";
import Button from "./Button";

export default function MenuItems({ menu }: menuProps) {
  const dispatch = useAppDispatch();
  function handleAdd(data: menuItem) {
    const newItem = {
      id: data.id,
      soldOut: data.soldOut,
      name: data.name,
      totalPrice: data.unitPrice,
      imageUrl: data.imageUrl,
      quantity: 1,
      unitPrice: data.unitPrice,
    };
    dispatch(addtocart(newItem));
    if (newItem) {
      toast.success("Added Successfully");
    } else {
      return;
    }
  }
  return (
    <div>
      {menu.map((data) => (
        <div key={data.id} className="w-1/2 mx-auto my-2">
          <div
            key={data.id}
            className="bg-white border-b-2 flex items-center  justify-between"
          >
            <div className="flex">
              <img
                className={`h-24 ${data.soldOut ? "opacity-70 grayscale" : ""}`}
                src={data.imageUrl}
              />
              <div className="m-4">
                <h3>Name:{data.name}</h3>
                <p>price:{data.unitPrice} $</p>
              </div>
            </div>
            {data.soldOut == true ? (
              <Button
                disable="cursor-not-allowed"
                textColor="text-white"
                buttonBackGround="bg-gray-800"
              >
                Sold Out
              </Button>
            ) : (
              <Button
                onClick={() => handleAdd(data)}
                buttonBackGround="bg-yellow-500"
                textColor="text-black"
              >
                Add To Cart
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
