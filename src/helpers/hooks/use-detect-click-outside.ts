import { useEffect } from "react"

export const useDetectClickOutside = (
    ref: React.RefObject<any>,
    active: boolean,
    triggerFunction: () => void,
) => {
    useEffect(() => {
        if (!active) {
            return
        }

        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target)) {
                triggerFunction()
            }
        }

        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [active, ref, triggerFunction])
}
