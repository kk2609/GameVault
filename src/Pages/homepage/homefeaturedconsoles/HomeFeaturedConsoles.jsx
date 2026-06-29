// // import ConsoleCard from "../../../Components/consolecard/ConsoleCard";

// // import ps5 from "../../../assets/images/Ps5.png";
// // import xbox from "../../../assets/images/Xbox.png";
// // import switch2 from "../../../assets/images/Nintendo.png";
// // import steamDeck from "../../../assets/images/Steam-deck.png";

// // const consoles = [
// //   {
// //     id: 1,
// //     name: "PlayStation 5",
// //     brand: "Sony",
// //     image: ps5,
// //     price: "₹54,990",
// //   },
// //   {
// //     id: 2,
// //     name: "Xbox Series X",
// //     brand: "Microsoft",
// //     image: xbox,
// //     price: "₹52,990",
// //   },
// //   {
// //     id: 3,
// //     name: "Nintendo Switch",
// //     brand: "Nintendo",
// //     image: switch2,
// //     price: "₹44,990",
// //   },
// //   {
// //     id: 4,
// //     name: "Steam Deck",
// //     brand: "Valve",
// //     image: steamDeck,
// //     price: "₹49,990",
// //   },
// // ];

// // const HomeFeaturedConsoles = () => {
// //   return (
// //     <section className="bg-white py-24">
// //       <div className="mx-auto max-w-7xl px-6">

// //         {/* Header */}

// //         <div className="mb-14 text-center">

// //           <span
// //             className="
// //             font-secondary-font
// //             rounded-full
// //             bg-violet-100
// //             px-4
// //             py-2
// //             text-sm
// //             font-semibold
// //             text-violet-600
// //             "
// //           >
// //             Gaming Hardware
// //           </span>

// //           <h2
// //             className="
// //             font-primary-font
// //             mt-4
// //             text-4xl
// //             font-bold
// //             text-slate-900
// //             lg:text-5xl
// //             "
// //           >
// //             Featured Consoles
// //           </h2>

// //           <p
// //             className="
// //             font-secondary-font
// //             mx-auto
// //             mt-4
// //             max-w-2xl
// //             text-slate-500
// //             "
// //           >
// //             Browse the most powerful gaming consoles
// //             available today.
// //           </p>

// //         </div>

// //         {/* Grid */}

// //         <div
// //           className="
// //           grid
// //           gap-8
// //           sm:grid-cols-2
// //           xl:grid-cols-4
// //           "
// //         >
// //           {consoles.map((console) => (
// //             <ConsoleCard
// //               key={console.id}
// //               console={console}
// //             />
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default HomeFeaturedConsoles;

// import ConsoleCard from "../../../Components/consolecard/ConsoleCard";
// import AnimationWrapper from "../../../Components/animationwrapper/AnimationWrapper";
// import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

// import ps5 from "../../../assets/images/Ps5.png";
// import xbox from "../../../assets/images/Xbox.png";
// import switch2 from "../../../assets/images/Nintendo.png";
// import steamDeck from "../../../assets/images/Steam-deck.png";

// const consoles = [
//   {
//     id: 1,
//     name: "PlayStation 5",
//     brand: "Sony",
//     image: ps5,
//     price: "₹54,990",
//   },
//   {
//     id: 2,
//     name: "Xbox Series X",
//     brand: "Microsoft",
//     image: xbox,
//     price: "₹52,990",
//   },
//   {
//     id: 3,
//     name: "Nintendo Switch",
//     brand: "Nintendo",
//     image: switch2,
//     price: "₹44,990",
//   },
//   {
//     id: 4,
//     name: "Steam Deck",
//     brand: "Valve",
//     image: steamDeck,
//     price: "₹49,990",
//   },
// ];

