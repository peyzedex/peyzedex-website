'use client';

import { useState, useEffect } from 'react';

export interface Demo {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  linkUrl: string;
  createdAt: any;
}

export function useDemos() {
  const [demos, setDemos] = useState<Demo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDemos = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/demos');
      if (res.ok) {
        const data = await res.json();
        setDemos(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDemos();
  }, []);

  return { demos, loading, refetch: fetchDemos };
}
