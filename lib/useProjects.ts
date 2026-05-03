'use client';

import { useState, useEffect } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  linkUrl: string;
  isFeatured: boolean;
  createdAt: any;
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/projects');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, loading, refetch: fetchProjects };
}
