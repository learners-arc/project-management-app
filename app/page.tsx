"use client";

import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      {/* <Navbar /> */}
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
