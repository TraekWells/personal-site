"use client";
import React from "react";
import styles from "./Tooltip.module.scss";
import { AnimatePresence, motion } from "framer-motion";

type TooltipProps = {
  children: React.ReactNode;
  message: string;
};

const Tooltip = ({ children, message }: TooltipProps) => {
  // TODO: Add a11y support for tooltip message
  const [showMessage, setShowMessage] = React.useState(false);

  return (
    <span className={styles.tooltip}>
      <AnimatePresence>
        {showMessage && (
          <motion.span
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            exit={{ opacity: 0, y: 10 }}
            className={styles.tooltipMessage}
            aria-live="polite"
          >
            {message}
          </motion.span>
        )}
      </AnimatePresence>

      <span
        className={styles.tooltipTrigger}
        onMouseOver={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
        onFocus={() => setShowMessage(true)}
        onBlur={() => setShowMessage(false)}
        tabIndex={0}
      >
        {children}
      </span>
    </span>
  );
};

export default Tooltip;
