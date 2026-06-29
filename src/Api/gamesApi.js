// // import axios from "axios";

// // const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

// // const api = axios.create({
// //   baseURL: "https://api.rawg.io/api",
// // });

// // export const getTrendingGames = async () => {
// //   const response = await api.get(`/games?key=${API_KEY}&page_size=10`);

// //   return response.data.results;
// // };

// // export const getLatestReleases = async () => {
// //   const response = await api.get(
// //     `/games?ordering=-released&page_size=8&key=${API_KEY}`,
// //   );

// //   return response.data.results;
// // };

// // import axios from "axios";

// // const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

// // const api = axios.create({
// //   baseURL: "/rawg", // ✅ matches proxy in vite.config.js
// // });

// // export const getGames = async (page = 1, pageSize = 20, search = "", genre = "") => {
// //   let url = `/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`;
// //   if (search) url += `&search=${search}`;
// //   if (genre && genre !== "All") url += `&genres=${genre}`;

// //   console.log("🔵 Fetching:", url);
// //   try {
// //     const response = await api.get(url);
// //     console.log("✅ Response:", response.data);
// //     return response.data;
// //   } catch (error) {
// //     console.error("❌ API Error:", error);
// //     return { results: [], count: 0 };
// //   }
// // };

// // export const getGenres = async () => {
// //   try {
// //     const response = await api.get(`/genres?key=${API_KEY}`);
// //     return response.data.results || [];
// //   } catch (error) {
// //     console.error("❌ Genres Error:", error);
// //     return [];
// //   }
// // };

// // export const getTrendingGames = async () => {
// //   try {
// //     const response = await api.get(`/games?key=${API_KEY}&page_size=10`);
// //     return response.data.results || [];
// //   } catch (error) {
// //     return [];
// //   }
// // };

// // export const getLatestReleases = async () => {
// //   try {
// //     const response = await api.get(`/games?ordering=-released&page_size=8&key=${API_KEY}`);
// //     return response.data.results || [];
// //   } catch (error) {
// //     return [];
// //   }
// // };

// // import axios from "axios";

// // const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

// // const api = axios.create({
// //   baseURL: "/rawg",
// // });

// // export const getGames = async (page = 1, pageSize = 20, search = "", genre = "") => {
// //   let url = `/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`;
// //   if (search) url += `&search=${encodeURIComponent(search)}`;
// //   if (genre && genre !== "All") url += `&genres=${genre}`;
// //   const response = await api.get(url);
// //   return response.data;
// // };

// // export const getGenres = async () => {
// //   const response = await api.get(`/genres?key=${API_KEY}`);
// //   return response.data.results || [];
// // };

// // export const getTrendingGames = async () => {
// //   const response = await api.get(`/games?key=${API_KEY}&page_size=10`);
// //   return response.data.results || [];
// // };

// // export const getLatestReleases = async () => {
// //   const response = await api.get(`/games?ordering=-released&page_size=8&key=${API_KEY}`);
// //   return response.data.results || [];
// // };

// // // Game Details
// // export const getGameDetails = async (id) => {
// //   const response = await api.get(`/games/${id}?key=${API_KEY}`);
// //   return response.data;
// // };

// // export const getGameScreenshots = async (id) => {
// //   const response = await api.get(`/games/${id}/screenshots?key=${API_KEY}`);
// //   return response.data.results || [];
// // };

// // export const getGameTrailers = async (id) => {
// //   const response = await api.get(`/games/${id}/movies?key=${API_KEY}`);
// //   return response.data.results || [];
// // };

// // export const getSimilarGames = async (id) => {
// //   const response = await api.get(`/games/${id}/suggested?key=${API_KEY}`);
// //   return response.data.results || [];
// // };

// import axios from "axios";

// const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
// console.log("🔑 API Key present:", !!API_KEY);

// const api = axios.create({
//   baseURL: "https://api.rawg.io/api",
// });

// const get = async (url, fallback = null) => {
//   console.log("🔵 Fetching:", url);
//   try {
//     const response = await api.get(url);
//     return response.data;
//   } catch (error) {
//     if (error.response?.status === 401 || error.response?.status === 403) {
//       console.warn(
//         `⚠️ Endpoint not available (${error.response.status}): ${url}`,
//       );
//       return fallback;
//     }
//     console.error(`❌ API error for ${url}:`, error);
//     return fallback;
//   }
// };

// export const getGames = async (
//   page = 1,
//   pageSize = 20,
//   search = "",
//   genre = "",
// ) => {
//   let url = `/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`;
//   if (search) url += `&search=${encodeURIComponent(search)}`;
//   if (genre && genre !== "All") url += `&genres=${genre}`;
//   const data = await get(url, { results: [], count: 0 });
//   return data;
// };

// export const getGenres = async () => {
//   const data = await get(`/genres?key=${API_KEY}`, { results: [] });
//   return data.results || [];
// };

// export const getTrendingGames = async () => {
//   const data = await get(`/games?key=${API_KEY}&page_size=10`, { results: [] });
//   return data.results || [];
// };

