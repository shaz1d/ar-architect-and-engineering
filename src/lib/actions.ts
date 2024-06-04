"use server";

import { FormData } from "@/components/ui/ContactForm";
import nodemailer from "nodemailer";

export const sendMail = async (data: FormData) => {
  const tranporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GAPP_PASSWORD,
    },
  });

  try {
    tranporter.verify();
  } catch (error) {
    console.log(error);
    return { status: "500", message: "Gmail service not verified" };
  }

  const mailOptions = {
    from: process.env.GMAIL,
    to: process.env.GMAIL,
    subject: "New Message",
    text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nMessage: ${data.message}`,
  };

  try {
    await tranporter.sendMail(mailOptions);
    return { status: "200", message: "Message sent successfully" };
  } catch (error) {
    console.log(error);
    return { status: "500", message: "Failed to send message" };
  }
};
