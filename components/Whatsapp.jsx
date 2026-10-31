'use client'
import { handleCallClick, handleWhatsappClick } from "@/lib/track";
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <>
      {/* WhatsApp Floating Button (Right side) */}
      <a onClick={() => handleWhatsappClick({ source: "Website home page", obj: "N/A" })}
        href="https://wa.link/5alazl"

        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp "
        className="fixed bottom-5 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Call Floating Button (Left side) */}
      <a onClick={() => handleCallClick({ source: "Website home page", obj: "N/A" })}
        href="tel:+918810422935"
        aria-label="Call us"
        className="fixed bottom-21 right-4 z-50 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition animate-bounce"
      >
        <FaPhoneAlt size={27} />
      </a>
    </>
  );
};

export default Whatsapp;
