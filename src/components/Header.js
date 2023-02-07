import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
    return (<header className='header'> 
    <ul><li>
        <Link to = '/' > Home </Link> </li>
    <li> 
        <Link to = '/' >Logout </Link></li>

    </ul>
    </header> );
    }
    export default Header;