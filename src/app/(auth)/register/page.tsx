"use client";

import InputField from "@/components/InputField";
import { useForm } from "react-hook-form";
import { FormData, UserSchema } from "@/libs/utils/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  const router = useRouter();

  const submitHandler = async (data: FormData) => {
    axios
      .post("http://localhost:3000/api/users", data)
      .then(function (response) {
        if (response.status == 201) {
          router.push("/posts");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="px-10 w-full flex justify-center items-center mt-[15%]">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-1/4 shadow-xl px-10 py-5 flex flex-col justify-center items-center rounded-xl"
      >
        <InputField
          name="username"
          type="text"
          placeholder="please enter name..."
          register={register}
          error={errors.username}
        />

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

        <button className="w-full bg-coral-red text-lg
        font-semibold tracking-widest rounded-full px-10 py-2 text-white leading-normal mt-5">
          Register
        </button>
      </form>
    </section>
  );
}
