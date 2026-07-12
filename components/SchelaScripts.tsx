"use client";

import { useEffect } from "react";
import initSchela from "./schela-init";

export default function SchelaScripts() {
  useEffect(() => {
    initSchela();
  }, []);

  return null;
}
