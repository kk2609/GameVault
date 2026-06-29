// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FaHeadphones, FaKeyboard, FaChair, FaArrowRight, FaPlus, FaCog } from "react-icons/fa";
// import GamingAudio from "../gamingaudio/GamingAudio";
// import GamingPeripherals from "../gamingperipherals/GamingPeripherals";
// import GamingSetupGear from "../gamingsetupgear/GamingSetupGear";

// // ✅ Hero Product for Audio
// const heroAudio = {
//   id: "hero",
//   name: "SteelSeries Arctis Nova Pro",
//   brand: "SteelSeries",
//   price: "₹24,999",
//   image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600",
//   features: [
//     "Power dynamic drivers",
//     "Premium audio amplification",
//     "Noise-canceling microphone",
//     "Multi-platform compatibility",
//     "30+ hour battery life",
//   ],
// };

// // ✅ Audio Products (non-hero)
// const audioProducts = [
//   {
//     id: 1,
//     name: "HyperX Cloud Revolver",
//     brand: "HyperX",
//     price: "₹9,999",
//     image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400",
//   },
//   {
//     id: 2,
//     name: "Razer BlackShark V2",
//     brand: "Razer",
//     price: "₹8,499",
//     image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400",
//   },
//   {
//     id: 3,
//     name: "Logitech G Pro X",
//     brand: "Logitech",
//     price: "₹12,499",
//     image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400",
//   },
//   {
//     id: 4,
//     name: "Corsair Virtuoso RGB",
//     brand: "Corsair",
//     price: "₹14,999",
//     image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400",
//   },
// ];

// // ✅ Peripherals Data
// const peripheralsData = [
//   {
//     id: 1,
//     name: "Custom Switches with RGB",
//     brand: "Custom",
//     price: "₹4,999",
//     image: "https://images.unsplash.com/photo-1618384887929-16ec33add9a1?w=400",
//   },
//   {
//     id: 2,
//     name: "Mechanical Keyboard",
//     brand: "Ducky",
//     price: "₹12,999",
//     image: "https://images.unsplash.com/photo-1618384887929-16ec33add9a1?w=400",
//   },
//   {
//     id: 3,
//     name: "Exploded In-ray View",
//     brand: "Glorious",
//     price: "₹8,999",
//     image: "https://images.unsplash.com/photo-1618384887929-16ec33add9a1?w=400",
//   },
//   {
//     id: 4,
//     name: "Optical Sensor",
//     brand: "Pulsar",
//     price: "₹6,499",
//     image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400",
//   },
// ];

// // ✅ Setup Gear Data
// const setupGearData = [
//   {
//     id: 1,
//     name: "Secretlab Magnus Desk",
//     brand: "Secretlab",
//     price: "₹49,999",
//     image: "https://images.unsplash.com/photo-1598550887819-3cd3b4f8d17f?w=400",
//   },
//   {
//     id: 2,
//     name: "Aura PC Case",
//     brand: "NZXT",
//     price: "₹15,999",
//     image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400",
//   },
// ];

// const AccessoriesWrapper = () => {
//   const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

//   return (
//     <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
//       {/* Hero Section - Loadout Constructor */}
//       <section
//         ref={ref}
//         className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[var(--bg-secondary)]"
//       >
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
//         </div>
//         <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex items-center justify-center gap-3 text-brand-primary/30 mb-4">
//               <FaCog className="text-3xl sm:text-4xl" />
//               <span className="text-lg sm:text-xl font-bold font-[var(--font-primary-font)] text-brand-primary/40">
//                 LOADOUT CONSTRUCTOR
//               </span>
//             </div>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//               Build Your <span className="text-brand-primary">Ultimate Setup</span>
//             </h1>
//             <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
//               Mix and match the best gaming gear. Create your perfect loadout
//               with our curated selection.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Gaming Audio - Hero Product Layout */}
//       <GamingAudio heroProduct={heroAudio} products={audioProducts} />

//       {/* Peripherals */}
//       <GamingPeripherals devices={peripheralsData} />

//       {/* Setup Gear */}
//       <GamingSetupGear devices={setupGearData} />

//       {/* Compare Loadout CTA */}
//       <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="rounded-3xl bg-gradient-to-r from-brand-primary/10 via-purple-500/10 to-pink-500/10 border border-[var(--border-color)] p-6 sm:p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6"
//         >
//           <div>
//             <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//               Compare Loadout
//             </h3>
//             <p className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//               3 items added to your loadout
//             </p>
//           </div>
//           <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 font-[var(--font-secondary-font)]">
//             <FaPlus className="text-sm" />
//             Compare Loadout
//           </button>
//         </motion.div>
//       </section>
//     </main>
//   );
// };

// export default AccessoriesWrapper;

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHeadphones, FaKeyboard, FaChair, FaCog } from "react-icons/fa";
import GamingAudio from "../gamingaudio/GamingAudio";
import GamingPeripherals from "../gamingperipherals/GamingPeripherals";
import GamingSetupGear from "../gamingsetupgear/GamingSetupGear";

