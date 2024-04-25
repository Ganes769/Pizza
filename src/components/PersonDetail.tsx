import React from "react";
type userdetail = {
  userdetail: {
    name: string;
    id: number;
  };
};

export default function PersonDetail(props: userdetail) {
  return (
    <div>
      <div>
        <p>{props.userdetail.name}</p>
      </div>
    </div>
  );
}
