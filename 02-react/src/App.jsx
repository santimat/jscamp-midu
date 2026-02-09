// is possible add an alias to an import
// import { Header as Head } from "@components/Header.jsx";

// Is important have the file's extension because improve packaging performance and its also a good practice
import { Header } from "@components/Header.jsx";
import { Footer } from "@components/Footer.jsx";

import { HomePage } from "@pages/Home.jsx";
import { SearchPage } from "@pages/Search.jsx";
import { NotFoundPage } from "@pages/404.jsx";
import { useRouter } from "@hooks/useRouter.jsx";

function App() {
  const { currentPath } = useRouter();

  let page = <NotFoundPage />;

  // render page conditionally
  switch (currentPath) {
    case "/":
      page = <HomePage />;
      break;
    case "/search":
      page = <SearchPage />;
      break;
  }

  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
}

export default App;
