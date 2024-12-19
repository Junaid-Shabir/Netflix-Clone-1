// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark " style={{background:'transparent', boxShadow: 'none' }}>
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
//             alt="Netflix Logo"
//             style={{ height: '55px' }} // Adjusting the height of the logo
//           />
//         </Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="#profile">
//                 {/* <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
//                   alt="User Avatar"
//                   style={{ height: '30px', borderRadius: '50%' }} // Adjusting the avatar style
//                 /> */}
//               </a>

//             </li>
//             <li>
//                 <Link to='/signin'  style={{backgroundColor:'red', color:'white', padding:'10px 20px', borderRadius:'10px', textDecoration:'none', margin:'0px 15px'}}>Sign In </Link>
//               </li>

//               <li>
//                 <Link to='/signup' style={{backgroundColor:'red', color:'white', padding:'10px 20px', borderRadius:'10px', textDecoration:'none'}}> Sign Up </Link>
//               </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "transparent", boxShadow: "none" }}>
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            style={{ height: "30px" }} // Adjusting the height of the logo
          />
        </Link>

        {/* Toggler Button for Mobile View */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* Menu Items */}
            <li className="nav-item">
              <Link className="nav-link mx-2 text-white" to="#netflixOriginals" onClick={() => scrollToSection("netflixOriginals")}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-white" to="#netflixOriginals" onClick={() => scrollToSection("netflixOriginals")}>
                Netflix Originals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-white" to="#trending" onClick={() => scrollToSection("trending")}>
                Trending Now
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-white" to="#topRated" onClick={() => scrollToSection("topRated")}>
                Top Rated
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-white" to="#actionMovies" onClick={() => scrollToSection("actionMovies")}>
                Action Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-white" to="#horrorMovies" onClick={() => scrollToSection("horrorMovies")}>
                Horror Movies
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link mx-2 text-white" to="#romanceMovies" onClick={() => scrollToSection("romanceMovies")}>
                Romance Movies
              </Link>
            </li> */}
            <li className="nav-item mx-1 my-lg-0 my-2">
              <Link
                to="/signin"
                className="btn btn-outline-light"
                style={{
                  padding: "8px 16px",
                  borderRadius: "25px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item mx-1 my-lg-0 my-2">
              <Link
                to="/signup"
                className="btn btn-danger"
                style={{
                  padding: "8px 16px",
                  borderRadius: "25px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
}

export default Navbar;
