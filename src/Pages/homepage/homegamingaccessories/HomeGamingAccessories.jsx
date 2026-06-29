// import { Link } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaHeadset,
//   FaMouse,
//   FaFan,
//   FaKeyboard,
// } from "react-icons/fa";
// import AnimationWrapper from "../../../Components/animationwrapper/AnimationWrapper";
// import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

// // Accessories data – 4 products displayed on home page
// const accessories = [
//   {
//     id: 1,
//     name: "Wireless Gaming Headset",
//     brand: "HyperX",
//     price: "$89.99",
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
//     icon: FaHeadset,
//     color: "from-purple-500 to-pink-500",
//     category: "Headphone",
//   },
//   {
//     id: 2,
//     name: "RGB Gaming Mouse",
//     brand: "Logitech",
//     price: "$49.99",
//     image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
//     icon: FaMouse,
//     color: "from-blue-500 to-cyan-500",
//     category: "Mouse",
//   },
//   {
//     id: 3,
//     name: "Laptop Cooling Pad",
//     brand: "Cooler Master",
//     price: "$39.99",
//     image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400",
//     icon: FaFan,
//     color: "from-green-500 to-emerald-500",
//     category: "Cooling",
//   },
//   {
//     id: 4,
//     name: "Mechanical Gaming Keyboard",
//     brand: "Corsair",
//     price: "$129.99",
//     image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
//     icon: FaKeyboard,
//     color: "from-orange-500 to-red-500",
//     category: "Keyboard",
//   },
// ];

// const HomeGamingAccessories = () => {
//   return (
//     <AnimationWrapper animationType="fadeUp" delay={0.1}>
//       <section className="bg-[var(--bg-primary)] py-16 transition-colors duration-300">
//         <div className="mx-auto max-w-7xl px-6">
//           {/* Header */}
//           <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//             <div>
//               <span
//                 className="inline-block rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary"
//                 style={{ fontFamily: "var(--font-secondary-font)" }}
//               >
//                 🎧 Premium Gear
//               </span>
//               <h2
//                 className="mt-3 text-3xl font-bold text-[var(--text-primary)] lg:text-4xl"
//                 style={{ fontFamily: "var(--font-primary-font)" }}
//               >
//                 Gaming Accessories
//               </h2>
//               <p
//                 className="mt-2 text-[var(--text-secondary)]"
//                 style={{ fontFamily: "var(--font-secondary-font)" }}
//               >
//                 Level up your setup with the best gaming peripherals
//               </p>
//             </div>

//             <Link
//               to="/accessories"
//               className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-xl
//                 bg-gradient-to-r
//                 from-brand-primary
//                 to-purple-600
//                 px-6
//                 py-3
//                 font-semibold
//                 text-white
//                 transition-all
//                 duration-300
//                 hover:shadow-lg
//                 hover:shadow-brand-primary/30
//                 hover:-translate-y-0.5
//               "
//               style={{ fontFamily: "var(--font-secondary-font)" }}
//             >
//               View All Accessories
//               <FaArrowRight />
//             </Link>
//           </div>

//           {/* Accessories Grid – 4 products */}
//           <StaggerContainer
//             delay={0.3}
//             staggerChildren={0.1}
//             className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
//           >
//             {accessories.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={item.id}
//                   className="
//                     group
//                     overflow-hidden
//                     rounded-2xl
//                     bg-[var(--bg-card)]
//                     border
//                     border-[var(--border-color)]
//                     shadow-[var(--shadow)]
//                     transition-all
//                     duration-500
//                     hover:-translate-y-3
//                     hover:shadow-[var(--shadow-hover)]
//                   "
//                 >
//                   {/* Product Image */}
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     {/* Category Badge */}
//                     <span
//                       className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm"
//                       style={{ fontFamily: "var(--font-secondary-font)" }}
//                     >
//                       {item.category}
//                     </span>
//                     {/* Icon overlay on hover */}
//                     <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                       <div
//                         className={`
//                           rounded-full
//                           bg-gradient-to-br
//                           ${item.color}
//                           p-4
//                           text-3xl
//                           text-white
//                           shadow-lg
//                           transition-transform
//                           duration-300
//                           group-hover:scale-110
//                         `}
//                       >
//                         <Icon />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Product Details */}
//                   <div className="p-5">
//                     <h3
//                       className="text-lg font-bold text-[var(--text-primary)] line-clamp-1"
//                       style={{ fontFamily: "var(--font-primary-font)" }}
//                     >
//                       {item.name}
//                     </h3>
//                     <p
//                       className="mt-1 text-sm text-[var(--text-secondary)]"
//                       style={{ fontFamily: "var(--font-secondary-font)" }}
//                     >
//                       {item.brand}
//                     </p>
//                     <div className="mt-3 flex items-center justify-between">
//                       <span
//                         className="text-xl font-bold text-brand-primary"
//                         style={{ fontFamily: "var(--font-primary-font)" }}
//                       >
//                         {item.price}
//                       </span>
//                       <button
//                         className="
//                           rounded-full
//                           bg-brand-primary/10
//                           p-2
//                           text-brand-primary
//                           transition-all
//                           duration-300
//                           hover:bg-brand-primary
//                           hover:text-white
//                           hover:scale-110
//                         "
//                       >
//                         <FaArrowRight className="text-sm" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </StaggerContainer>

