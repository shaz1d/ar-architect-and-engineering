"use client";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const ContactForm = ({ className }: Props) => {
  return (
    <form
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
          name="name"
          id="name"
          placeholder="Enter Your Name"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          className="block mt-1 px-4 py-3 text-md w-full text-black rounded-md"
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
      </label>
      <label htmlFor="phone">
        Phone
        <input
          className="block mt-1 px-4 py-3 text-md w-full text-black rounded-md"
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter Your Phone Number"
        />
      </label>
      <label htmlFor="service">
        Service
        <select
          name="service"
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
          name="message"
          id="message"
          cols={20}
          rows={5}
          placeholder="Enter Your Message"
        ></textarea>
      </label>
      <div className="col-span-2 mt-1 text-right">
        <input
          className="px-5 py-3 bg-blue-500 rounded-md font-medium"
          type="submit"
          value="Send Message"
        />
      </div>
    </form>
  );
};

export default ContactForm;
