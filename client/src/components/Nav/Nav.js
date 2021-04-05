import { Link } from 'react-router-dom';
import './Nav.css';


export default function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/vocab">Weekly Vocab</Link>
                <Link to="/resources">Resources</Link>
            </div>
        </div>
    )
}
