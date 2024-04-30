import { zodResolver } from "@hookform/resolvers/zod";
import { updateName } from "../../User";
import { useAppDispatch } from "../hooks";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";
import ErrorComponent from "../components/ErrorComponnet";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  type FormData = {
    firstname: string;
    lastname: string;
    maxCapacity: number;
  };
  const defaultValue: FormData = {
    firstname: "",
    lastname: "",
    maxCapacity: 1,
  };
  const schema: z.ZodType<FormData> = z.object({
    firstname: z.string().min(1, { message: "First name is required" }),
    lastname: z.string().min(1, { message: "Last name is required" }),
    maxCapacity: z
      .number({ message: "capacity cannot be empty" })
      .min(0, { message: "capacity should be greater than 1" })
      .max(100, { message: "max capacity is 100" }),
  });

  function onSubmit(data: FormData) {
    console.log(data.firstname, data.lastname, data.maxCapacity);
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
      <div className="w-1/2  mx-auto mt-3 2justify-center flex flex-col items-center  p-4 ">
        <h1 className="mb-8  text-xl font-semibold md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <div className="p-2 w-1/2">
          <Controller
            defaultValue={defaultValue.firstname}
            control={control}
            name="firstname"
            render={({ field }) => (
              <input
                placeholder="enter the title..."
                className="input"
                {...field}
              />
            )}
          />
          {errors.firstname && (
            <ErrorComponent>{errors.firstname.message}</ErrorComponent>
          )}
        </div>

        <div className="m-2 w-1/2">
          <Controller
            defaultValue={defaultValue.lastname}
            control={control}
            name="lastname"
            render={({ field }) => (
              <input
                {...field}
                id="lastname"
                className="input "
                type="text"
                placeholder="enter your last name"
              />
            )}
          />

          {errors.lastname && (
            <ErrorComponent>{errors.lastname.message}</ErrorComponent>
          )}
        </div>
        <div className="m-2 w-1/2">
          <Controller
            defaultValue={defaultValue.maxCapacity}
            control={control}
            name="maxCapacity"
            render={({ field }) => (
              <input
                {...field}
                placeholder="max capacity"
                className="input"
                type="number"
                id="maxCapacity"
              />
            )}
          />

          {errors.maxCapacity && (
            <ErrorComponent>{errors.maxCapacity.message}</ErrorComponent>
          )}
        </div>
        <input
          type="submit"
          value="Submit"
          className="my-4 cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded-lg "
        />
      </div>
    </form>
  );
}
