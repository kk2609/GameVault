import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import AnimationWrapper from "../animationwrapper/AnimationWrapper";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, label: "Facebook", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaYoutube, label: "YouTube", href: "#" },
    { icon: FaTwitch, label: "Twitch", href: "#" },
  ];

  // ✅ Added FAQ link in Quick Links
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/games", label: "Games" },
    { to: "/consoles", label: "Consoles" },
    { to: "/accessories", label: "Accessories" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/wishlist", label: "Wishlist" },
    { to: "/compare", label: "Compare" },
    { to: "/faq", label: "FAQ" }, // ✅ New FAQ link
  ];

  const categories = [
    { to: "/games?category=action", label: "Action" },
    { to: "/games?category=adventure", label: "Adventure" },
    { to: "/games?category=rpg", label: "RPG" },
    { to: "/games?category=sports", label: "Sports" },
    { to: "/games?category=shooter", label: "Shooter" },
    { to: "/vr-gaming", label: "VR Gaming" },
  ];

  return (
    <AnimationWrapper animationType="fadeUp" delay={0.2}>
      <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                GameVault
              </h3>
              <p className="mt-4 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                Your ultimate gaming destination. Explore thousands of games,
                consoles, accessories, and exclusive deals – all in one place.
              </p>
              <div className="mt-6 flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className="text-[var(--text-secondary)] hover:text-brand-primary transition-colors duration-300"
                    >
                      <Icon className="text-xl" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-[var(--text-secondary)] hover:text-brand-primary transition-colors duration-300 font-[var(--font-secondary-font)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                Categories
              </h4>
              <ul className="mt-4 space-y-2">
                {categories.map((cat) => (
                  <li key={cat.to}>
                    <Link
                      to={cat.to}
                      className="text-sm text-[var(--text-secondary)] hover:text-brand-primary transition-colors duration-300 font-[var(--font-secondary-font)]"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                Stay Updated
              </h4>
              <p className="mt-2 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                Subscribe to our newsletter for the latest deals and releases.
              </p>
              <form
                className="mt-4 flex flex-col gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex items-center rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] focus-within:border-brand-primary transition-colors duration-300 overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none font-[var(--font-secondary-font)]"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-brand-primary to-purple-600 px-4 py-3 text-white hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </form>
              <div className="mt-4 flex items-center gap-2 text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                <FaEnvelope className="text-brand-primary" />
                <span>No spam, unsubscribe anytime.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border-color)] py-6">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
              © 2026 GameVault. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </AnimationWrapper>
  );
};

export default Footer;