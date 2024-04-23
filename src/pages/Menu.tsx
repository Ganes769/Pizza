import { useEffect, useState } from "react";
import { menuItem } from "../Types/Cart";
import { useAppDispatch, useAppSelector } from "../hooks";
import MenuItems from "../components/MenuItem";
export default function Menu() {
  // const currentQuantity = useAppSelector(getcurrentQuantitybyId());
  const cart = useAppSelector((state) => state.cart.cart);
  console.log(cart);
  // console.log(id);
  const [menu, setMenu] = useState<menuItem[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    async function getMenu() {
      const res = await fetch(
        "https://react-fast-pizza-api.onrender.com/api/menu"
      );
      const result = await res.json();
      const { data } = result;

      setMenu(data);
    }
    getMenu();
  }, []);
  console.log(menu);

  return <MenuItems menu={menu} />;
}
