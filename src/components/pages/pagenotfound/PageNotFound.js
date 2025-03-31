import { Link } from "react-router-dom";
import './pagenotfound.css'

function PageNotFound() {
    return (
        <div className="page-not-found">
            <h1>404</h1>
            <h2>Oops! page not found.</h2>
            <p>The page you are looking for does not exist or has been moved</p>
            <Link to="/"><button>Go back home</button></Link>
        </div>
    )
}

export default PageNotFound;