// ✅ Import Hero Background Image
import heroBg from "../../../assets/images/accessoriesherobann.jpg";

// ✅ Import Local Accessory Images
import imgSteelSeriesArctisNovaPro from "../../../assets/accessories/SteelSeries Arctis Nova Pro.png";
import imgHyperXCloudAlphaWireless from "../../../assets/accessories/HyperX Cloud Alpha Wireless.png";
import imgRazerBlackSharkV2 from "../../../assets/accessories/Razer BlackShark V2.png";
import imgLogitechGProX from "../../../assets/accessories/Logitech G Pro X.png";
import imgCorsair from "../../../assets/accessories/Corsair.png";
import imgCustomSwitchesWithRGB from "../../../assets/accessories/Custom Switches with RGB.png";
import imgMechanicalKeyboard from "../../../assets/accessories/Mechanical Keyboard.png";
import imgGamingChair from "../../../assets/accessories/Gaming Chair.png";
import imgSecretlabMagnusDesk from "../../../assets/accessories/Secretlab Magnus Desk.png";
import imgAuraPCCase from "../../../assets/accessories/Aura PC Case.png";

// ✅ Hero Product Data
const heroAudio = {
  id: "hero-audio",
  name: "SteelSeries Arctis Nova Pro",
  brand: "SteelSeries",
  price: "₹24,999",
  image: imgSteelSeriesArctisNovaPro,
  features: [
    "Planar dynamic drivers",
    "Premium audio amplification",
    "Noise-canceling microphone",
    "Multi-platform compatibility",
    "Abstract audio wave animation active",
  ],
  specs: {
    driver: "40mm Neodymium",
    frequency: "10Hz – 40kHz",
    impedance: "32Ω",
    battery: "30+ hours",
    connectivity: "USB-C / 3.5mm",
    weight: "298g",
  },
  inTheBox: [
    "Headset",
    "USB-C Cable",
    "3.5mm Cable",
    "Carrying Pouch",
    "Quick Start Guide",
  ],
};

// ✅ Audio Products
const audioProducts = [
  {
    id: "audio-1",
    name: "HyperX Cloud Alpha Wireless",
    brand: "HyperX",
    price: "₹18,999",
    image: imgHyperXCloudAlphaWireless,
    specs: { battery: "300 hrs", driver: "50mm", weight: "298g" },
  },
  {
    id: "audio-2",
    name: "Razer BlackShark V2",
    brand: "Razer",
    price: "₹8,499",
    image: imgRazerBlackSharkV2,
    specs: { driver: "50mm", weight: "262g", connectivity: "3.5mm" },
  },
  {
    id: "audio-3",
    name: "Logitech G Pro X",
    brand: "Logitech",
    price: "₹12,499",
    image: imgLogitechGProX,
    specs: { driver: "50mm", weight: "278g", connectivity: "USB / 3.5mm" },
  },
  {
    id: "audio-4",
    name: "Corsair Virtuoso RGB",
    brand: "Corsair",
    price: "₹14,999",
    image: imgCorsair,
    specs: { battery: "20 hrs", driver: "50mm", weight: "372g" },
  },
];

// ✅ Peripherals Data
const peripheralsData = [
  {
    id: "periph-1",
    name: "Custom Switches with RGB",
    brand: "Custom Seriole",
    price: "₹4,999",
    image: imgCustomSwitchesWithRGB,
    tags: ["Carbon Seriole", "With RGB"],
    specs: { switches: "Gateron Yellow", actuation: "45g", rgb: "Per-key" },
  },
  {
    id: "periph-2",
    name: "Mechanical Keyboard",
    brand: "Keyboards",
    price: "₹12,999",
    image: imgMechanicalKeyboard,
    tags: ["Custom Switch", "RGB"],
    specs: {
      switches: "Cherry MX Blue",
      actuation: "50g",
      keycaps: "PBT Doubleshot",
    },
  },
  {
    id: "periph-3",
    name: "Gaming Chair",
    brand: "Concor",
    price: "₹8,999",
    image: imgGamingChair,
    tags: ["Metharfood", "Filssbond"],
    isExploded: true,
    specs: {
      technology: "Optical-mechanical",
      actuation: "1.2mm",
      durability: "100M clicks",
    },
  },
  {
    id: "periph-4",
    name: "Wireless Headphones",
    brand: "Logitech",
    price: "₹6,499",
    image: imgLogitechGProX,
    tags: ["46g", "1.9166", "1.58 Mxg"],
    specs: { sensor: "HERO 25K", dpi: "25,600", ips: "400", weight: "46g" },
  },
];

