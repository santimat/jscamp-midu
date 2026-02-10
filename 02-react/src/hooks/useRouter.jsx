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

  // is better save the query params in a object literal, dont into a state because it would case many innecesary re-renders
  const searchParams = new URLSearchParams(window.location.search);
  const queryParams = Object.fromEntries(searchParams.entries());

  function navigateTo(path) {
    // send the new url path to navigation history
    window.history.pushState({}, "", path);

    // dispatch popstate event that happens when navigation history changes
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  // here we return which we need
  return { navigateTo, currentPath, queryParams };
}
