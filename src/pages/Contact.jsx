import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-primary">Get in Touch </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted leading-6 sm:leading-7">
            Have a question or want to order something sweet? Send us a message
            and we’ll be happy to hear from you.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-surface rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm"
          >
            {/* Name */}
            <div className="mb-4 sm:mb-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-heading mb-2"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-border rounded-lg p-3 sm:p-3.5 text-sm sm:text-base bg-surface text-body outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Email */}
            <div className="mb-4 sm:mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-heading mb-2"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-border rounded-lg p-3 sm:p-3.5 text-sm sm:text-base bg-surface text-body outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Message */}
            <div className="mb-5 sm:mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-heading mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                className="w-full border border-border rounded-lg p-3 sm:p-3.5 text-sm sm:text-base bg-surface text-body outline-none resize-none focus:border-primary transition-colors"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 sm:py-3.5 px-6 rounded-lg font-medium text-sm sm:text-base hover:bg-primary-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
