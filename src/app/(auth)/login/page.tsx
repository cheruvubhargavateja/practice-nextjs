"use client";

import InputField from "@/components/InputField";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const submitHandler = async (data: any) => {
    axios
      .post("http://localhost:3000/api/login", data)
      .then(function (response) {
        if (response.status == 201) {
          router.push("/home");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="px-10 w-full flex justify-center items-center mt-[15%]">
      <form
      className="w-1/4 shadow-xl px-10 py-5 flex flex-col justify-center items-center rounded-xl"
        onSubmit={handleSubmit(submitHandler)}
      >
        <InputField
          name="email"
          type="email"
          placeholder="please enter email..."
          register={register}
          error={errors.email}
        />

        <InputField
          name="password"
          type="password"
          placeholder="please enter password..."
          register={register}
          error={errors.password}
        />

        <button className="w-full bg-coral-red text-lg font-semibold tracking-widest rounded-full px-10 py-2 text-white leading-normal mt-5">
          Log in
        </button>
      </form>
    </section>
  );
}
