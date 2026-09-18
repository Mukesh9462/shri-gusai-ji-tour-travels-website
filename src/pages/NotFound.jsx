import { Link } from "react-router-dom";
export default function NotFound() { return <main className="not-found"><div><span>404</span><h1>पेज नहीं मिला</h1><p>The page you are looking for does not exist.</p><Link to="/" className="btn btn-primary">होम पर जाएं</Link></div></main>; }
