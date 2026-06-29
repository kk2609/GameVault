import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import ContactForm from "../contactform/ContactForm";
import ContactInformation from "../contactinformation/ContactInformation";

const ContactWrapper = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: ["123 Gaming Street", "Los Santos, CA 90210", "United States"],
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["support@gamevault.com", "business@gamevault.com"],
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: [
        "Mon - Fri: 9:00 AM - 9:00 PM",
        "Sat - Sun: 10:00 AM - 6:00 PM",
      ],
    },
  ];

  return (
    <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[var(--bg-secondary)]"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
              Have a question, suggestion, or just want to say hello? We'd love
              to hear from you. Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Form (2/3) */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Information (1/3) */}
          <div className="space-y-6">
            <ContactInformation info={contactInfo} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactWrapper;
