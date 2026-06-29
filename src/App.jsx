// import { Outlet } from "react-router-dom";

// import Header from "./Components/header/Header";
// import Footer from "./Components/footer/Footer";

// function App() {
//   return (
//     <div
//       className="
//       min-h-screen
//       flex
//       flex-col
// f
//       bg-white
//       text-slate-900

//       dark:bg-slate-950
//       dark:text-white

//       transition-all
//       duration-300
//       "
//     >
//       <Header />

//       <main className="flex-1">
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import { Outlet } from "react-router-dom";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import ScrollToTop from "./Components/scrolltotop/ScrollToTop";
import { ThemeProvider } from "./Context/themecontext/ThemeContext";
import { WishlistProvider } from "./Context/wishlistcontext/WishlistContext";

function App() {
  return (
    <ThemeProvider>
      <WishlistProvider>
        <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-all duration-300">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <ScrollToTop /> {/* ✅ Add this */}
        </div>
      </WishlistProvider>
    </ThemeProvider>
  );
}

export default App;
