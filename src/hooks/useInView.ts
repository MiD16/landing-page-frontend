import { useState, useEffect, useRef, type RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useInView<T extends Element = Element>({
  threshold = 0,
  root = null,
  rootMargin = '0px',
}: UseInViewOptions = {}): [RefObject<T | null>, boolean] {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin]);

  return [ref, isInView];
}
