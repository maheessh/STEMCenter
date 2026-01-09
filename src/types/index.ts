import type { LucideIcon } from "lucide-react";

// Navigation and View Types
export type ViewState = 
  | "home" 
  | "staff" 
  | "advisory" 
  | "science-fair" 
  | "seaperch" 
  | "scholars"
  | "hardware";

export interface NavItem {
  label: string;
  view: ViewState;
  href?: string;
}

// Staff and Team Types
export interface StaffMember {
  name: string;
  title: string;
  phone?: string;
  email: string;
  organization?: string;
  image: string;
}

export interface AdvisoryMember {
  name: string;
  organization: string;
  email: string;
  image?: string;
}

// Component Props Types
export interface FeatureCardProps {
  title: string;
  description?: string;
  img: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

export interface ScheduleItem {
  time: string;
  event: string;
}

export interface ProgramFeature {
  title: string;
  desc: string;
}

// Hardware and Equipment Types
export interface HardwareItem {
  title: string;
  description: string;
  image: string;
  category?: string;
  available?: boolean;
}

// Form Types
export interface PrintRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  file?: File;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

// Event Types
export interface EventInfo {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
}
