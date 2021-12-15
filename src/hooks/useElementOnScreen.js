import { useEffect, useRef, useState } from "react";
const useElementOnScreen = (param) => {
    const triggerElement = useRef(null);

    const [ isVisible, setIsVisible] = useState(false);

    const stateSwitch = (entries) => {
        const [ entry ] = entries;
        if(entry.isIntersecting) setIsVisible(true)
    }

    useEffect(() => {
        const observedElement = triggerElement.current;

        const observer = new IntersectionObserver(stateSwitch, param);
        if (observedElement) observer.observe(observedElement);

        return () => {
            if(observedElement) observer.unobserve(observedElement);
        }
    }, [triggerElement, param])
    return [triggerElement, isVisible]
}
 
export default useElementOnScreen;