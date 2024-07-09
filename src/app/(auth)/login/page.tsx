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
    <section className="w-full flex align-middle justify-center mt-[10%]">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="rounded-lg flex flex-col align-middle justify-center
        px-5 py-10 text-black text-lg bg-slate-300 w-[25%] shadow-lg shadow-slate-500"
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

        <button className="mt-5 py-2 bg-slate-800 text-white font-semibold tracking-widest rounded-lg hover:bg-slate-600">
          Log in
        </button>
      </form>
    </section>
  );
}
