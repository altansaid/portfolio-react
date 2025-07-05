"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import React, { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        window.alert("Thank you! Your message has been sent.");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      window.alert("Failed to send message. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20 z-10">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-col lg:flex-row gap-8 md:gap-16 items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="w-full md:px-10">
              <form
                onSubmit={sendEmail}
                className="flex flex-col z-10 text-left lg:w-[400px] md:w-full"
              >
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="rounded-lg h-8 my-1 px-3 p-1 bg-transparent border border-black outline-none"
                />
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="rounded-lg h-8 my-1 px-3 py-1 bg-transparent border border-black outline-none"
                />
                <label className="font-semibold">Message</label>
                <textarea
                  name="message"
                  required
                  className="rounded-lg h-[120px] md:h-20 my-1 px-3 py-1 bg-transparent border border-black outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white bg-gray-900 inline-flex items-center mt-4 px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 disabled:opacity-50"
                >
                  <span className="font-semibold">
                    {isSubmitting ? "Sending..." : "Send"}
                  </span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
