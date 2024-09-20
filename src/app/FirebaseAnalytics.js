"use client";

import { useEffect } from "react";
import { analytics } from "../firebaseConfig";

const FirebaseAnalytics = () => {
  useEffect(() => {
    analytics;
  }, []);

  return null;
};

export default FirebaseAnalytics;
