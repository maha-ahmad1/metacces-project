"use client"

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export const useProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const router = useRouter();

  const startCounting = useCallback(() => {
    if (!isCompleted) {
      setIsPressed(true);
    }
  }, [isCompleted]);

  const stopCounting = useCallback(() => {
    if (!isCompleted) {
      setIsPressed(false);
      if (progress < 100) {
        setProgress(0);  
      }
    }
  }, [progress, isCompleted]);

  useEffect(() => {
    let intervalId;

    if (isPressed && progress < 100) {
      intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 99) {
            clearInterval(intervalId);
            setIsCompleted(true);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 50);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);  
    };
  }, [isPressed, progress]);

  useEffect(() => {
    if (isCompleted) {
      const redirectTimeout = setTimeout(() => {
        router.push('/profile');
      }, 100);

      return () => clearTimeout(redirectTimeout);
    }
  }, [isCompleted, router]);

  return { progress, startCounting, stopCounting, isCompleted };
};