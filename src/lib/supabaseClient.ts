import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase client is not fully configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables."
  );
}

export const supabase: SupabaseClient = createClient(
  supabaseUrl ?? "",
  supabaseAnonKey ?? ""
);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export type SupabaseSchema = {
  courses: {
    id: string;
    title: string;
    desc: string;
    skills: string[];
    duration: string;
    iconName?: string;
  }[];
  testimonials: {
    id: string;
    name: string;
    role: string;
    text: string;
    rating?: number;
  }[];
  programs: {
    id: string;
    label: string;
    duration: string;
    content: string;
    startsInDays?: number;
    courses?: {
      title: string;
      hook: string;
      duration: string;
      level: string;
      tags: string[];
    }[];
    workshops?: {
      title: string;
      hook: string;
      date: string;
      startsInDays: number;
    }[];
  }[];
};
