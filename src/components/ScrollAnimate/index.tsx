import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimate: React.FC<IProps> = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="w-full h-max"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.5,
        delay: 0.25,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimate;