// const HomeFeaturedConsoles = () => {
//   return (
//     <AnimationWrapper animationType="fadeUp" delay={0.1}>
//       <section className="bg-[var(--bg-primary)] py-24 transition-colors duration-300">
//         <div className="mx-auto max-w-7xl px-6">
//           {/* Header */}
//           <div className="mb-14 text-center">
//             <span
//               className="
//                 inline-block
//                 rounded-full
//                 bg-brand-primary/10
//                 px-4
//                 py-2
//                 text-sm
//                 font-semibold
//                 text-brand-primary
//               "
//               style={{ fontFamily: "var(--font-secondary-font)" }}
//             >
//               Gaming Hardware
//             </span>

//             <h2
//               className="mt-4 text-4xl font-bold text-[var(--text-primary)] lg:text-5xl"
//               style={{ fontFamily: "var(--font-primary-font)" }}
//             >
//               Featured Consoles
//             </h2>

//             <p
//               className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]"
//               style={{ fontFamily: "var(--font-secondary-font)" }}
//             >
//               Browse the most powerful gaming consoles available today.
//             </p>
//           </div>

//           {/* Grid */}
//           <StaggerContainer
//             delay={0.3}
//             staggerChildren={0.1}
//             className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
//           >
//             {consoles.map((console) => (
//               <ConsoleCard key={console.id} console={console} />
//             ))}
//           </StaggerContainer>
//         </div>
//       </section>
//     </AnimationWrapper>
//   );
// };

// export default HomeFeaturedConsoles;

import ConsoleCard from "../../../Components/consolecard/ConsoleCard";
import AnimationWrapper from "../../../Components/animationwrapper/AnimationWrapper";
import StaggerContainer from "../../../Components/staggercontainer/StaggerContainer";

import {
  playstationConsoles,
  xboxConsoles,
  nintendoConsoles,
  handheldConsoles,
} from "../../consolespage/consolesData";

// Define which consoles to feature (must match IDs from consolesData)
const FEATURED_IDS = [
  "ps5", // PlayStation 5
  "xbox-series-x", // Xbox Series X
  "switch-oled", // Nintendo Switch OLED
  "steam-deck", // Steam Deck
];

// Extra card-specific fields (pricing, discount, offer)
const EXTRA_FIELDS = {
  ps5: {
    originalPrice: "₹60,000",
    discount: "8",
    limitedOffer: true,
  },
  "xbox-series-x": {
    originalPrice: "₹58,000",
    discount: "9",
    limitedOffer: true,
  },
  "switch-oled": {
    originalPrice: "₹49,990",
    discount: "10",
    limitedOffer: true,
  },
  "steam-deck": {
    originalPrice: "₹55,000",
    discount: "9",
    limitedOffer: true,
  },
};

// Combine all consoles
const allConsoles = [
  ...playstationConsoles,
  ...xboxConsoles,
  ...nintendoConsoles,
  ...handheldConsoles,
];

// Build featured array with full data + extras
const featuredConsoles = FEATURED_IDS.map((id) => {
  const full = allConsoles.find((c) => c.id === id);
  if (!full) return null;
  const extra = EXTRA_FIELDS[id] || {};
  return {
    ...full, // all fields: name, brand, image, price, tagline, releaseYear, specs, features, badge, color, etc.
    ...extra, // originalPrice, discount, limitedOffer
  };
}).filter(Boolean);

const HomeFeaturedConsoles = () => {
  return (
    <AnimationWrapper animationType="fadeUp" delay={0.1}>
      <section className="bg-[var(--bg-primary)] py-16 sm:py-20 lg:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center">
            <span className="inline-block rounded-full bg-brand-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-brand-primary font-[var(--font-secondary-font)]">
              Gaming Hardware
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
              Featured Consoles
            </h2>
            <p className="mx-auto mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
              Browse the most powerful gaming consoles available today – limited
              time offers!
            </p>
          </div>

          <StaggerContainer
            delay={0.3}
            staggerChildren={0.1}
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
          >
            {featuredConsoles.map((console) => (
              <ConsoleCard key={console.id} console={console} />
            ))}
          </StaggerContainer>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default HomeFeaturedConsoles;
