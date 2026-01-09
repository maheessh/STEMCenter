import type { 
  StaffMember, 
  AdvisoryMember, 
  NavItem, 
  HardwareItem, 
  ScheduleItem,
  ContactInfo 
} from "@/types";

// Staff Data
export const STAFF_DATA: StaffMember[] = [
  {
    name: "Daniel McCarthy, Ph.D.",
    title: "Interim Dean",
    phone: "(985) 549-2627",
    email: "daniel.mccarthy@southeastern.edu",
    image: "https://www.southeastern.edu/acad_research/colleges/sci_tech/images/mccarthy-daniel-2023.jpg"
  },
  {
    name: "Jordan Smith-Kenning",
    title: "Director",
    phone: "985-549-3306",
    email: "Jordan.Smith-Kenning@southeastern.edu",
    organization: "Southeastern Northshore STEM Center",
    image: "https://ugc.same-assets.com/buRrJcHrdCl-vPkD_acjkCZ92dkbh04-.jpeg"
  },
  {
    name: "Karington Anderson",
    title: "Project Coordinator",
    email: "Karington.Anderson@southeastern.edu",
    organization: "Southeastern Northshore STEM Center",
    image: "https://www.southeastern.edu/admin/rec_sports/images/karington_anderson.jpg"
  }
];

// Advisory Committee Data
export const ADVISORY_DATA: AdvisoryMember[] = [
  {
    name: "Dr. James Carleson",
    organization: "Northshore Technical Community College",
    email: "jamescarlson@northshorecollege.edu",
    image: "https://northshorecollege.edu/wp-content/uploads/2021/08/James-Carlson-2021.jpg"
  },
  {
    name: "Sam Caruso",
    organization: "Regional STEM with Arch diocese of New Orleans",
    email: "scaruso@pjp.org"
  },
  {
    name: "Chuck Crabtree",
    organization: "Northshore Technical Community College",
    email: "charlescrabtree@northshorecollege.edu"
  },
  {
    name: "Ashley Lewellyn",
    organization: "St. Tammany Corporation",
    email: "allewellyn@sttammanycorp.org"
  },
  {
    name: "Dan McCarthy",
    organization: "Southeastern Louisiana University",
    email: "dmccarthy@southeastern.edu"
  },
  {
    name: "Tina Roper",
    organization: "Louisiana Workforce Development Area 20 (Geaux Jobs)",
    email: "troper@tangipahoa.org"
  },
  {
    name: "Matthew B. Saacks",
    organization: "Ampirical Solutions, LLC",
    email: "msaacks@ampirical.com"
  },
  {
    name: "Shauna Seals",
    organization: "(Exxon-Mobil Retiree and Community STEM Advocate)",
    email: "sjseals@yahoo.com"
  },
  {
    name: "Bishop Rene Soule",
    organization: "Mixon-Clayton STEAM Hub",
    email: "bishopsoule@gmail.com"
  },
  {
    name: "Julie Mendes",
    organization: "St. Tammany Children's Museum",
    email: "jmendes@cmstkids.org"
  }
];

// Hero Carousel Images
export const HERO_IMAGES: string[] = [
  "https://i.ibb.co/XZxNRZpR/IMG-8336.jpg",
  "https://i.ibb.co/b5XmTKTm/IMG-7608.jpg",
  "https://i.ibb.co/TMQHkqQr/Snap-Insta-to-545114192-17890215000342042-5564491619509013762-n.jpg",
];

// Partner Logos
export const PARTNER_LOGOS = [
  {
    name: "SLU",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Southeastern_Louisiana_University_logo.png",
    height: "h-12"
  },
  {
    name: "NTCC",
    image: "https://cdn.phenompeople.com/CareerConnectResources/prod/LEFAGLOBAL/images/NTCCLOGO-1626801158802.png",
    height: "h-10"
  },
  {
    name: "LaSTEM",
    image: "https://ugc.same-assets.com/y6jVXzcwO8FXazB4hS7r7pQNMNd9WRqj.png",
    height: "h-10"
  },
  {
    name: "Athletics",
    image: "https://ugc.same-assets.com/E808SpBYDoufedBoM9oX5LF2ht793XbY.webp",
    height: "h-10"
  }
];

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  { label: "Staff", view: "staff" },
  { label: "Advisory Committee", view: "advisory" },
  { label: "Region VIII Science Fair", view: "science-fair" },
  { label: "SeaPerch", view: "seaperch" },
  { label: "STEM Scholars", view: "scholars" }
];

