import { getMessage } from "../services/api";

function Home() {
  return <h2>Home Page: {getMessage()}</h2>;

}

export default Home;