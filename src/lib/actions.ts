"use server";

import { FormData } from "@/components/ui/ContactForm";

export const sendMail = async (data: FormData) => {
  console.log(data);
};
