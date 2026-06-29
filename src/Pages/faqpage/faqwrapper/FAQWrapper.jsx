import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuestionCircle } from "react-icons/fa";
import FAQAccordion from "../faqaccordion/FAQAccordion";
import { faqData } from "../faqdata";

const FAQWrapper = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center text-6xl sm:text-7xl mb-4">
              <FaQuestionCircle className="text-brand-primary/30" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
              Find answers to the most common questions about GameVault. If you
              need further assistance, feel free to contact us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 lg:py-12">
        <FAQAccordion items={faqData} />
      </div>

      {/* Still Have Questions? */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 lg:pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-brand-primary/10 via-purple-500/10 to-pink-500/10 border border-[var(--border-color)] p-6 sm:p-8 lg:p-12 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
            Still have questions?
          </h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="/"
              className="px-6 py-3 rounded-xl border-2 border-[var(--border-color)] text-[var(--text-primary)] font-semibold text-sm hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQWrapper;