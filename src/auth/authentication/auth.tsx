"use client";

import { useState } from "react";
import Login from "./login/login";
import Reg from "./reg/reg";
import Rec from "./recovery/rec";

export default function Auth() {
  const [activeModule, setActiveModule] = useState(1);

  const toggleModule = (module: number) => {
    setActiveModule(module);
  };
  return (
    <div>
      {activeModule === 1 && <Login toggleModule={toggleModule} />}
      {activeModule === 2 && <Rec toggleModule={toggleModule} />}
      {activeModule === 3 && <Reg toggleModule={toggleModule} />}
    </div>
  );
}
