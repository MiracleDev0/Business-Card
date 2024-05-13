import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function About() {
    return (
        <div className="abt">
            <h1>Esan Miracle</h1>
            <h3>Frontend Developer</h3>
            
            <div className='btn'>
                <a href="mailto:receipient@miracleesan7@gmailcom"><button><FontAwesomeIcon icon={faEnvelope} />Email</button></a>
                <a href="https://www.linkedin.com/in/miracle-esan-57067a202"><button><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button></a>
            </div>
            <div  className='about'>
            <h2>About</h2>
            <p>I am a frontend developer specializing in creating sleek, responsive user interfaces. With expertise in HTML, CSS, JavaScript, and React. I turn design concepts into engaging web experiences and try to keep up with best practices. Let's build something amazing together.</p>
            </div>
            <div className='interest'>
            <h2>Interests</h2>
            <p>Beyond coding and Experimenting with emerging technologies, I am a football fan, music scholar and a movie lover</p>
            </div>
        </div>
    )
}