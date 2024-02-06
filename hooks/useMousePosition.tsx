import { useEffect, useState } from "react"

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const updateMouse = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateMouse)
    }, [])

    return mousePosition;
}

export { useMousePosition };