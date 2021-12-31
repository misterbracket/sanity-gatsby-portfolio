import { Variants } from "framer-motion";
import { useIntersection, usePrefersReducedMotion } from ".";

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "Inertia",
      duration: 0.7,
    },
  },
};

function useFadeIn(
  intersectionRef: React.MutableRefObject<null>
): [string, string | undefined, Variants | undefined] {
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px ",
    threshold: 0.1,
  });

  const prefersReducedMotion = usePrefersReducedMotion();

  const variants = prefersReducedMotion ? undefined : fadeInVariants;
  const isIntersecting = intersection && intersection.intersectionRatio > 0.05;
  const animate = isIntersecting ? "visible" : undefined;
  const initial = "hidden";

  return [initial, animate, variants];
}

export default useFadeIn;
