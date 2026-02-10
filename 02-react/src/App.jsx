// is possible add an alias to an import
// import { Header as Head } from "@components/Header.jsx";

// Is important have the file's extension because improve packaging performance and its also a good practice
import { Header } from "@components/Header.jsx";
import { Route } from "@/components/Route.jsx";
import { HomePage } from "@/pages/Home.jsx";
import { SearchPage } from "@/pages/Search.jsx";
import { Details } from "@/pages/Details.jsx";
import { Footer } from "@components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/details" component={Details} />
      <Footer />
    </>
  );
}

export default App;
