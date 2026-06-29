// =============== PlayStation Consoles ===============
import ps5Img from "../../assets/consoles/playstation5.png";
import ps5SlimImg from "../../assets/consoles/playstation5slim.png";
import ps4ProImg from "../../assets/consoles/playstation4.png";

// =============== Xbox Consoles ===============
import xboxSeriesXImg from "../../assets/consoles/Xbox Series X.png";
import xboxSeriesSImg from "../../assets/consoles/Xbox Series S.png";

// =============== Nintendo Consoles ===============
import switchOledImg from "../../assets/consoles/Nintendo Switch OLED .jpg";
import switchImg from "../../assets/consoles/Nintendo Switch.png";
// ✅ Fixed: Added missing import for Switch Lite
import switchLiteImg from "../../assets/consoles/Nintendo Switch Lite.png"; // Add this file

// =============== Handheld Consoles ===============
import steamDeckImg from "../../assets/images/Steam Deck OLED.png";
import rogAllyImg from "../../assets/images/Steam-deck.png";
import psVitaImg from "../../assets/consoles/PlayStation Vita.png";

export const playstationConsoles = [
  {
    id: "ps5",
    name: "PlayStation 5",
    brand: "Sony",
    tagline: "Play Has No Limits",
    price: "₹41,490", // ✅ Changed from $499.99
    releaseYear: "2020",
    color: "#003087",
    image: ps5Img,
    badge: "Latest",
    specs: {
      CPU: "AMD Zen 2 · 8 Cores · 3.5GHz",
      GPU: "AMD RDNA 2 · 10.28 TFLOPS",
      RAM: "16GB GDDR6",
      Storage: "825GB Custom SSD",
      Resolution: "Up to 8K",
      "Frame Rate": "Up to 120fps",
      "Optical Drive": "4K Blu-ray",
      "Ray Tracing": "Yes",
    },
    features: [
      "DualSense haptic feedback & adaptive triggers",
      "Tempest 3D Audio Engine",
      "Ultra-high speed SSD with I/O throughput",
      "Backward compatible with PS4 games",
      "PlayStation Now streaming",
      "4K UHD Blu-ray player",
    ],
    inBox: ["PS5 Console", "DualSense Controller", "HDMI 2.1 Cable", "AC Power Cord", "USB Cable", "Base Stand"],
  },
  {
    id: "ps5-slim",
    name: "PlayStation 5 Slim",
    brand: "Sony",
    tagline: "Same Power. Smaller Form.",
    price: "₹37,350", // ✅ Changed from $449.99
    releaseYear: "2023",
    color: "#003087",
    image: ps5SlimImg,
    badge: "New",
    specs: {
      CPU: "AMD Zen 2 · 8 Cores · 3.5GHz",
      GPU: "AMD RDNA 2 · 10.28 TFLOPS",
      RAM: "16GB GDDR6",
      Storage: "1TB Custom SSD",
      Resolution: "Up to 8K",
      "Frame Rate": "Up to 120fps",
      "Optical Drive": "Detachable 4K Blu-ray",
      "Ray Tracing": "Yes",
    },
    features: [
      "30% smaller than original PS5",
      "Detachable disc drive (optional)",
      "Wi-Fi 6 support",
      "Same DualSense controller",
      "Backward compatible with PS4",
      "PlayStation Plus library",
    ],
    inBox: ["PS5 Slim Console", "DualSense Controller", "HDMI 2.1 Cable", "AC Power Cord", "USB Cable", "Stand"],
  },
  {
    id: "ps4-pro",
    name: "PlayStation 4 Pro",
    brand: "Sony",
    tagline: "4K Gaming. Enhanced.",
    price: "₹24,900", // ✅ Changed from $299.99
    releaseYear: "2016",
    color: "#003087",
    image: ps4ProImg,
    specs: {
      CPU: "AMD Jaguar · 8 Cores · 2.1GHz",
      GPU: "AMD GCN · 4.2 TFLOPS",
      RAM: "8GB GDDR5",
      Storage: "1TB HDD",
      Resolution: "Up to 4K",
      "Frame Rate": "Up to 60fps",
      "Optical Drive": "Blu-ray",
      "Ray Tracing": "No",
    },
    features: [
      "4K and HDR gaming",
      "PS VR compatible",
      "Remote Play on mobile",
      "Share Play with friends",
      "PlayStation Now streaming",
      "Boost Mode for older games",
    ],
    inBox: ["PS4 Pro Console", "DualShock 4 Controller", "HDMI Cable", "AC Power Cord", "USB Cable"],
  },
];

