"use client";

import { useEffect } from "react";

export function ConsoleEasterEgg() {
    useEffect(() => {
        const styles = [
            "color: #00adef",
            "font-size: 24px",
            "font-weight: bold",
            "font-family: 'DM Sans', sans-serif",
        ].join(";");

        const subtitleStyles = [
            "color: #64748b",
            "font-size: 14px",
            "font-family: 'DM Sans', sans-serif",
        ].join(";");

        console.log("%cInnodify", styles);
        console.log(
            "%cCurious about how we built this? We're always looking for talented engineers.\nReach out → careers@innodify.co.in",
            subtitleStyles
        );
    }, []);

    return null;
}
