import React, { useEffect, useState } from "react";

function ThemeColorSwitcher() {
    const [mounted,setMounted] = useState(false);
    const [color,setColor] = useState <string | undefined>(undefined);

useEffect(() => {
    setMounted(true);
    setColor(document.documentElement.dataset.color || "indigo");
    }, []);

    useEffect(() => {
     if(!mounted || color === undefined) return;

    
      
      }, []);

     

      if (!mounted) return null;



    return <div className="mb-20 flex items-center justify-center space-x-4">
       
    </div>
}

export default ThemeColorSwitcher;