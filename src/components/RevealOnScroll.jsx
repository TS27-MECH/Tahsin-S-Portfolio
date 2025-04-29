import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && node) {
          // Add animation classes
          node.classList.add("opacity-100", "translate-y-0");
          node.classList.remove("opacity-0", "translate-y-10");
          
          // Small stagger effect (optional, if multiple items use RevealOnScroll)
          const delay = node.dataset.delay || 0;
          node.style.transitionDelay = `${delay}ms`;
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-delay="0"  // Default no delay unless specified
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      {children}
    </div>
  );
};
