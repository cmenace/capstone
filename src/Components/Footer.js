import {Link} from 'react-router-dom';
export default function Footer() {

    return (
      <footer>
        <img src="/images/footer.png" alt="little lemon"/>
        <div className="footer-content">
            <div className="footer-nav">
                <Link to="/" className="footer-item">Home</Link>
                <a href="#" className="footer-item">About</a>
                <a href="#" className="footer-item">Menu</a>
                <Link to="/booking" className="footer-item">Reservations</Link>
                <a href="#" className="footer-item">Order Online</a>
                <a href="#" className="footer-item">Login</a>
            </div>
        </div>
      </footer>
    )
  }