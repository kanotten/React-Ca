import { useState } from "react";
import Button from "../components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!formData.fullName) formErrors.fullName = "Full Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/))
      formErrors.email = "Invalid email format";
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted", formData);

      setFormData({ fullName: "", subject: "", email: "", message: "" });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-lg font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-lg font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
