import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Post from "./components/Post";
import { Container } from "react-bootstrap";
import Login from "./components/Login";
import Landingpage from "./components/Landingpage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <Container>
      <Link to="/">Home</Link>{"   "}
      <Link to="/post">post</Link>{" "}
      <Link to="/login">login</Link>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/post" element={<Post></Post>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
