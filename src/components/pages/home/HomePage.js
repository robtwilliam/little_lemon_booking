import './home.css';
import CallToAction from './CallToAction';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Chicago from './Chicago'

function HomePage() {
    return (
        <div className='home'>
            <CallToAction />
            <Specials />
            <Testimonials />
            <Chicago />
        </div>
    )
}

export default HomePage;