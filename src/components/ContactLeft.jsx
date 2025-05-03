import React, { useState } from "react";

const ContactLeft = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "This field is required";
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted!");
    }
  };
  const inputClass = (name) => {
    const isEmpty = !form[name];
    const basePlaceholder = errors[name]
      ? "placeholder-[#F67E7E]"
      : isEmpty
      ? "placeholder-gray-300 focus:placeholder-white"
      : "placeholder-white";

    return `w-full bg-transparent border-b py-2 transition-all duration-300 ease-in-out
    focus:outline-none
    placeholder:livvic-semibold placeholder:text-[15px]
    placeholder:leading-[167%] placeholder:tracking-[-0.01em]
    ${basePlaceholder}
    ${
      errors[name]
        ? "border-[#F67E7E] text-[#F67E7E]"
        : "border-white text-white focus:border-[#79C8C7]"
    }`;
  };

  return (
    <section className="flex items-center justify-center w-[542px] ">
      <form onSubmit={handleSubmit} className="w-full max-w-[540px] space-y-6">
        <div>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="text-[#F67E7E] text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="text-[#F67E7E] text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <input
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className={inputClass("company")}
          />
          {errors.company && (
            <p className="text-[#F67E7E] text-sm mt-1">{errors.company}</p>
          )}
        </div>
        <div>
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className={inputClass("title")}
          />
          {errors.title && (
            <p className="text-[#F67E7E] text-sm mt-1">{errors.title}</p>
          )}
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className={`${inputClass("message")} resize-none h-24`}
          />
          {errors.message && (
            <p className="text-[#F67E7E] text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-white text-teal-900 px-6 py-2 rounded-full livvic-semibold cursor-pointer hover:bg-[#79C8C7]"
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default ContactLeft;
