import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import { Details } from "./pages/Details";
import { Favourites } from "./pages/Favourites";
import { Home } from "./pages/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/details/:id" element={ <Details /> } />
        <Route exact path="/favourites" element={ <Favourites /> } />
      </Routes>
    </Router>
  );
}

export default App;
