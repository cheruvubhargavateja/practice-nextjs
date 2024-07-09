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
      <div className="w-full my-5 flex justify-between">
        <label className="flex-1 text-lg tracking-wider font-palanquin leading-normal">{name}</label>
        <input
          className="flex-2 input"
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name)}
        />
      </div>

      <div className="text-red-400 text-sm font-montserrat">
        <small>{error && error?.message}</small>
      </div>
    </>
  );
}
