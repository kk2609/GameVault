import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaDiscord,
} from "react-icons/fa";

const ContactInformation = ({ info }) => {
  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaTwitch, href: "#", label: "Twitch" },
    { icon: FaDiscord, href: "#", label: "Discord" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-6"
    >
      {/* Information Cards */}
      {info.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 shadow-[var(--shadow)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <Icon className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => (
                  <p
                    key={i}
                    className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* Social Links */}
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 shadow-[var(--shadow)]">
        <h3 className="text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
          Follow Us
        </h3>
        <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)] mt-1">
          Stay connected with us on social media.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="w-11 h-11 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-brand-primary hover:border-brand-primary transition-all duration-300 hover:scale-110"
              >
                <Icon className="text-lg" />
              </a>
            );
          })}
        </div>
      </div>

      {/* ✅ Address Card (No Map) */}
      {/* <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 shadow-[var(--shadow)]">
        <h3 className="text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
          Find Us
        </h3>
        <div className="mt-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6 text-center">
          <p className="text-base font-medium text-[var(--text-primary)] font-[var(--font-primary-font)]">
            📍 GameVault HQ
          </p>
          <p className="mt-1 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            123 Gaming Street
            <br />
            Los Santos, CA 90210
            <br />
            United States
          </p>
        </div>
      </div> */}
    </motion.div>
  );
};

export default ContactInformation;