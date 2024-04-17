import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import '../styling/cursor.css'

const Cursor = () => {
    const mouse_x = useMotionValue(0);
    const mouse_y = useMotionValue(0);

    const default_outline = {
        layout: "position",
        stiffness: 150,
        damping: 30
    }

    const default_dot = {
        layout: "position",
        stiffness: 300,
        damping: 40
    }

    const mouse_dot_x = useSpring(useTransform(mouse_x, value => value - 6), default_dot );
    const mouse_dot_y = useSpring(useTransform(mouse_y, value => value - 6), default_dot );

    const mouse_outline_x = useSpring(useTransform(mouse_x, value => value - 14), default_outline );
    const mouse_outline_y = useSpring(useTransform(mouse_y, value => value - 14), default_outline );

    useEffect(() => {
        const updateMousePosition = event => {
            mouse_x.set(event.clientX);
            mouse_y.set(event.clientY);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <>
            <motion.div style={{x: mouse_dot_x, y: mouse_dot_y}} transition={{stiffness: 300,damping: 40}} className='cursor_dot'></motion.div>
            <motion.div style={{x: mouse_outline_x, y: mouse_outline_y}} transition={{stiffness: 100,damping: 20}} className='cursor_outline'></motion.div>
        </>
    );
}

export default Cursor;
