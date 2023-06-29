"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ToastContext } from "../../../../components/ToastProvider/";

function ContactPage() {
  console.log("ToastContext: ", ToastContext);

  const { createToast } = React.useContext(ToastContext);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // send data to server
    router.push("/exercises/02-flash-messages/");
    createToast("Message sent!", "success");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
