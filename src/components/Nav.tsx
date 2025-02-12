//Extra imports
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;
  console.log(currentPage);



  return (
    <nav>
      <h1>
        <Link to="/" id='logo'>Home</Link>
      </h1>
      <ul className='nav-links'>
        <li className='nav-item'>
          <h2><Link 
            to="/PotentialCandidates" 
            className={currentPage === '/CandidateSearch' ? 'nav-link active' : 'nav-link'}>
            Candidate Search</Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2><Link 
            to="/SavedCandidates" 
            className={currentPage === '/SavedCandidates' ? 'nva-link active' : 'nav-link'}>
            Potential Candidates</Link>
          </h2>
        </li>
      </ul>
    </nav>
  );
}


export default Nav;
