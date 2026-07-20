import React, { useState } from "react";
import { lazy, Suspense } from "react";



const Portfolio = lazy(() => import("../src/Main/portfolio"))
import Heroskeleton from "./components/ui/Heroskeleton"

 
import "./App.css";
import { div } from "three/src/nodes/math/OperatorNode.js";

const App = () => {

 
 

  return (
    <div className="bg-white/10 ">
  <div 
    className="absolute right-[100px] top-[10px] h-[550px] w-[550px] rounded-full blur-[60px] pointer-events-none" 
    style={{
      background: "radial-gradient(circle, violet 0%, rgba(124,20,237,0.6) 35%, transparent 65%)",
    }}
  />
  <Suspense fallback={<Heroskeleton/>}>
  <Portfolio />

  </Suspense>
</div>

  );
};

export default App;