//           {/* View All CTA – Mobile friendly */}
//           <div className="mt-10 text-center lg:hidden">
//             <Link
//               to="/accessories"
//               className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-xl
//                 bg-gradient-to-r
//                 from-brand-primary
//                 to-purple-600
//                 px-8
//                 py-3
//                 font-semibold
//                 text-white
//                 transition-all
//                 duration-300
//                 hover:shadow-lg
//                 hover:shadow-brand-primary/30
//                 hover:-translate-y-0.5
//               "
//               style={{ fontFamily: "var(--font-secondary-font)" }}
//             >
//               View All Accessories
//               <FaArrowRight />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </AnimationWrapper>
//   );
// };

// export default HomeGamingAccessories;

import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaHeadset,
  FaMouse,
  FaFan,
  FaKeyboard,
} from "react-icons/fa";
import AnimationWrapper from "../../../Components/animationwrapper/AnimationWrapper";
import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";
import AccessoryCard from "../../../Components/accessorycard/AccessoryCard";

import headsetImg from "../../../assets/images/Headphones.png";
import mouseImg from "../../../assets/images/Mouse.png";
import coolingPadImg from "../../../assets/images/Coolingpad.png";
import keyboardImg from "../../../assets/images/Keyboard.png";

const accessories = [
  {
    id: 1,
    name: "Wireless Gaming Headset",
    brand: "HyperX",
    price: "₹7,499",
    originalPrice: "₹9,999",
    discount: "25",
    image: headsetImg,
    icon: FaHeadset,
    color: "from-purple-500 to-pink-500",
    category: "Headphone",
    limitedOffer: true,
  },
  {
    id: 2,
    name: "RGB Gaming Mouse",
    brand: "Logitech",
    price: "₹4,199",
    originalPrice: "₹5,499",
    discount: "24",
    image: mouseImg,
    icon: FaMouse,
    color: "from-blue-500 to-cyan-500",
    category: "Mouse",
    limitedOffer: true,
  },
  {
    id: 3,
    name: "Laptop Cooling Pad",
    brand: "Cooler Master",
    price: "₹3,299",
    originalPrice: "₹4,499",
    discount: "27",
    image: coolingPadImg,
    icon: FaFan,
    color: "from-green-500 to-emerald-500",
    category: "Cooling",
    limitedOffer: true,
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    brand: "Corsair",
    price: "₹10,999",
    originalPrice: "₹14,999",
    discount: "27",
    image: keyboardImg,
    icon: FaKeyboard,
    color: "from-orange-500 to-red-500",
    category: "Keyboard",
    limitedOffer: true,
  },
];

const HomeGamingAccessories = () => {
  return (
    <AnimationWrapper animationType="fadeUp" delay={0.1}>
      <section className="bg-[var(--bg-primary)] py-12 sm:py-16 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header */}
          <div className="mb-8 sm:mb-12 flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-block rounded-full bg-brand-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-brand-primary font-[var(--font-secondary-font)]">
                🎧 Premium Gear
              </span>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                Gaming Accessories
              </h2>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                Level up your setup with the best gaming peripherals
              </p>
            </div>
            <Link
              to="/accessories"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 font-[var(--font-secondary-font)] flex-shrink-0"
            >
              View All Accessories
              <FaArrowRight />
            </Link>
          </div>

          {/* Grid of AccessoryCards */}
          <StaggerContainer
            delay={0.3}
            staggerChildren={0.1}
            className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {accessories.map((item) => (
              <AccessoryCard key={item.id} accessory={item} />
            ))}
          </StaggerContainer>

          {/* Mobile View All Button */}
          <div className="mt-8 sm:mt-10 text-center lg:hidden">
            <Link
              to="/accessories"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 px-6 sm:px-8 py-3 font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 font-[var(--font-secondary-font)]"
            >
              View All Accessories
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default HomeGamingAccessories;
