import "../style.css";
import logo from "../assets/images/2.png";
function Header() {
  return (
    <>
      <nav class="navbar p-5">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle text-dark"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar text-dark"></span>
              <span class="icon-bar text-dark"></span>
              <span class="icon-bar text-dark"></span>
            </button>
            <a href="#" className="navbar-brand">
              <img src={logo} alt="logo" className="img-fluid" />
            </a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav  navbar-right">
              <li>
                <a href="#">Track Application</a>
              </li>
              <li>
                <a href="#">Manage My Card</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <button class="get-satrt">Get Started</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