export const xboxConsoles = [
  {
    id: "xbox-series-x",
    name: "Xbox Series X",
    brand: "Microsoft",
    tagline: "Power Your Dreams",
    price: "₹41,490", // ✅ Changed from $499.99
    releaseYear: "2020",
    color: "#107C10",
    image: xboxSeriesXImg,
    badge: "Flagship",
    specs: {
      CPU: "AMD Zen 2 · 8 Cores · 3.8GHz",
      GPU: "AMD RDNA 2 · 12 TFLOPS",
      RAM: "16GB GDDR6",
      Storage: "1TB Custom NVMe SSD",
      Resolution: "Up to 8K",
      "Frame Rate": "Up to 120fps",
      "Optical Drive": "4K UHD Blu-ray",
      "Ray Tracing": "Yes",
    },
    features: [
      "Xbox Game Pass Ultimate included",
      "Quick Resume across multiple games",
      "DirectX 12 Ultimate support",
      "Smart Delivery for game optimization",
      "xCloud game streaming",
      "Backward compatible with 4 generations",
    ],
    inBox: ["Xbox Series X Console", "Xbox Wireless Controller", "HDMI 2.1 Cable", "Power Cable", "AA Batteries"],
  },
  {
    id: "xbox-series-s",
    name: "Xbox Series S",
    brand: "Microsoft",
    tagline: "Next Gen for Less",
    price: "₹24,900", // ✅ Changed from $299.99
    releaseYear: "2020",
    color: "#107C10",
    image: xboxSeriesSImg,
    badge: "Best Value",
    specs: {
      CPU: "AMD Zen 2 · 8 Cores · 3.6GHz",
      GPU: "AMD RDNA 2 · 4 TFLOPS",
      RAM: "10GB GDDR6",
      Storage: "512GB Custom NVMe SSD",
      Resolution: "Up to 1440p",
      "Frame Rate": "Up to 120fps",
      "Optical Drive": "Digital Only",
      "Ray Tracing": "Yes",
    },
    features: [
      "All-digital next-gen console",
      "Xbox Game Pass ready",
      "Quick Resume feature",
      "40% smaller than Series X",
      "Variable Rate Shading",
      "Auto HDR for older games",
    ],
    inBox: ["Xbox Series S Console", "Xbox Wireless Controller", "HDMI Cable", "Power Cable", "AA Batteries"],
  },
];

export const nintendoConsoles = [
  {
    id: "switch-oled",
    name: "Nintendo Switch OLED",
    brand: "Nintendo",
    tagline: "Play Anywhere. Better Than Ever.",
    price: "₹29,050", // ✅ Changed from $349.99
    releaseYear: "2021",
    color: "#E4000F",
    image: switchOledImg,
    badge: "Most Popular",
    specs: {
      CPU: "NVIDIA Custom Tegra",
      Screen: '7" OLED Display',
      RAM: "4GB LPDDR4",
      Storage: "64GB eMMC",
      Resolution: "1080p (TV) / 720p (Handheld)",
      Battery: "4.5–9 hrs",
      "Wi-Fi": "802.11ac",
      "LAN Port": "Yes (Dock)",
    },
    features: [
      "Vibrant 7-inch OLED screen",
      "Wide adjustable stand",
      "Enhanced audio speakers",
      "64GB internal storage",
      "Wired LAN port in dock",
      "3 play modes: TV, Tabletop, Handheld",
    ],
    inBox: ["Switch OLED Console", "Joy-Con (L/R)", "Joy-Con Grip", "OLED Dock", "HDMI Cable", "AC Adapter", "Joy-Con Straps"],
  },
  {
    id: "switch",
    name: "Nintendo Switch",
    brand: "Nintendo",
    tagline: "Play at Home or On the Go",
    price: "₹24,900", // ✅ Changed from $299.99
    releaseYear: "2017",
    color: "#E4000F",
    image: switchImg,
    specs: {
      CPU: "NVIDIA Custom Tegra",
      Screen: '6.2" LCD Display',
      RAM: "4GB LPDDR4",
      Storage: "32GB eMMC",
      Resolution: "1080p (TV) / 720p (Handheld)",
      Battery: "4.5–9 hrs",
      "Wi-Fi": "802.11ac",
      "LAN Port": "No",
    },
    features: [
      "3 play modes in one console",
      "HD Rumble Joy-Con controllers",
      "Motion controls built-in",
      "Massive game library",
      "Local wireless multiplayer",
      "Nintendo Online membership",
    ],
    inBox: ["Switch Console", "Joy-Con (L/R)", "Joy-Con Grip", "Switch Dock", "HDMI Cable", "AC Adapter", "Joy-Con Straps"],
  },
  {
    id: "switch-lite",
    name: "Nintendo Switch Lite",
    brand: "Nintendo",
    tagline: "Dedicated Handheld Gaming",
    price: "₹16,600", // ✅ Changed from $199.99
    releaseYear: "2019",
    color: "#E4000F",
    image: switchLiteImg,
    specs: {
      CPU: "NVIDIA Custom Tegra",
      Screen: '5.5" LCD Display',
      RAM: "4GB LPDDR4",
      Storage: "32GB eMMC",
      Resolution: "720p Handheld Only",
      Battery: "3–7 hrs",
      "Wi-Fi": "802.11ac",
      "LAN Port": "No",
    },
    features: [
      "Lightweight at just 277g",
      "Built-in controls (no detachable Joy-Con)",
      "Handheld only — no TV mode",
      "Compatible with most Switch games",
      "Available in multiple colors",
      "Best battery life in lineup",
    ],
    inBox: ["Switch Lite Console", "AC Adapter"],
  },
];

