import React from "react";
type personprops = {
  name: {
    name: string;
    id: number;
  }[];
};
export default function Personlist(props: personprops) {
  console.log(props.name);
  return (
    <div>
      {props.name.map((item) => (
        <>
          <p>{item.name}</p>
          <p>{item.id}</p>
        </>
      ))}
    </div>
  );
}
