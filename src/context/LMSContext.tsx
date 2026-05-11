import React, { createContext, useContext, useState, ReactNode } from "react";

type LMSState = "closed" | "login" | "loading" | "denied" | "form" | "success";

interface LMSContextProps {
  lmsState: LMSState;
  setLmsState: (state: LMSState) => void;
  openLMS: () => void;
  closeLMS: () => void;
}

const LMSContext = createContext<LMSContextProps | undefined>(undefined);

export const LMSProvider = ({ children }: { children: ReactNode }) => {
  const [lmsState, setLmsState] = useState<LMSState>("closed");

  const openLMS = () => setLmsState("login");
  const closeLMS = () => setLmsState("closed");

  return (
    <LMSContext.Provider value={{ lmsState, setLmsState, openLMS, closeLMS }}>
      {children}
    </LMSContext.Provider>
  );
};

export const useLMS = () => {
  const context = useContext(LMSContext);
  if (!context) {
    throw new Error("useLMS must be used within an LMSProvider");
  }
  return context;
};
