"use client";
import React, { useState, useEffect } from "react";
import styles from "./VisuallyHidden.module.css";

export default function VisuallyHidden({ children, ...delegated }) {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (ev) => {
        if (ev.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = () => {
        setForceShow(false);
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keydown", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }
  return (
    <div
      className={styles.wrapper}
      {...delegated}
    >
      {children}
    </div>
  );
}
