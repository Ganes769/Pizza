import { zodResolver } from "@hookform/resolvers/zod";
import { updateName } from "../../User";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  type FormData = {
    firstname: string;
    lastname: string;
    maxCapacity: number;
  };
  const schema: z.ZodType<FormData> = z.object({
    firstname: z.string().min(1, { message: "First name is required" }),
    lastname: z.string().min(1, { message: "Last name is required" }),
    maxCapacity: z
      .number({ message: "capacity cannot be empty" })
      .min(1, { message: "capacity should be greater than 1" })
      .max(100, { message: "max capacity is 100" }),
  });

  function onSubmit(data: FormData) {
    dispatch(updateName(data.firstname));
    toast.success(`Hello ${data.firstname}`);

    navigate({
      to: "/menu",
    });
  }

  type FormValues = z.infer<typeof schema>;
  const { register, control, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            className="input"
            {...register("firstname")}
            type="text"
            id="lastname"
            placeholder="enter your last name"
          />
          {errors.firstname && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {errors.firstname.message}
            </p>
          )}
        </div>

        <div className="m-2">
          <input
            {...register("lastname")}
            id="lastname"
            className="input "
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
            placeholder="max capacity"
            className="input"
            type="number"
            id="maxCapacity"
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
          className="my-4 cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded-lg "
        />
      </div>
    </form>
  );
}
