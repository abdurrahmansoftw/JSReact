import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper>
      <nav></nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Amplicent <span>Management</span> System
          </h1>
          <p>
            The MERN stack stands for MongoDB, Express.js, React.js, and
            Node.js. It is a popular JavaScript stack used for building web
            applications. Heres a brief overview:
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
