import { useIntersection, usePrefersReducedMotion } from ".";

const fadeInVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.2 },
  },
};

function useFadeIn(intersectionRef: React.MutableRefObject<null>) {
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.07,
  });

  const prefersReducedMotion = usePrefersReducedMotion();

  const variants = !prefersReducedMotion && fadeInVariants;
  const isIntersecting = intersection && intersection.intersectionRatio > 0.06;
  const animate = isIntersecting ? "visible" : "";

  const initial = "hidden";

  return [initial, animate, variants];
}

export default useFadeIn;
