import { ReactNode } from "@tanstack/react-router";
interface Errorprops {
  children: ReactNode;
}
export default function ErrorComponent({ children }: Errorprops) {
  return (
    <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
      {children}
    </p>
  );
}
