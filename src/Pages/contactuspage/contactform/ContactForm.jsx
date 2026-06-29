import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 shadow-[var(--shadow)]"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
        Send a Message
      </h2>
      <p className="mt-2 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
        Fill in the form below and we'll get back to you as soon as possible.
      </p>

      {/* Success Message */}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 font-[var(--font-secondary-font)] text-sm"
        >
          ✅ Your message has been sent successfully! We'll get back to you
          soon.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-sm font-medium text-[var(--text-primary)] font-[var(--font-secondary-font)]"
            >
              Full Name *
            </label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:border-brand-primary outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] transition-colors duration-300 font-[var(--font-secondary-font)]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[var(--text-primary)] font-[var(--font-secondary-font)]"
            >
              Email Address *
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:border-brand-primary outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] transition-colors duration-300 font-[var(--font-secondary-font)]"
              />
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-[var(--text-primary)] font-[var(--font-secondary-font)]"
          >
            Phone Number
          </label>
          <div className="relative">
            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:border-brand-primary outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] transition-colors duration-300 font-[var(--font-secondary-font)]"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-1.5">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-[var(--text-primary)] font-[var(--font-secondary-font)]"
          >
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:border-brand-primary outline-none text-sm text-[var(--text-primary)] transition-colors duration-300 font-[var(--font-secondary-font)]"
          >
            <option value="">Select a subject...</option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="business">Business Partnership</option>
            <option value="feedback">Feedback & Suggestions</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-[var(--text-primary)] font-[var(--font-secondary-font)]"
          >
            Message *
          </label>
          <div className="relative">
            <FaComment className="absolute left-4 top-4 text-[var(--text-secondary)]" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Write your message here..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] focus:border-brand-primary outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] resize-y transition-colors duration-300 font-[var(--font-secondary-font)]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed font-[var(--font-secondary-font)]"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane />
              Send Message
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
