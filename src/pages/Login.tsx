import { FormEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useNavigate } from "react-router-dom";
import { updateName } from "../../User";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function Login() {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.username);
  console.log(userName);
  const navigate = useNavigate();
  const [user, setUser] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [capacity, setCapacity] = useState<number>();
  const schema = z.object({
    firstname: z.string().min(1, { message: "First name is required" }),
    lastname: z.string().min(1, { message: "Last name is required" }),
    maxCapacity: z
      .number()
      .min(1, { message: "capacity should be greater than 1" })
      .max(100, { message: "max capacity is 100" }),
  });

  // function handleSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   // dispatch(updateName(user));
  //   // if (userName) {
  //   //   navigate("/menu");
  //   // } else return;
  // }
  function onSubmit(data: FormValues) {
    console.log(data);
    dispatch(updateName(user));

    navigate("/menu");
  }

  type FormValues = z.infer<typeof schema>;
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-1/2 mx-auto mt-3 2justify-center flex flex-col items-center  p-4 ">
        <h1 className="mb-8  text-xl font-semibold md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <div className="p-2">
          <input
            {...register("firstname")}
            id="firstname"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            className="input  w-72"
            type="text"
            placeholder="enter your firstname"
          />
          {errors.firstname && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {errors.firstname.message}
            </p>
          )}
        </div>

        <div className="m-2">
          <input
            value={lastName}
            {...register("lastname")}
            id="lastname"
            onChange={(e) => setLastName(e.target.value)}
            className="input w-72"
            type="text"
            placeholder="enter your last name"
          />
          {errors.lastname && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {errors.lastname.message}
            </p>
          )}
        </div>
        <div className="m-2">
          <input
            {...register("maxCapacity", { valueAsNumber: true })}
            value={capacity}
            placeholder="max capacity"
            className="input  w-72"
            type="number"
            id="maxCapacity"
            onChange={(e) => setCapacity(Number.parseInt(e.target.value))}
          />
          {errors.maxCapacity && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {errors.maxCapacity.message}
            </p>
          )}
        </div>

        <input
          type="submit"
          value="submit"
          className=" cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded-lg "
        />
      </div>
    </Form>
  );
}
