import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/MiracleOlaolu"><FontAwesomeIcon icon={faTwitter} className="styled-icon"/></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="styled-icon"/></a>
            <a href="https://github.com/MiracleDev0"><FontAwesomeIcon icon={faGithub} className="styled-icon"/></a>
            
        </footer>
    )
}