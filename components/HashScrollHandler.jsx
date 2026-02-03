"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function HashScrollHandler() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleHashScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                // Small delay to ensure the DOM is rendered and components are mounted
                setTimeout(() => {
                    const id = hash.replace("#", "");
                    const element = document.getElementById(id);
                    if (element) {
                        const offset = 100; // Account for fixed navbar
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                }, 300);
            }
        };

        handleHashScroll();
    }, [pathname, searchParams]);

    return null;
}
