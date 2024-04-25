import PersonDetail from "./PersonDetail";
import Personlist from "./Personlist";

export default function SingleUserInfo() {
  const userdetail = {
    name: "john",
    id: 1,
  };
  const person = [
    {
      name: "john",
      id: 1,
    },
    {
      name: "john",
      id: 2,
    },
    {
      name: "john",
      id: 3,
    },
  ];

  return (
    <div>
      {/* <PersonDetail userdetail={userdetail} /> */}
      <Personlist name={person} />
    </div>
  );
}
