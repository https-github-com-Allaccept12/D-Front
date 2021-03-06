import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScollTop() {
    const { pathname } = useLocation();
    if (pathname.startsWith("/dimo") && !pathname.startsWith("/dimo/qnadetail")) {
        useEffect(() => {
            window.scrollTo(0, 500);
        }, [pathname]);
    } else if (pathname.startsWith("/art")) {
        useEffect(() => {
            window.scrollTo(0, 200);
        }, [pathname]);
    } else if (pathname.startsWith("/dimo/qnadetail")) {
        useEffect(() => {
            window.scrollTo(0, 200);
        }, [pathname]);
    } else if (pathname.startsWith("/myspace")) {
        useEffect(() => {
            window.scrollTo(0, 800);
        }, [pathname]);
    }

    return null;
}
