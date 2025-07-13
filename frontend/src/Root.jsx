// src/Root.jsx
import { useEffect, useState } from "react";
import ThemeProvider from "./utils/ThemeProvider";
import Loading from "./components/custom/Loading";

export default function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ThemeProvider />
  );
}
