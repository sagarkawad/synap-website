export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface EventType {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface TeamMemberType {
  id: number;
  name: string;
  position: string;
  image: string;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}