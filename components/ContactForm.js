import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-auto p-5 lg:p-10">
      <h4 className="text-2xl font-semibold text-blueGray-800">
        Want us to Collaborate?
      </h4>
      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
        Fill this form and I'll respond within 24 hours.
      </p>

      <div className="relative w-full mb-4 mt-8">
        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 tracking-wide">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-blueGray-200 px-4 py-3 placeholder-blueGray-300 text-blueGray-700 bg-white rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blueGray-400 focus:border-transparent w-full transition-all duration-200"
          placeholder="Full Name"
        />
      </div>

      <div className="relative w-full mb-4">
        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 tracking-wide">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-blueGray-200 px-4 py-3 placeholder-blueGray-300 text-blueGray-700 bg-white rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blueGray-400 focus:border-transparent w-full transition-all duration-200"
          placeholder="Email"
        />
      </div>

      <div className="relative w-full mb-4">
        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 tracking-wide">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="border border-blueGray-200 px-4 py-3 placeholder-blueGray-300 text-blueGray-700 bg-white rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blueGray-400 focus:border-transparent w-full transition-all duration-200"
          placeholder="Type a message..."
        />
      </div>

      <div className="text-center mt-10 mb-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center bg-blueGray-800 hover:bg-blueGray-900 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-10 py-3.5 rounded-full transition-colors duration-200"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <p className="mt-4 text-sm text-blueGray-500">{status}</p>
        )}
      </div>
    </form>
  );
}