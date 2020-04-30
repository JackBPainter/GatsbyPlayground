import { useEffect } from "react";

export const useOnOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      console.log(handler(event))
      console.log(event.target)
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    return () => {
        document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}