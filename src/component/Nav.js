import '../App.css';
import { Link } from 'react-router-dom';

//상단 네비게이션
function Nav(props) {
    return(
      <div className="black-nav">
        <div className='logo'><Link to="/">COFFEE MAGAZINE</Link></div>
      </div>
    )
  }

export default Nav;