// export const getLatestReleases = async () => {
//   const data = await get(
//     `/games?ordering=-released&page_size=8&key=${API_KEY}`,
//     { results: [] },
//   );
//   return data.results || [];
// };

// export const getGameDetails = async (id) => {
//   const data = await get(`/games/${id}?key=${API_KEY}`);
//   if (!data) throw new Error(`Game ${id} not found`);
//   return data;
// };

// export const getGameScreenshots = async (id) => {
//   const data = await get(`/games/${id}/screenshots?key=${API_KEY}`, {
//     results: [],
//   });
//   return data.results || [];
// };

// export const getGameTrailers = async (id) => {
//   const data = await get(`/games/${id}/movies?key=${API_KEY}`, { results: [] });
//   return data.results || [];
// };

// export const getSimilarGames = async (id) => {
//   const data = await get(`/games/${id}/suggested?key=${API_KEY}`, {
//     results: [],
//   });
//   return data.results || [];
// };

// // =============== Consoles Page ===============
// export const getConsoles = async (platform) => {
//   const platformMap = {
//     playstation: { platforms: "187,18,17", page_size: 20 }, // PS5, PS4, PS3
//     xbox: { platforms: "186,1,14", page_size: 20 }, // Xbox Series X, Xbox One, Xbox 360
//     nintendo: { platforms: "7,8,9", page_size: 20 }, // Switch, 3DS, Wii U
//     handheld: { platforms: "7,11,19", page_size: 20 }, // Switch, Steam Deck(11? varies), PS Vita
//   };

//   const params = platformMap[platform] || platformMap.playstation;
//   const url = `/games?key=${API_KEY}&platforms=${params.platforms}&page_size=${params.page_size}`;
//   console.log(`🔵 Fetching ${platform} games:`, url);
//   try {
//     const response = await api.get(url);
//     console.log(`✅ ${platform} results:`, response.data.results?.length);
//     return response.data.results || [];
//   } catch (error) {
//     console.error(`❌ Error fetching ${platform} games:`, error);
//     return [];
//   }
// };

// export const getGamescomp = async (
//   page = 1,
//   pageSize = 20,
//   search = "",
//   genre = "",
//   platform = "",
// ) => {
//   let url = `/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`;
//   if (search) url += `&search=${encodeURIComponent(search)}`;
//   if (genre && genre !== "All") url += `&genres=${genre}`;
//   if (platform) url += `&platforms=${platform}`;
//   const response = await api.get(url);
//   return response.data;
// };

import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

// ✅ Always use full URL – no proxy needed
const api = axios.create({
  baseURL: "https://api.rawg.io/api",
});

export const getGames = async (page = 1, pageSize = 20, search = "", genre = "", platform = "") => {
  let url = `/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`;
  if (search) url += `&search=${encodeURIComponent(search)}`;
  if (genre && genre !== "All") url += `&genres=${genre}`;
  if (platform) url += `&platforms=${platform}`;
  console.log("🔵 Fetching games URL:", url);
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("❌ API Error:", error.message);
    throw error;
  }
};

export const getGenres = async () => {
  const url = `/genres?key=${API_KEY}`;
  console.log("🔵 Fetching genres URL:", url);
  try {
    const response = await api.get(url);
    return response.data.results || [];
  } catch (error) {
    console.error("❌ Genres Error:", error.message);
    return [];
  }
};

export const getTrendingGames = async () => {
  const url = `/games?key=${API_KEY}&page_size=10`;
  try {
    const response = await api.get(url);
    return response.data.results || [];
  } catch (error) {
    console.error("❌ Trending Games Error:", error.message);
    return [];
  }
};

export const getLatestReleases = async (page = 1) => {
  const url = `/games?ordering=-added&page_size=8&page=${page}&key=${API_KEY}`;
  try {
    const response = await api.get(url);
    return response.data.results || [];
  } catch (error) {
    console.error("❌ Latest Releases Error:", error.message);
    return [];
  }
};

// Game Details
export const getGameDetails = async (id) => {
  const url = `/games/${id}?key=${API_KEY}`;
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("❌ Game Details Error:", error.message);
    throw error;
  }
};

export const getGameScreenshots = async (id) => {
  const url = `/games/${id}/screenshots?key=${API_KEY}`;
  try {
    const response = await api.get(url);
    return response.data.results || [];
  } catch (error) {
    console.error("❌ Screenshots Error:", error.message);
    return [];
  }
};

export const getGameTrailers = async (id) => {
  const url = `/games/${id}/movies?key=${API_KEY}`;
  try {
    const response = await api.get(url);
    return response.data.results || [];
  } catch (error) {
    console.error("❌ Trailers Error:", error.message);
    return [];
  }
};

export const getSimilarGames = async (id) => {
  try {
    const url = `/games/${id}/suggested?key=${API_KEY}`;
    const response = await api.get(url);
    return response.data.results || [];
  } catch (error) {
    console.warn("⚠️ Similar games endpoint error:", error.message);
    return [];
  }
};