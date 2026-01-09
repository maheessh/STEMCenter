// Centralized image assets management
export const IMAGES = {
  // Logo
  logo: "https://i.ibb.co/mFvnwvwr/STEM-Center-Logo.png",
  
  // Decorative SVGs
  decorative: {
    topLeft: "https://ext.same-assets.com/2203708706/2546225362.svg",
    bottomRight: "https://ext.same-assets.com/2203708706/1893538824.svg",
  },
  
  // Map
  regionMap: "https://ugc.same-assets.com/rlgEPBu_DSN3QK2GNHl5zD1hFXDubHV-.png",
  
  // Program Images
  programs: {
    staff: "https://ugc.same-assets.com/MCLvzNHqjjJ9cNn-1D3B41KPsnlm0nbO.jpeg",
    advisory: "https://ugc.same-assets.com/Al20Xkfda7UQhHxKuuNBmceCBPg0JzGu.jpeg",
    scienceFair: "https://ugc.same-assets.com/-OXmulslL-2-YNcTofFL0_ZW5YT30Z9Q.jpeg",
    seaperch: "https://ugc.same-assets.com/poIDpWB2YbnXWI2MCW15nwozapc02R35.jpeg",
    scholars: "https://ugc.same-assets.com/1KMH7dUMSeZFfIC08YMeM-idYHPkJyHe.jpeg",
  },
  
  // Default/Placeholder Images
  placeholder: {
    avatar: "/images/placeholder-avatar.png",
    card: "/images/placeholder-card.png",
  }
} as const;

export type ImageKey = keyof typeof IMAGES;
