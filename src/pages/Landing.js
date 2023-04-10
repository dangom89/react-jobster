import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>job <span>tracking</span> app</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod neque eget sodales maximus. Duis fringilla, ex eget egestas volutpat, sapien lorem dapibus nisi, ut aliquet dui nulla et dolor. Nunc ac lorem lobortis, auctor quam vitae, faucibus orci. Etiam volutpat, sem ut ullamcorper dapibus, ligula leo imperdiet massa, vitae.</p>
                    <Link to='/register'className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    )
}

/*const Wrapper = styled.main`
    nav{
        width:var(--fluid-width);
        max-width:var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    .page{
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items:center;
        margin-top:-3rem;
    }
    h1{
        font-weight:700;
        span{
            color: var(--primary-500);
        }
    }
    p{
        color:var(--gray-600);
    }
    .main-img{
        display:none;
    }
    @media (min-width:992px){
        .page{
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img{
            display:block;
        }
    }
`;*/

export default Landing