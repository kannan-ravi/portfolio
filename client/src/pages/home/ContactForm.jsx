import { useState } from "react";
import { useCreateContactAttemptMutation } from "../../app/services/contactAttemptApi";


const ContactForm = () => {

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [createContactAttempt] = useCreateContactAttemptMutation();

  const handleChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      contactFormData.name &&
      contactFormData.email &&
      contactFormData.message
    ) {
      try {
        createContactAttempt(contactFormData);
        setContactFormData({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please fill all the fields");
    }
  };
  return (
    <section id="contact" className="flex items-center min-h-screen py-10">
      <div className="w-full max-w-4xl px-4 mx-auto">
        <h2 className="mb-6 text-4xl font-bold text-slate-300 contact-heading">
          Contact Me
        </h2>
        <p className="mt-3 text-gray-400 contact-description">
          I'd love to hear from you! Feel free to reach out to me using the form
          below.
        </p>
        <form className="grid gap-4 mt-6 contact-form" onSubmit={handleSubmit}>
          <input
            className="py-2 px-4 rounded-md bg-[#2D3748] text-white w-full"
            placeholder="Your Name"
            type="text"
            name="name"
            onChange={handleChange}
            value={contactFormData.name && contactFormData.name}
          />
          <input
            className="py-2 px-4 rounded-md bg-[#2D3748] text-white"
            placeholder="Your Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={contactFormData.email && contactFormData.email}
          />
          <textarea
            className="py-2 px-4 rounded-md bg-[#2D3748] text-white h-32"
            placeholder="Your Message"
            name="message"
            onChange={handleChange}
            value={contactFormData.message && contactFormData.message}
          />
          <button
            className="py-2 px-4 rounded-md bg-[#4A5568] text-white hover:opacity-85 duration-200"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
