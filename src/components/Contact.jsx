import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      to_name: 'Imran Ansari', // Replace with recipient name or keep it static
      from_name: data.name,
      message: data.message,
    };

    emailjs.send(
      'service_wj6u1os', // replace with your EmailJS service ID
      'template_uz5f0be', // replace with your EmailJS template ID
      templateParams,
      'Wwc_5P4uz8O7WJzkH' // replace with your EmailJS public key
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success("Your message has been sent");
    }).catch((error) => {
      console.log('FAILED...', error);
      toast.error("Something went wrong");
    });
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-4">Contact me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Enter your query"
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
