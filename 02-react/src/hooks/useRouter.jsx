import { useState, useEffect } from "react";

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    function handleLocationChange() {
      setCurrentPath(window.location.pathname);
    }

    // set the suscription event
    window.addEventListener("popstate", handleLocationChange);

    // when the component are dismounted
    return () => {
      // remove event suscription
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [currentPath]);

  function navigateTo(path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  // here we return which we need
  return { navigateTo, currentPath };
}