// Parishes Served
export const PARISHES_SERVED: string[] = [
  "Livingston",
  "St. Helena",
  "St. Tammany",
  "Tangipahoa",
  "Washington"
];

// Hardware Items
export const HARDWARE_ITEMS: HardwareItem[] = [
  {
    title: "Meta Quest 3S",
    description: "Immersive virtual reality headsets for engaging STEAM learning experiences.",
    image: "https://store.facebook.com/cdn-cgi/image/width=1024,height=1024,fit=contain,quality=90,format=auto/https://scontent-sea1-1.xx.fbcdn.net/v/t39.2365-6/242211977_411989480356529_328813589921471378_n.jpg",
    category: "VR/AR"
  },
  {
    title: "Alien Gaming PCs",
    description: "High-performance computing for simulations and game development.",
    image: "https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt76963cc4181a6246/619f70415392d412959616e2/45678-spike-prime-set-product-lifestyle-1-2000x1500.png?auto=webp&format=jpeg&width=1200",
    category: "Computing"
  },
  {
    title: "Tonybot (Humanoid Robot)",
    description: "Interactive humanoid robot for robotics education and programming.",
    image: "https://www.vexrobotics.com/media/catalog/product/cache/27a9226572eea364f333333d45c754a3/2/7/276-7000-go-kit-hero_1.jpg",
    category: "Robotics"
  },
  {
    title: "XGO Lite Robot Dog",
    description: "Programmable quadruped robot for advanced robotics learning.",
    image: "https://cdn.shopify.com/s/files/1/0285/9820/0736/products/Bolt_Amazon_Lifestyle_1400x.jpg?v=1632767078",
    category: "Robotics"
  },
  {
    title: "Hiwonder JetMax Armrobo",
    description: "Desktop robotic arm for automation and precision control learning.",
    image: "https://www.dobot.cc/wp-content/uploads/2022/01/magician-lite.png",
    category: "Robotics"
  },
  {
    title: "NVIDIA Jetson Nano Orin",
    description: "AI-powered computing platform for machine learning projects.",
    image: "https://cdn.shopify.com/s/files/1/0046/3781/8929/products/HT-Ender-3-pro-main.jpg?v=1642509172",
    category: "AI/ML"
  }
];

// Science Fair Schedules
export const ELEMENTARY_SCHEDULE: ScheduleItem[] = [
  { time: "7:45am - 8:45am", event: "Registration and Presentation Set Up" },
  { time: "8:50am", event: "Welcome" },
  { time: "9:00am - 10:30am", event: "Judging Begins (Only Students & Judges)" },
  { time: "9:30am - 9:45am", event: "Teachers Meeting with Jordan (Director)" },
  { time: "11:00am - 11:30am", event: "Public Showing of Exhibits" },
  { time: "12:00pm", event: "Awards Presentation" }
];

export const JUNIOR_SENIOR_SCHEDULE: ScheduleItem[] = [
  { time: "7:45am - 8:45am", event: "Registration and Presentation Set Up" },
  { time: "8:50am", event: "Welcome" },
  { time: "9:00am - Noon", event: "Judging Begins (Only Students & Judges)" },
  { time: "9:30am - 9:45am", event: "Teachers Meeting with Jordan (Director)" },
  { time: "12:15pm - 1:30pm", event: "Public Showing of Exhibits" },
  { time: "1:30pm", event: "Awards Presentation" }
];

// STEM Scholars Features
export const SCHOLARS_FEATURES = [
  { title: "Faculty Mentors", desc: "Guidance from experienced university faculty." },
  { title: "Industry Mentors", desc: "Connect with professionals in STEM fields." },
  { title: "Near-Peer Mentors", desc: "Learn from current URM STEM majors." },
  { title: "Experiential Learning", desc: "Meaningful project-based activities." },
  { title: "ACT Prep", desc: "Prepare for standardized testing success." },
  { title: "College Readiness", desc: "Planning for your future degree." }
];

// Contact Information
export const CONTACT_INFO: ContactInfo = {
  address: "SLU Box 10345\nHammond, LA 70402",
  phone: "(985) 549-3306",
  email: "stemcenter@southeastern.edu"
};

// External Links
export const EXTERNAL_LINKS = {
  lastem: "https://lastem.regents.la.gov/",
  seaperch: "https://www.seaperch.org/",
  slu: "https://www.southeastern.edu/"
};
