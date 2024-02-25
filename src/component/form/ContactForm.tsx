import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log(data); // Aquí puedes manejar los datos del formulario, por ejemplo, enviarlos a un servidor
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-neutral-50 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-white text-sm font-bold mb-2"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">Name is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-white text-sm font-bold mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email address"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">Valid email is required</p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-white text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="text-red-500 text-xs italic">Message is required</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
