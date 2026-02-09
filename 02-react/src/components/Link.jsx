import { useRouter } from "@/hooks/useRouter.jsx";

export function Link({ href, children, ...restOfProps }) {
  const { navigateTo } = useRouter();

  function handleClick(event) {
    event.preventDefault();

    navigateTo(href);
  }

  return (
    // with spread operator we can assign all props that received without having to name them
    <a href={href} {...restOfProps} onClick={handleClick}>
      {/* children is the content that our component envolve */}
      {children}
    </a>
  );
}
