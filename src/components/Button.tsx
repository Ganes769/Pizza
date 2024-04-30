import { ReactNode } from "@tanstack/react-router";
import { type ComponentPropsWithoutRef } from "react";
type ButtonProps = {
  buttonBackGround: string;
  textColor: string;
  children?: ReactNode;
  disable?: string;
  onClick?: () => void;
} & ComponentPropsWithoutRef<"button">;
export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={` ${props.textColor} ${props.buttonBackGround} ${props.disable} rounded-md  h-8 font-semibold w-32 text-sm`}
    >
      {props.children}
    </button>
  );
}
