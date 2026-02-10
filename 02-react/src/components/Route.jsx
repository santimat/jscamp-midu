import { useRouter } from "@/hooks/useRouter.jsx"

// the argument component is renamed to Component in pascal because it will be used as a React Component
export function Route({path = "/", component: Component}){

  const {currentPath} = useRouter();

  // if the currentPath is not the same which path that i want render, return null
  // && operator return a value for default, it is called short-circuit
  // currentPath !== path && null;

  // for legibility, i use an if
  if(currentPath !== path) return null

  // if currentPath is the same, we return the correct component 
  return <Component/>
}