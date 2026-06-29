// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// import {
//   playstationConsoles,
//   xboxConsoles,
//   nintendoConsoles,
//   handheldConsoles,
// } from "../../consolespage/consolesData";

// import ConsoleGallery from "../consolegallery/ConsoleGallery";
// import ConsoleFeatures from "../consolefeatures/ConsoleFeatures";
// import ConsoleSpecifications from "../consolespecifications/ConsoleSpecifications";
// import CompatibleGames from "../compatiblegames/CompatibleGames";
// import RecommendedAccessories from "../recommendedaccessories/RecommendedAccessories";

// const ConsoleDetailsWrapper = () => {
//   const { id } = useParams();
//   const [console, setConsole] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const allConsoles = [
//       ...playstationConsoles,
//       ...xboxConsoles,
//       ...nintendoConsoles,
//       ...handheldConsoles,
//     ];
//     const found = allConsoles.find((c) => c.id === id);
//     setConsole(found || null);
//     setLoading(false);
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
//           <p className="text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//             Loading console details...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (!console) {
//     return (
//       <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//             Console not found
//           </h2>
//           <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//             The console you're looking for doesn't exist.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
//       {/* Hero Section */}
//       <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[var(--bg-secondary)]">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
//         </div>
//         <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
//           <div className="w-48 sm:w-56 lg:w-64 flex-shrink-0">
//             <img
//               src={console.image}
//               alt={console.name}
//               className="w-full object-contain drop-shadow-2xl"
//             />
//           </div>
//           <div className="flex-1 text-center sm:text-left">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
//               {console.name}
//             </h1>
//             <p className="text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//               {console.tagline}
//             </p>
//             <div className="mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
//               {console.badge && (
//                 <span
//                   className="px-3 py-1 rounded-full text-xs font-bold text-white uppercase"
//                   style={{ backgroundColor: console.color }}
//                 >
//                   {console.badge}
//                 </span>
//               )}
//               <span className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
//                 Released: {console.releaseYear}
//               </span>
//               <span className="text-2xl font-bold text-brand-primary dark:text-white font-[var(--font-primary-font)]">
//                 {console.price}
//               </span>
//             </div>
//             <p className="mt-4 max-w-2xl text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)] leading-relaxed">
//               {console.tagline} – Explore the full specs and features below.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Details Grid */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-12">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           <div className="lg:col-span-2 space-y-8">
//             <ConsoleGallery images={[console.image]} />
//             <ConsoleFeatures features={console.features} />
//             <CompatibleGames consoleId={console.id} />
//           </div>
//           <div className="space-y-8">
//             <ConsoleSpecifications specs={console.specs} />
//             <RecommendedAccessories consoleId={console.id} />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ConsoleDetailsWrapper;

import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

import {
  playstationConsoles,
  xboxConsoles,
  nintendoConsoles,
  handheldConsoles,
} from "../../consolespage/consolesData";

import ConsoleFeatures from "../consolefeatures/ConsoleFeatures";
import ConsoleSpecifications from "../consolespecifications/ConsoleSpecifications";
import RecommendedAccessories from "../recommendedaccessories/RecommendedAccessories";
import CompatibleGames from "../compatiblegames/CompatibleGames";

const ConsoleDetailsWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Get console from navigation state (if passed)
  const consoleFromState = location.state?.console;

  const [console, setConsole] = useState(consoleFromState || null);
  const [loading, setLoading] = useState(!consoleFromState);

  // If no state, look up by id (for direct URL access)
  useEffect(() => {
    if (consoleFromState) {
      setLoading(false);
      return;
    }

    const allConsoles = [
      ...playstationConsoles,
      ...xboxConsoles,
      ...nintendoConsoles,
      ...handheldConsoles,
    ];
    const found = allConsoles.find((c) => c.id === id);
    setConsole(found || null);
    setLoading(false);
  }, [id, consoleFromState]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            Loading console details...
          </p>
        </div>
      </div>
    );
  }

  if (!console) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
            Console not found
          </h2>
          <p className="mt-2 text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
            The console you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const accentColor = console.color || "#6C2BD9";

  return (
    <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 sm:pt-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-brand-primary transition-colors duration-300 font-[var(--font-secondary-font)]"
        >
          <FaArrowLeft className="text-sm" />
          Back
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pb-16">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}88 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-[var(--bg-primary)] opacity-90" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8">
          <div className="w-48 sm:w-56 lg:w-72 flex-shrink-0">
            <img
              src={console.image}
              alt={console.name}
              className="w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
              {console.name}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] font-[var(--font-secondary-font)] mt-1">
              {console.tagline}
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {console.badge && (
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold text-white uppercase"
                  style={{ backgroundColor: accentColor }}
                >
                  {console.badge}
                </span>
              )}
              <span className="text-sm text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
                Released: {console.releaseYear}
              </span>
              <span className="text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
                {console.price}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
              {Object.entries(console.specs)
                .slice(0, 4)
                .map(([key, value]) => (
                  <span
                    key={key}
                    className="px-3 py-1 rounded-full text-xs bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] font-[var(--font-secondary-font)]"
                  >
                    {key}: {value}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)] mb-4">
                Gallery
              </h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                <img
                  src={console.image}
                  alt={console.name}
                  className="w-full h-full object-contain p-8 transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Features */}
            <ConsoleFeatures features={console.features} />

            {/* ✅ Compatible Games – now passes the console object */}
            <CompatibleGames console={console} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ConsoleSpecifications specs={console.specs} />
            <RecommendedAccessories consoleId={console.id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConsoleDetailsWrapper;