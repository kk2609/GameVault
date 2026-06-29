// import { FaPlay, FaShoppingCart, FaStar, FaArrowRight } from "react-icons/fa";
// import gtaBanner from "../../../assets/images/gta6.jpg";

// const HomeGTAVISection = () => {
//   return (
//     <section className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden">
//       {/* Full Screen Background Image */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `url(${gtaBanner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Overall dark overlay */}
//         <div className="absolute inset-0 bg-black/30 z-10" />

//         {/* Top fade */}
//         <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/30 to-transparent z-20" />

//         {/* Bottom fade */}
//         <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/30 to-transparent z-20" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[700px] lg:min-h-[800px] flex items-center">
//         <div className="max-w-2xl">
//           {/* Badge - lighter version */}

//           {/* Title - darker for contrast */}
//           <h2 className="mt-6 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter">
//             <span className="text-slate-900 drop-shadow-lg">GTA</span>
//             <span
//               className="block text-transparent bg-clip-text drop-shadow-lg"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(135deg, #7c3aed 0%, #6d28d9 30%, #db2777 70%, #ec4899 100%)",
//               }}
//             >
//               VI
//             </span>
//           </h2>

//           {/* Description - darker for readability */}
//           <p className="mt-6 text-base sm:text-lg text-slate-800 leading-relaxed max-w-xl font-medium drop-shadow-md bg-white/30 backdrop-blur-sm p-4 rounded-2xl">
//             Welcome to Leonida. Experience the biggest and most immersive Grand
//             Theft Auto ever created. Explore a massive open world, unforgettable
//             characters, and next-generation gameplay.
//           </p>

//           {/* Feature tags - lighter version */}
//           <div className="flex flex-wrap gap-2 mt-6">
//             {["Massive Open World", "Next-Gen Gameplay", "2025 Release"].map(
//               (label, idx) => (
//                 <span
//                   key={idx}
//                   className="px-4 py-1.5 bg-white/70 backdrop-blur-sm border border-white/40 rounded-full text-xs sm:text-sm text-slate-700 hover:bg-white/90 hover:border-violet-300 transition-all duration-300 shadow-sm"
//                 >
//                   {label}
//                 </span>
//               ),
//             )}
//           </div>

//           {/* Buttons - lighter version */}
//           <div className="flex flex-wrap gap-4 mt-8">
//             <button className="group relative flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 rounded-xl font-semibold text-white shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all duration-300">
//               <FaShoppingCart className="text-sm" />
//               <span>Pre-Order Now</span>
//               <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//             </button>

//             <button className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-white/40 px-8 py-4 rounded-xl font-medium text-slate-700 hover:bg-white hover:border-violet-300 transition-all duration-300 shadow-lg">
//               <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center group-hover:bg-violet-200 transition-all duration-300">
//                 <FaPlay className="text-sm text-violet-600" />
//               </div>
//               <span>Watch Trailer</span>
//             </button>
//           </div>

//           {/* Stats - lighter version */}
//           <div className="flex gap-8 mt-10 pt-6 border-t border-white/40">
//             <div>
//               <p className="text-2xl font-bold text-slate-900 drop-shadow">
//                 2.1M+
//               </p>
//               <p className="text-xs text-slate-600 uppercase tracking-wider font-medium">
//                 Pre-Orders
//               </p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-slate-900 drop-shadow">
//                 PS5 · Xbox
//               </p>
//               <p className="text-xs text-slate-600 uppercase tracking-wider font-medium">
//                 Platforms
//               </p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-slate-900 drop-shadow">
//                 4.9/5
//               </p>
//               <p className="text-xs text-slate-600 uppercase tracking-wider font-medium">
//                 Rating
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeGTAVISection;

// import { FaPlay, FaShoppingCart, FaStar, FaArrowRight } from "react-icons/fa";
// import gtaBanner from "../../../assets/images/gta6.jpg";

// const HomeGTAVISection = () => {
//   return (
//     <section className="relative  overflow-hidden">
//       {/* Full Screen Background Image */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `url(${gtaBanner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50 z-10" />
//         {/* <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/30 to-transparent z-20" /> */}
//         {/* <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/30 to-transparent z-20" /> */}
//       </div>

//       {/* Content — full height flex column, space-between */}
//       <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 min-h-[700px] lg:min-h-[800px] flex flex-col justify-between py-12">
//         {/* TOP LEFT — GTA VI Title */}
//         <div className="self-start">
//           <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter">
//             <span className="text-slate-200 drop-shadow-lg">GTA</span>
//             <span
//               className="block text-transparent bg-clip-text drop-shadow-lg"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(135deg, #7c3aed 0%, #6d28d9 30%, #db2777 70%, #ec4899 100%)",
//               }}
//             >
//               VI
//             </span>
//           </h2>
//         </div>

//         {/* BOTTOM ROW — Description left, Buttons right */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
//           {/* BOTTOM LEFT — Description, Tags, Stats */}
//           <div className="max-w-xl">
//             <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium drop-shadow-md bg-white/10 backdrop-blur-xl p-4 rounded-2xl">
//               Welcome to Leonida. Experience the biggest and most immersive
//               Grand Theft Auto ever created. Explore a massive open world,
//               unforgettable characters, and next-generation gameplay.
//             </p>

//             <div className="flex flex-wrap gap-2 mt-4">
//               {["Massive Open World", "Next-Gen Gameplay", "2025 Release"].map(
//                 (label, idx) => (
//                   <span
//                     key={idx}
//                     className="px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs sm:text-sm text-slate-200 hover:bg-white/30 transition-all duration-300 shadow-sm"
//                   >
//                     {label}
//                   </span>
//                 ),
//               )}
//             </div>

//             <div className="flex gap-8 mt-6 pt-6 border-t border-white/30">
//               <div>
//                 <p className="text-2xl font-bold text-white drop-shadow">
//                   2.1M+
//                 </p>
//                 <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
//                   Pre-Orders
//                 </p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white drop-shadow">
//                   PS5 · Xbox
//                 </p>
//                 <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
//                   Platforms
//                 </p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white drop-shadow">
//                   4.9/5
//                 </p>
//                 <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
//                   Rating
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM RIGHT — Buttons */}
//           <div className="flex flex-col gap-4 flex-shrink-0">
//             <button className="group relative flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 rounded-xl font-semibold text-white shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all duration-300">
//               <FaShoppingCart className="text-sm" />
//               <span>Pre-Order Now</span>
//               <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//             </button>

//             <button className="group flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl font-medium text-slate-200 hover:bg-white/30 hover:border-violet-300 transition-all duration-300 shadow-lg">
//               <div className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center group-hover:bg-violet-500/50 transition-all duration-300">
//                 <FaPlay className="text-sm text-violet-300" />
//               </div>
//               <span>Watch Trailer</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeGTAVISection;

// import { FaPlay, FaShoppingCart, FaStar, FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import gtaBanner from "../../../assets/images/gta6.jpg";

// const HomeGTAVISection = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const contentVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//     hover: {
//       y: -2,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   const tagVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   const statsVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden"
//     >
//       {/* Full Screen Background Image */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `url(${gtaBanner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50 z-10" />
//       </div>

//       {/* Content — full height flex column, space-between */}
//       <motion.div
//         ref={ref}
//         className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 min-h-[700px] lg:min-h-[800px] flex flex-col justify-between py-12"
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//       >
//         {/* TOP LEFT — GTA VI Title */}
//         <motion.div
//           className="self-start"
//           variants={titleVariants}
//         >
//           <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter">
//             <span className="text-slate-200 drop-shadow-lg">GTA</span>
//             <span
//               className="block text-transparent bg-clip-text drop-shadow-lg"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(135deg, #7c3aed 0%, #6d28d9 30%, #db2777 70%, #ec4899 100%)",
//               }}
//             >
//               VI
//             </span>
//           </h2>
//         </motion.div>

//         {/* BOTTOM ROW — Description left, Buttons right */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
//           {/* BOTTOM LEFT — Description, Tags, Stats */}
//           <motion.div
//             className="max-w-xl"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             {/* Description */}
//             <motion.p
//               className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium drop-shadow-md bg-white/10 backdrop-blur-xl p-4 rounded-2xl"
//               variants={contentVariants}
//             >
//               Welcome to Leonida. Experience the biggest and most immersive
//               Grand Theft Auto ever created. Explore a massive open world,
//               unforgettable characters, and next-generation gameplay.
//             </motion.p>

//             {/* Tags */}
//             <motion.div
//               className="flex flex-wrap gap-2 mt-4"
//               variants={containerVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//             >
//               {["Massive Open World", "Next-Gen Gameplay", "2025 Release"].map(
//                 (label, idx) => (
//                   <motion.span
//                     key={idx}
//                     className="px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs sm:text-sm text-slate-200 hover:bg-white/30 transition-all duration-300 shadow-sm cursor-pointer"
//                     variants={tagVariants}
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     {label}
//                   </motion.span>
//                 ),
//               )}
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               className="flex gap-8 mt-6 pt-6 border-t border-white/30"
//               variants={containerVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//             >
//               {[
//                 { value: "2.1M+", label: "Pre-Orders" },
//                 { value: "PS5 · Xbox", label: "Platforms" },
//                 { value: "4.9/5", label: "Rating" },
//               ].map((stat, idx) => (
//                 <motion.div
//                   key={idx}
//                   variants={statsVariants}
//                   transition={{ delay: idx * 0.1 }}
//                 >
//                   <p className="text-2xl font-bold text-white drop-shadow">
//                     {stat.value}
//                   </p>
//                   <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
//                     {stat.label}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* BOTTOM RIGHT — Buttons */}
//           <motion.div
//             className="flex flex-col gap-4 flex-shrink-0"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             {/* Pre-Order Button */}
//             <motion.button
//               className="group relative flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 rounded-xl font-semibold text-white shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300"
//               variants={buttonVariants}
//               whileHover="hover"
//             >
//               <FaShoppingCart className="text-sm" />
//               <span>Pre-Order Now</span>
//               <motion.div
//                 initial={{ opacity: 0, x: -8 }}
//                 whileHover={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <FaArrowRight className="text-sm" />
//               </motion.div>
//             </motion.button>

//             {/* Watch Trailer Button */}
//             <motion.button
//               className="group flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl font-medium text-slate-200 hover:bg-white/30 hover:border-violet-300 transition-all duration-300 shadow-lg"
//               variants={buttonVariants}
//               whileHover="hover"
//             >
//               <motion.div
//                 className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center group-hover:bg-violet-500/50 transition-all duration-300"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <FaPlay className="text-sm text-violet-300" />
//               </motion.div>
//               <span>Watch Trailer</span>
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HomeGTAVISection;

// import { FaPlay, FaShoppingCart, FaStar, FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import gtaBanner from "../../../assets/images/gta6.jpg";

// const HomeGTAVISection = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const contentVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//     hover: {
//       y: -2,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   const tagVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   const statsVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden"
//       style={{ fontFamily: "Roboto, sans-serif" }}
//     >
//       {/* Full Screen Background Image */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `url(${gtaBanner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50 z-10" />
//       </div>

//       {/* Content — full height flex column, space-between */}
//       <motion.div
//         ref={ref}
//         className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 min-h-[700px] lg:min-h-[800px] flex flex-col justify-between py-12"
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//       >
//         {/* TOP LEFT — GTA VI Title */}
//         <motion.div className="self-start" variants={titleVariants}>
//           <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter">
//             <span className="text-slate-200 drop-shadow-lg">GTA</span>
//             <span
//               className="block text-transparent bg-clip-text drop-shadow-lg"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(135deg, #7c3aed 0%, #6d28d9 30%, #db2777 70%, #ec4899 100%)",
//               }}
//             >
//               VI
//             </span>
//           </h2>
//         </motion.div>

//         {/* BOTTOM ROW — Description left, Buttons right */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
//           {/* BOTTOM LEFT — Description, Tags, Stats */}
//           <motion.div
//             className="max-w-xl"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             {/* Description */}
//             <motion.p
//               className="text-base font-primary-font sm:text-lg text-slate-200 leading-relaxed font-medium drop-shadow-md bg-white/10 backdrop-blur-xl p-4 rounded-2xl"
//               variants={contentVariants}
//             >
//               Welcome to Leonida. Experience the biggest and most immersive
//               Grand Theft Auto ever created. Explore a massive open world,
//               unforgettable characters, and next-generation gameplay.
//             </motion.p>

//             {/* Tags */}
//             <motion.div
//               className="flex flex-wrap gap-2 mt-4"
//               variants={containerVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//             >
//               {["Massive Open World", "Next-Gen Gameplay", "2025 Release"].map(
//                 (label, idx) => (
//                   <motion.span
//                     key={idx}
//                     className="px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs sm:text-sm text-slate-200 hover:bg-white/30 transition-all duration-300 shadow-sm cursor-pointer"
//                     variants={tagVariants}
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     {label}
//                   </motion.span>
//                 ),
//               )}
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               className="flex gap-8 mt-6 pt-6 border-t border-white/30"
//               variants={containerVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//             >
//               {[
//                 { value: "2.1M+", label: "Pre-Orders" },
//                 { value: "PS5 · Xbox", label: "Platforms" },
//                 { value: "4.9/5", label: "Rating" },
//               ].map((stat, idx) => (
//                 <motion.div
//                   key={idx}
//                   variants={statsVariants}
//                   transition={{ delay: idx * 0.1 }}
//                 >
//                   <p className="text-2xl font-bold text-white drop-shadow">
//                     {stat.value}
//                   </p>
//                   <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
//                     {stat.label}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* BOTTOM RIGHT — Buttons */}
//           <motion.div
//             className="flex flex-col gap-4 flex-shrink-0"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             {/* Pre-Order Button */}
//             <motion.button
//               className="group relative flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 rounded-xl font-semibold text-white shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300"
//               variants={buttonVariants}
//               whileHover="hover"
//             >
//               <FaShoppingCart className="text-sm" />
//               <span>Pre-Order Now</span>
//               <motion.div
//                 initial={{ opacity: 0, x: -8 }}
//                 whileHover={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <FaArrowRight className="text-sm" />
//               </motion.div>
//             </motion.button>

//             {/* Watch Trailer Button */}
//             <motion.button
//               className="group flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl font-medium text-slate-200 hover:bg-white/30 hover:border-violet-300 transition-all duration-300 shadow-lg"
//               variants={buttonVariants}
//               whileHover="hover"
//             >
//               <motion.div
//                 className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center group-hover:bg-violet-500/50 transition-all duration-300"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <FaPlay className="text-sm text-violet-300" />
//               </motion.div>
//               <span>Watch Trailer</span>
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HomeGTAVISection;

// Only video

// import { useRef, useState } from "react";
// import { FaPlay, FaPause, FaShoppingCart, FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // Import your banner image (used as poster/fallback)
// import gtaBanner from "../../../assets/images/gta6.jpg";
// // Import your video file (place it in assets/videos)
// import gtaVideo from "../../../assets/videos/gta6-clip.mp4";

// const HomeGTAVISection = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const { ref, inView } = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   // Animation variants (same as before)
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const contentVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     hover: {
//       y: -2,
//       transition: { duration: 0.3 },
//     },
//   };

//   const tagVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const statsVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section ref={ref} className="relative overflow-hidden">
//       {/* Video Background */}
//       <div className="absolute inset-0 z-0">
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           loop
//           playsInline
//           poster={gtaBanner}
//           className="h-full w-full object-cover"
//         >
//           <source src={gtaVideo} type="video/mp4" />
//           {/* Fallback: if video fails, show the poster image */}
//           <img src={gtaBanner} alt="GTA VI" className="h-full w-full object-cover" />
//         </video>

//         {/* Dark overlay for readability */}
//         <div className="absolute inset-0 bg-black/50 z-10" />

//         {/* Optional: Play/Pause button (positioned at bottom right) */}
//         <button
//           onClick={togglePlay}
//           className="absolute bottom-6 right-6 z-20 rounded-full bg-white/20 p-3 backdrop-blur-sm transition hover:bg-white/30"
//           aria-label={isPlaying ? "Pause video" : "Play video"}
//         >
//           {isPlaying ? (
//             <FaPause className="text-white" />
//           ) : (
//             <FaPlay className="text-white" />
//           )}
//         </button>
//       </div>

//       {/* Content — same as before, now with video underneath */}
//       <motion.div
//         ref={ref}
//         className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 min-h-[700px] lg:min-h-[800px] flex flex-col justify-between py-12"
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//       >
//         {/* TOP LEFT — Title */}
//         <motion.div className="self-start" variants={titleVariants}>
//           <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter">
//             <span className="text-slate-200 drop-shadow-lg">GTA</span>
//             <span
//               className="block text-transparent bg-clip-text drop-shadow-lg"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(135deg, #7c3aed 0%, #6d28d9 30%, #db2777 70%, #ec4899 100%)",
//               }}
//             >
//               VI
//             </span>
//           </h2>
//         </motion.div>

//         {/* BOTTOM ROW — Description + Buttons */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
//           <motion.div
//             className="max-w-xl"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <motion.p
//               className="text-base font-primary-font sm:text-lg text-slate-200 leading-relaxed font-medium drop-shadow-md bg-white/10 backdrop-blur-xl p-4 rounded-2xl"
//               variants={contentVariants}
//             >
//               Welcome to Leonida. Experience the biggest and most immersive
//               Grand Theft Auto ever created. Explore a massive open world,
//               unforgettable characters, and next-generation gameplay.
//             </motion.p>

//             {/* Tags */}
//             <motion.div
//               className="flex flex-wrap gap-2 mt-4"
//               variants={containerVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//             >
//               {["Massive Open World", "Next-Gen Gameplay", "2025 Release"].map(
//                 (label, idx) => (
//                   <motion.span
//                     key={idx}
//                     className="px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs sm:text-sm text-slate-200 hover:bg-white/30 transition-all duration-300 shadow-sm cursor-pointer"
//                     variants={tagVariants}
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     {label}
//                   </motion.span>
//                 ),
//               )}
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               className="flex gap-8 mt-6 pt-6 border-t border-white/30"
//               variants={containerVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//             >
//               {[
//                 { value: "2.1M+", label: "Pre-Orders" },
//                 { value: "PS5 · Xbox", label: "Platforms" },
//                 { value: "4.9/5", label: "Rating" },
//               ].map((stat, idx) => (
//                 <motion.div
//                   key={idx}
//                   variants={statsVariants}
//                   transition={{ delay: idx * 0.1 }}
//                 >
//                   <p className="text-2xl font-bold text-white drop-shadow">
//                     {stat.value}
//                   </p>
//                   <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
//                     {stat.label}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Buttons */}
//           <motion.div
//             className="flex flex-col gap-4 flex-shrink-0"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <motion.button
//               className="group relative flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 rounded-xl font-semibold text-white shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300"
//               variants={buttonVariants}
//               whileHover="hover"
//             >
//               <FaShoppingCart className="text-sm" />
//               <span>Pre-Order Now</span>
//               <motion.div
//                 initial={{ opacity: 0, x: -8 }}
//                 whileHover={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <FaArrowRight className="text-sm" />
//               </motion.div>
//             </motion.button>

//             <motion.button
//               className="group flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl font-medium text-slate-200 hover:bg-white/30 hover:border-violet-300 transition-all duration-300 shadow-lg"
//               variants={buttonVariants}
//               whileHover="hover"
//             >
//               <motion.div
//                 className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center group-hover:bg-violet-500/50 transition-all duration-300"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <FaPlay className="text-sm text-violet-300" />
//               </motion.div>
//               <span>Watch Trailer</span>
//             </motion.button>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HomeGTAVISection;

import { useRef, useState } from "react";
import { FaPlay, FaPause, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gtaBanner from "../../../assets/images/GTA6 Banner.jpg";
import gtaVideo from "../../../assets/videos/gta6-clip.mp4";

const HomeGTAVISection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -2,
      transition: { duration: 0.3 },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={gtaBanner}
          className="h-full w-full object-cover"
        >
          <source src={gtaVideo} type="video/mp4" />
          <img
            src={gtaBanner}
            alt="GTA VI"
            className="h-full w-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <button
          onClick={togglePlay}
          className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 rounded-full bg-white/20 p-2 sm:p-3 backdrop-blur-sm transition hover:bg-white/30"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <FaPause className="text-white text-sm sm:text-base" />
          ) : (
            <FaPlay className="text-white text-sm sm:text-base" />
          )}
        </button>
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] flex flex-col justify-between py-8 sm:py-10 lg:py-12"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Title */}
        <motion.div className="self-start" variants={titleVariants}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.85] tracking-tighter">
            <span className="text-slate-200 drop-shadow-lg">GTA</span>
            <span
              className="block text-transparent bg-clip-text drop-shadow-lg"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #7c3aed 0%, #6d28d9 30%, #db2777 70%, #ec4899 100%)",
              }}
            >
              VI
            </span>
          </h2>
        </motion.div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8">
          {/* Left */}
          <motion.div
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-medium drop-shadow-md bg-white/10 backdrop-blur-xl p-3 sm:p-4 rounded-2xl font-primary-font"
              variants={contentVariants}
            >
              Welcome to Leonida. Experience the biggest and most immersive
              Grand Theft Auto ever created. Explore a massive open world,
              unforgettable characters, and next-generation gameplay.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mt-3 sm:mt-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {["Massive Open World", "Next-Gen Gameplay", "2025 Release"].map(
                (label, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs sm:text-sm text-slate-200 hover:bg-white/30 transition-all duration-300 shadow-sm cursor-pointer font-[var(--font-secondary-font)]"
                    variants={tagVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {label}
                  </motion.span>
                ),
              )}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/30"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {[
                { value: "2.1M+", label: "Pre-Orders" },
                { value: "PS5 · Xbox", label: "Platforms" },
                { value: "4.9/5", label: "Rating" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={statsVariants}
                  transition={{ delay: idx * 0.1 }}
                >
                  <p className="text-xl sm:text-2xl font-bold text-white drop-shadow font-[var(--font-primary-font)]">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium font-[var(--font-secondary-font)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Buttons */}
          <motion.div
            className="flex flex-col gap-3 sm:gap-4 flex-shrink-0 w-full sm:w-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* <motion.button
              className="group relative flex items-center justify-center sm:justify-start gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 text-sm sm:text-base font-[var(--font-secondary-font)]"
              variants={buttonVariants}
              whileHover="hover"
            >
              <FaShoppingCart className="text-sm" />
              <span>Pre-Order Now</span>
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaArrowRight className="text-sm" />
              </motion.div>
            </motion.button> */}

            {/* <motion.button
              className="group flex items-center justify-center sm:justify-start gap-3 bg-white/20 backdrop-blur-sm border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-slate-200 hover:bg-white/30 hover:border-violet-300 transition-all duration-300 shadow-lg text-sm sm:text-base font-[var(--font-secondary-font)]"
              variants={buttonVariants}
              whileHover="hover"
            >
              <motion.div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-500/30 flex items-center justify-center group-hover:bg-violet-500/50 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaPlay className="text-xs sm:text-sm text-violet-300" />
              </motion.div>
              <span>Watch Trailer</span>
            </motion.button> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeGTAVISection;
