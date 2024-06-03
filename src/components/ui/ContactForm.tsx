"use client";
import { sendMail } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";

type Props = {
  className?: string;
};
export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
};

const ContactForm = ({ className }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    delayError: 500,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await sendMail(data);
      })}
      className={cn(
        className,
        "p-6 bg-slate-900 max-w-[500px] grid grid-cols-2 gap-3 mt-8 rounded-lg"
      )}
    >
      <label htmlFor="name">
        Name
        <input
          className="block mt-1 px-4 py-3 text-md w-full text-black rounded-md"
          type="text"
          {...register("name", { required: "This field is required" })}
          id="name"
          placeholder="Enter Your Name"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </label>
      <label htmlFor="email">
        Email
        <input
          className="block mt-1 px-4 py-3 text-md w-full text-black rounded-md"
          type="text"
          {...register("email", { required: "Email is required" })}
          id="email"
          placeholder="Enter Your Email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </label>
      <label htmlFor="phone">
        Phone
        <input
          className="block mt-1 px-4 py-3 text-md w-full text-black rounded-md"
          type="tel"
          {...register("phone")}
          id="phone"
          placeholder="Enter Your Phone Number"
        />
      </label>
      <label htmlFor="service">
        Service
        <select
          {...register("service")}
          id="service"
          className="block rounded-md px-4 py-3 text-black w-full mt-1"
        >
          <option value="">-- Select Service --</option>
          <option value="architecture">Architecture</option>
          <option value="planning">Planning</option>
          <option value="interior-design">Interior Design</option>
          <option value="landscape-architecture">Landscape Architecture</option>
          <option value="visualization">Visualization</option>
          <option value="presentation">Presentation</option>
        </select>
      </label>
      <label htmlFor="message" className="col-span-2">
        Message
        <textarea
          className="block mt-1  px-4 py-3 text-md w-full text-black rounded-md"
          {...register("message", { required: "This field is required" })}
          id="message"
          cols={20}
          rows={5}
          placeholder="Enter Your Message"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </label>
      <div className="col-span-2 mt-1 text-right">
        <input
          className="px-5 py-3 bg-blue-500 rounded-md font-medium cursor-pointer"
          type="submit"
          value="Send Message"
        />
      </div>
    </form>
  );
};

export default ContactForm;
