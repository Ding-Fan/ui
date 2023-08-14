import { useState, useEffect, useRef } from "react";

export function useIsInView() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // https://stackoverflow.com/a/68502140/6236633
  // IntersectionObserver is not defined
  let observer: any;
  if (typeof window !== "undefined") {
    observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
  }

  useEffect(() => {
    const observed = ref.current;

    if (observed && observer) {
      observer.observe(observed);
    }

    // Clean up the observer on component unmount
    return () => {
      if (observed && observer) {
        observer.unobserve(observed);
      }
    };
  }, [observer]);

  return [ref, isInView];
}
