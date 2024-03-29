import Searchbar from './Searchbar.jsx';

function Navbar() {
    return (
        <div className="navbar navbar-expand-lg bg-body-tertiary">
        {/* Header, grade 1 - 6. Searchbar on the left */}
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Grade 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Grade 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Grade 3
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Grade 4
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Grade 5
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Grade 6
              </a>
            </li>
          </ul>
          <Searchbar />
        </div>
      </div>
    );
}

export default Navbar;