//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/components/NavBar.css';

export default function NavBar(){
    const navigate = useNavigate();

    return (
        <nav className='navbar'>
            {/**using button instead of link becuase we are not doing multi-page */}
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/about')}>About</button>
            <button onClick={() => navigate('/contact')}>Contact</button>
        </nav>
    );
}