// ✅ Setup Gear Data
const setupGearData = [
  {
    id: "gear-1",
    name: "Secretlab Magnus Desk",
    brand: "RGO ROOD",
    price: "₹15,999",
    image: imgSecretlabMagnusDesk,
    colors: ["#3b2d54", "#e2e8f0", "#718096", "#b5a287"],
    rotation: "260°",
    specs: {
      material: "Steel",
      adjustment: "Electric",
      weight: "45kg",
      height: "720mm",
    },
  },
  {
    id: "gear-2",
    name: "Aura PC Case",
    brand: "NZXT",
    prices: { variant1: "₹15,399", variant2: "₹19,999" },
    image: imgAuraPCCase,
    colors: ["#3b2d54", "#e2e8f0", "#718096", "#9f8a70"],
    rotation: "360°",
    specs: [
      { label: "Case Type", val1: "Mid Tower", val2: "ATX" },
      { label: "Cooling", val1: "3x 120mm", val2: "360mm Radiator" },
      { label: "Material", val1: "Steel + Glass", val2: "Aluminum" },
      { label: "RGB", val1: "Yes", val2: "Addressable" },
    ],
  },
];

const AccessoriesWrapper = () => {
  const [activeTab, setActiveTab] = useState("audio");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <main className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen transition-colors duration-300 selection:bg-brand-primary/30 overflow-x-hidden">
      {/* 🌌 Hero Area with Background Image */}
      <section
        ref={ref}
        className="relative pt-32 pb-16 overflow-hidden bg-[var(--bg-secondary)] border-b border-[var(--border-color)]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: `url(${heroBg})`,
              //   filter: "blur(2px)",
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        </div>

        {/* Grid Overlay (decorative) – optional */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white drop-shadow-2xl">
              Loadout Constructor
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-[var(--font-secondary-font)]">
              Build your ultimate gaming setup with our curated selection of
              premium gear.
            </p>

            {/* Blueprint Display – still visible on top of image */}
            <div className="mt-8 max-w-3xl mx-auto border border-white/20 bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-2xl relative">
              <div className="w-full h-48 border-b-2 border-dashed border-white/20 relative flex items-center justify-around">
                <div className="absolute bottom-0 w-11/12 h-1 bg-brand-primary/50 rounded" />
                <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="p-3 bg-brand-primary/20 border border-brand-primary/30 rounded-lg text-brand-primary">
                    Wifi
                  </div>
                  <div className="w-12 h-16 border border-white/20 rounded-t-full mt-1" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="px-6 py-2 bg-brand-primary/20 border border-white/20 rounded-md text-xs tracking-widest text-brand-primary">
                    Battle Station
                  </div>
                  <div className="w-40 h-24 border-2 border-white/30 bg-black/30 rounded flex items-center justify-center">
                    <div className="w-24 h-1 bg-brand-primary/40 mt-auto mb-2" />
                  </div>
                  <div className="w-8 h-6 bg-brand-primary/20 border-x border-white/20" />
                </div>
                <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="p-2 bg-brand-primary/20 border border-brand-primary/30 rounded-lg text-xs text-brand-primary">
                    PC Case
                  </div>
                  <div className="w-16 h-24 border-2 border-white/30 rounded bg-black/30 flex flex-col justify-between p-1">
                    <div className="flex justify-between">
                      <div className="w-2 h-2 rounded-full bg-brand-primary/30" />
                      <div className="w-2 h-2 rounded-full bg-brand-primary/30" />
                    </div>
                    <div className="w-full h-12 bg-brand-primary/20 rounded border border-white/10" />
                  </div>
                </div>
              </div>
              <div className="w-32 py-1 mx-auto bg-brand-primary/30 border border-brand-primary/40 rounded text-center text-xs text-brand-primary tracking-wider -mt-4 z-20 relative backdrop-blur-sm">
                Keyboard
              </div>
            </div>

            {/* Brand Bar – semi-transparent */}
            {/* <div className="mt-12 max-w-3xl mx-auto bg-black/40 backdrop-blur-md border border-white/20 rounded-full p-2 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-6 pl-6 text-xs font-bold tracking-widest text-white/60">
                <span className="hover:text-brand-primary transition-colors cursor-pointer">RAZER</span>
                <span className="hover:text-brand-primary transition-colors cursor-pointer">logitech G</span>
                <span className="hover:text-brand-primary transition-colors cursor-pointer">HYPERX</span>
              </div>
              <div className="h-6 w-[1px] bg-white/20" />
              <div className="flex items-center gap-2 pr-2">
                <button onClick={() => setActiveTab("audio")} className={`p-2.5 rounded-full transition-all ${activeTab === "audio" ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30" : "text-white/60 hover:bg-white/10"}`}><FaHeadphones size={16} /></button>
                <button onClick={() => setActiveTab("peripherals")} className={`p-2.5 rounded-full transition-all ${activeTab === "peripherals" ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30" : "text-white/60 hover:bg-white/10"}`}><FaKeyboard size={16} /></button>
                <button onClick={() => setActiveTab("gear")} className={`p-2.5 rounded-full transition-all ${activeTab === "gear" ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30" : "text-white/60 hover:bg-white/10"}`}><FaChair size={16} /></button>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <div className="space-y-4">
        <GamingAudio heroProduct={heroAudio} products={audioProducts} />
        <GamingPeripherals devices={peripheralsData} />
        <GamingSetupGear devices={setupGearData} />
      </div>
    </main>
  );
};

export default AccessoriesWrapper;
