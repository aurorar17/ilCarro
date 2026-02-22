import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