export const handheldConsoles = [
  {
    id: "steam-deck",
    name: "Steam Deck OLED",
    brand: "Valve",
    tagline: "Your PC Gaming. Everywhere.",
    price: "₹45,650", // ✅ Changed from $549.99
    releaseYear: "2023",
    color: "#1A1A2E",
    image: steamDeckImg,
    badge: "PC Gaming",
    specs: {
      CPU: "AMD Zen 2 · 4 Cores · 3.5GHz",
      GPU: "AMD RDNA 2 · 8 CUs",
      RAM: "16GB LPDDR5",
      Storage: "512GB NVMe SSD",
      Screen: '7.4" HDR OLED',
      Battery: "3–12 hrs",
      OS: "SteamOS 3.0",
      "Refresh Rate": "90Hz",
    },
    features: [
      "Full PC gaming on the go",
      "Access to entire Steam library",
      "HDR OLED display with 90Hz",
      "Suspend & Resume feature",
      "Desktop mode (Linux/Windows)",
      "Expandable via microSD",
    ],
    inBox: ["Steam Deck Console", "45W USB-C Charger", "Carrying Case", "Cleaning Cloth"],
  },
  {
    id: "rog-ally",
    name: "ASUS ROG Ally",
    brand: "ASUS",
    tagline: "Windows Gaming Handheld",
    price: "₹58,100", // ✅ Changed from $699.99
    releaseYear: "2023",
    color: "#FF0000",
    image: rogAllyImg,
    badge: "Windows",
    specs: {
      CPU: "AMD Ryzen Z1 Extreme",
      GPU: "AMD RDNA 3 · 8.6 TFLOPS",
      RAM: "16GB LPDDR5",
      Storage: "512GB PCIe SSD",
      Screen: '7" FHD IPS 120Hz',
      Battery: "2–6 hrs",
      OS: "Windows 11",
      "Refresh Rate": "120Hz",
    },
    features: [
      "Full Windows 11 experience",
      "Access to all PC game stores",
      "120Hz display for smooth gameplay",
      "ROG XG Mobile GPU support",
      "USB4 / Thunderbolt connectivity",
      "Armoury Crate game launcher",
    ],
    inBox: ["ROG Ally Console", "65W USB-C Adapter", "Carrying Pouch"],
  },
  {
    id: "ps-vita",
    name: "PlayStation Vita",
    brand: "Sony",
    tagline: "Never Stop Playing",
    price: "₹16,600", // ✅ Changed from $199.99
    releaseYear: "2012",
    color: "#003087",
    image: psVitaImg,
    specs: {
      CPU: "ARM Cortex-A9 · 4 Cores",
      GPU: "PowerVR SGX543MP4+",
      RAM: "512MB",
      Storage: "Up to 64GB (Proprietary Card)",
      Screen: '5" OLED',
      Battery: "3–5 hrs",
      OS: "PS Vita OS",
      Connectivity: "Wi-Fi / 3G",
    },
    features: [
      "Remote Play with PS4",
      "Cross-buy with PS4 titles",
      "Dual analog sticks",
      "Front & rear touchpads",
      "AR gaming support",
      "PS Now game streaming",
    ],
    inBox: ["PS Vita Console", "USB Cable", "AC Adapter", "Quick Start Guide"],
  },
];