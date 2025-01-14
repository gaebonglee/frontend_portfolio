import { useEffect } from "react";
import Portfolio from "./pages/Portfolio";

function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return <Portfolio />;
}

export default App;
