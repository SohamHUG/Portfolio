import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

const SmoothScroll = () => {
    const { pathname } = useLocation();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.05,
            smoothWheel: true,
            // smoothTouch: false,
            wheelMultiplier: 0.9,
            touchMultiplier: 1,
        });

        lenisRef.current = lenis;

        let frameId = 0;

        const onFrame = (time: number) => {
            lenis.raf(time);
            frameId = window.requestAnimationFrame(onFrame);
        };

        frameId = window.requestAnimationFrame(onFrame);

        return () => {
            window.cancelAnimationFrame(frameId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        lenisRef.current?.scrollTo(0, { immediate: true });
    }, [pathname]);

    return null;
};

export default SmoothScroll;