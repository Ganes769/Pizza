import { useEffect, useState } from "react";
import { menuItem } from "../Types/type";
import { useAppSelector } from "../hooks";
import MenuItems from "../components/MenuItem";
export default function Menu() {
  const [menu, setMenu] = useState<menuItem[]>([]);

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
