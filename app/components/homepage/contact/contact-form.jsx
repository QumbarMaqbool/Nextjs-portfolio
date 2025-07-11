"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.name && userInput.email && userInput.message) {
      setError((e) => ({ ...e, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      setError((e) => ({ ...e, required: true }));
      return;
    }
    if (error.email) return;

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_W3F_ACCESS_KEY ||
          "481aed8b-859c-40ae-95b0-5509ce378644"
      );
      formData.append("name", userInput.name);
      formData.append("email", userInput.email);
      formData.append("message", userInput.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setUserInput({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please check your network.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>

      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please don&apos;t hesitate to
          contact me. I am open to any work opportunities that align with my
          skills and interests.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name:</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              type="text"
              maxLength="100"
              value={userInput.name}
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              onBlur={checkRequired}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email:</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              type="email"
              maxLength="100"
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
              onBlur={() => {
                checkRequired();
                setError((e) => ({
                  ...e,
                  email: !isValidEmail(userInput.email),
                }));
              }}
              required
            />
            {error.email && (
              <p className="text-sm text-red-400">
                Please provide a valid email!
              </p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message:</label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              rows="4"
              maxLength="500"
              value={userInput.message}
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={checkRequired}
              required
            />
          </div>

          {/* Error note */}
          {error.required && (
            <p className="text-sm text-red-400">All fields are required!</p>
          )}

          {/* Submit button */}
          <button
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200"
            role="button"
            onClick={handleSendMail}
            disabled={isLoading}
          >
            {isLoading ? (
              "Sending Message..."
            ) : (
              <>
                Send Message
                <TbMailForward size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
