"use client";
import { useState, useEffect } from "react";

/**
 * Detects touch-primary devices using pointer: coarse media query.
 * More reliable than width-based detection — handles tablets, touch laptops, etc.
 */
export function useIsTouch(): boolean {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia("(pointer: coarse)");
        setIsTouch(mql.matches);

        const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    return isTouch;
}
