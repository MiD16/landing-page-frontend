// API Service for Django Backend

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export interface CompanyInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  // Hero Section
  hero_title: string;
  hero_subtitle: string;
  hero_image: string | null;
  // Who We Are Section
  who_we_are_image: string | null;
  years_experience: number;
  projects_completed: number;
  total_built_area: string;
  // Contact Section
  contact_email: string;
  contact_phone: string;
  contact_address: string;
  // Footer Social Media
  instagram_url: string;
  facebook_url: string;
  linkedin_url: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// API calls
export const api = {
  // Get company information
  getCompanyInfo: async (): Promise<CompanyInfo> => {
    const response = await fetch(`${API_BASE_URL}/company/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch company info: ${response.statusText}`);
    }
    return response.json();
  },

  // Get all projects
  getProjects: async (): Promise<Project[]> => {
    const response = await fetch(`${API_BASE_URL}/projects/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }
    const data: PaginatedResponse<Project> = await response.json();
    return data.results;
  },

  // Get all clients
  getClients: async (): Promise<Client[]> => {
    const response = await fetch(`${API_BASE_URL}/clients/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch clients: ${response.statusText}`);
    }
    const data: PaginatedResponse<Client> = await response.json();
    return data.results;
  },

  // Submit contact message
  submitContactMessage: async (message: ContactMessage): Promise<ContactMessage> => {
    const response = await fetch(`${API_BASE_URL}/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Failed to submit contact message: ${response.statusText}`);
    }
    return response.json();
  },
};
