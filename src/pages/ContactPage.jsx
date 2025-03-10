import { useState } from "react";
import Button from "../components/Button";

const validateField = (name, value) => {
  if (value.trim() === "") return `${name} is required`;
  if (value.length < 3) return `${name} must be at least 3 characters long`;
  if (
    name === "email" &&
    !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)
  )
    return "Invalid email format";
  return "";
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) formErrors[key] = error;
    });

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted", formData);
      setIsSubmitted(true);
      setFormData({ fullName: "", subject: "", email: "", message: "" });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {["fullName", "subject", "email", "message"].map((field) => (
          <div key={field} className="relative">
            {field === "message" ? (
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder={
                  field === "message"
                    ? "Message"
                    : field.charAt(0).toUpperCase() + field.slice(1)
                }
              />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder={
                  field === "fullName"
                    ? "Name"
                    : field.charAt(0).toUpperCase() + field.slice(1)
                }
              />
            )}
            {errors[field] && (
              <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
            )}
          </div>
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>

      {isSubmitted && (
        <div className="bg-teal-100 text-teal-800 p-4 rounded-lg mt-4 text-center">
          Thank you for contacting us! We will get back to you soon.
        </div>
      )}
    </div>
  );
}
