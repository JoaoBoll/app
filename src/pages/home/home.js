import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>Bem-vindo a página home!</h1>
            <Link to='/login'>Login</Link>
        </div>
    );
}

export default Home;