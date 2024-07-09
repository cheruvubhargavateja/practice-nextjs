import { FormFieldProps } from "@/libs/utils/interfaces";

export default function InputField({
  type,
  name,
  placeholder,
  register,
  error,
  disabled,
}: FormFieldProps) {
  return (
    <>
      <div className="m-5 text-center flex align-middle justify-between w-full">
        <label className="w-[25%] text-left text-slate-800 text-[18px] font-bold font-mono">
          {name}
        </label>
        <input
          className="w-[70%] px-2 mr-2 text-sm bg-slate-400 text-white focus:outline-none rounded-md"
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name)}
        />
      </div>

      <div className="text-red-600 text-center text-sm">
        <small
          style={{
            color: "red",
          }}
        >
          {error && error?.message}
        </small>
      </div>
    </>
  );
}
