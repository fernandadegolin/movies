import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import { Details } from "./components/Details";
import { Home } from "./pages/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/details/:id" element={ <Details/> } />
      </Routes>
    </Router>
  );
}

export default App;
