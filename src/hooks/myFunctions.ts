import { useState, useEffect } from "react";

export function myFunctions() {

    const [isLoggedIn,setState] = useState(false);
    
    return {
        isLoggedIn
    };
}