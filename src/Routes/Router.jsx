import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import HomePage from "../Pages/homepage/HomePage";
import GamesPage from "../Pages/gamespage/GamesPage";
import GameDetailsPage from "../Pages/gamedetailspage/GameDetailsPage";

import ConsolesPage from "../Pages/consolespage/ConsolesPage";
import ConsoleDetailsPage from "../Pages/consolesdetailspage/ConsoleDetailsPage";

import AccessoriesPage from "../Pages/accessoriespage/AccessoriesPage";

import WishlistPage from "../Pages/wishlistpage/WishlistPage";

import ComparePage from "../Pages/comparepage/ComparePage";

import VRGamingPage from "../Pages/vrgamingpage/VRGamingPage";

import FAQPage from "../Pages/faqpage/FAQPage"; 


import AboutUsPage from "../Pages/aboutuspage/AboutUsPage";

import ContactUsPage from "../Pages/contactuspage/ContactUsPage";

import PageNotFound from "../Pages/pagenotfoundpage/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "games",
        element: <GamesPage />,
      },

      {
        path: "games/:slug",
        element: <GameDetailsPage />,
      },

      {
        path: "consoles",
        element: <ConsolesPage />,
      },

      {
        path: "consoles/:id",
        element: <ConsoleDetailsPage />,
      },

      {
        path: "accessories",
        element: <AccessoriesPage />,
      },

      {
        path: "wishlist",
        element: <WishlistPage />,
      },

      {
        path: "compare",
        element: <ComparePage />,
      },

      {
        path: "vr-gaming",
        element: <VRGamingPage />,
      },

      {
        path: "about",
        element: <AboutUsPage />,
      },

      {
        path: "contact",
        element: <ContactUsPage />,
      },

      {
        path: "faq",
        element: <FAQPage />,
      },
    ],
  },
]);