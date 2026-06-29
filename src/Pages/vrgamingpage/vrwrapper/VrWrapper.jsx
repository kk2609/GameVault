import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHeadset,
  FaGlasses,
  FaGamepad,
  FaUsers,
  FaCloud,
  FaMicrophone,
  FaChair,
  FaKeyboard,
  FaArrowRight,
  FaStar,
  FaUserFriends,
  FaRocket,
  FaHeart,
  FaQuoteLeft,
} from "react-icons/fa";
import VrDevices from "../vrdevices/VrDevices";
import VrFeatures from "../vrfeatures/VrFeatures";

// ✅ Import your VR hero background image
import vrHeroBg from "../../../assets/images/Vrhero.png";

// ✅ Import your VR device images
import metaQuestImg from "../../../assets/images/metaquest3.png";
import psVr2Img from "../../../assets/images/PSVR2.png";
import htcViveImg from "../../../assets/images/HTCViveXRElite.png";
import valveIndexImg from "../../../assets/images/ValveIndex.png";

// ✅ VR Devices Data – Prices in INR
const vrDevices = [
  {
    id: 1,
    name: "Meta Quest 3",
    brand: "Meta",
    price: "₹41,490",
    image: metaQuestImg,
    badge: "Mixed Reality",
    specs: {
      Resolution: "2064 x 2208 per eye",
      RefreshRate: "120Hz",
      FieldOfView: "110°",
      Tracking: "Inside-out",
      Weight: "515g",
      Battery: "2-3 hours",
    },
    features: [
      "Mixed Reality",
      "Color Passthrough",
      "Touch Plus Controllers",
      "Snapdragon XR2 Gen 2",
    ],
  },
  {
    id: 2,
    name: "PS VR2",
    brand: "Sony",
    price: "₹45,650",
    image: psVr2Img,
    badge: "HDR Display",
    specs: {
      Resolution: "2000 x 2040 per eye",
      RefreshRate: "120Hz",
      FieldOfView: "110°",
      Tracking: "Inside-out (4 cameras)",
      Weight: "560g",
      Battery: "Wired",
    },
    features: [
      "HDR Display",
      "Eye Tracking",
      "Adaptive Triggers",
      "Tempest 3D Audio",
    ],
  },
  {
    id: 3,
    name: "HTC Vive XR Elite",
    brand: "HTC",
    price: "₹91,300",
    image: htcViveImg,
    badge: "Mixed Reality",
    specs: {
      Resolution: "1920 x 1920 per eye",
      RefreshRate: "90Hz",
      FieldOfView: "110°",
      Tracking: "Inside-out",
      Weight: "625g",
      Battery: "2 hours",
    },
    features: [
      "Mixed Reality",
      "Hand Tracking",
      "Modular Design",
      "SteamVR Compatible",
    ],
  },
  {
    id: 4,
    name: "Valve Index",
    brand: "Valve",
    price: "₹82,920",
    image: valveIndexImg,
    badge: "Knuckles Controllers",
    specs: {
      Resolution: "1440 x 1600 per eye",
      RefreshRate: "144Hz",
      FieldOfView: "130°",
      Tracking: "Lighthouse",
      Weight: "809g",
      Battery: "Wired",
    },
    features: [
      "Knuckles Controllers",
      "Finger Tracking",
      "144Hz Display",
      "Off-ear Speakers",
    ],
  },
];

// ✅ VR Community Data
const communityStats = [
  { icon: FaUsers, value: "2.5M+", label: "VR Players" },
  { icon: FaUserFriends, value: "150K+", label: "Active Daily" },
  { icon: FaRocket, value: "8K+", label: "VR Games" },
  { icon: FaHeart, value: "4.9★", label: "Community Rating" },
];

const communityReviews = [
  {
    id: 1,
    name: "Alex Rivera",
    avatar: "https://i.pravatar.cc/150?img=1",
    quote:
      "VR has completely changed how I experience gaming. The immersion is unlike anything else!",
    rating: 5,
    game: "Half-Life: Alyx",
  },
  {
    id: 2,
    name: "Jamie Chen",
    avatar: "https://i.pravatar.cc/150?img=2",
    quote:
      "The VR community is one of the most welcoming and passionate communities I've ever been part of.",
    rating: 5,
    game: "Beat Saber",
  },
  {
    id: 3,
    name: "Taylor Kim",
    avatar: "https://i.pravatar.cc/150?img=3",
    quote:
      "From casual gaming to professional esports, VR offers something for everyone.",
    rating: 4,
    game: "Resident Evil 4 VR",
  },
];

const VrWrapper = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      {/* ✅ Hero Section – Fully Responsive */}
      <section
        ref={ref}
        className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat  "
            style={{
              backgroundImage: `url(${vrHeroBg})`,
              //   filter: "blur(2px)",
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        </div>

        {/* Decorative floating badge – Top Right (Desktop only) */}
        <div className="absolute right-6 sm:right-10 top-20 z-10 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-white"
          >
            <div className="text-xl font-bold font-[var(--font-primary-font)]">
              360°
            </div>
            <div className="text-xs font-[var(--font-secondary-font)] text-white/70">
              immersive experience
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl lg:max-w-3xl"
          >
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white font-[var(--font-primary-font)] leading-[0.9] tracking-tighter">
              VR
              <br />
              <span className="text-brand-primary sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r from-brand-primary to-purple-400">
                Gaming
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-6 max-w-lg sm:max-w-xl text-sm sm:text-base lg:text-lg text-white/80 font-[var(--font-secondary-font)] leading-relaxed">
              Dive into the world of virtual reality with the latest headsets,
              immersive experiences, and essential accessories. Step into the
              future of gaming.
            </p>

            {/* Small badges */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-white/60 font-[var(--font-secondary-font)]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
                360° Immersive
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400" />
                Vision Beyond
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400" />
                Next-Gen Tech
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VR Product Sections */}
      <VrDevices devices={vrDevices} />

      {/* VR Features */}
      <VrFeatures />

      {/* ✅ VR Community Section */}
      {/* ✅ VR Community Section – No Hover Effects */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
            VR Community
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            Join millions of players exploring the future of gaming together.
          </p>
        </div>

        {/* Stats – No hover */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {communityStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 text-center shadow-[var(--shadow)]"
              >
                <Icon className="text-3xl sm:text-4xl text-brand-primary mx-auto mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Reviews – No hover effects */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {communityReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-5 sm:p-6 shadow-[var(--shadow)]"
            >
              <FaQuoteLeft className="text-2xl text-brand-primary/20 mb-3" />
              <p className="text-sm sm:text-base text-[var(--text-primary)] font-[var(--font-secondary-font)] leading-relaxed">
                "{review.quote}"
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full border-2 border-brand-primary/30"
                  />
                  <div>
                    <p className="text-sm font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                      {review.name}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                      {review.game}
                    </p>
                  </div>
                </div>
                <div className="flex text-amber-400 text-sm">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Community CTA – button hover kept (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center"
        >
          {/* <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-primary to-purple-600 text-white font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300">
            Join the Community
            <FaArrowRight className="text-xs sm:text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </button> */}
        </motion.div>
      </section>

      {/* CTA */}
    </main>
  );
};

export default VrWrapper;
