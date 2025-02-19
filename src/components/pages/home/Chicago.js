import './home.css';
import img_a from '../../../assets/Mario and Adrian A.jpg';
import img_b from '../../../assets/Mario and Adrian b.jpg';


function Chicago() {
    return (
        <div className='chicago-bio'>
            <div className='chicago-bio-text'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Little Lemon is a fine dining restaurant designed with a state of the art kitchen to provide you
                    delicious meals in an atmosphere that facilitates fun conversation and a lively dining experience.
                    We have been proudly serving the Chicago area for many years and would be happy to welcome you into our Lemon family.
                </p>
            </div>
            <div className='chicago-bio-images'>
                <img src={img_a} className='chicago-bio-img-a' alt="Chefs A"/>
                <img src={img_b} className='chicago-bio-img-b' alt="Chefs B"/>
            </div>
        </div>
    )
}

export default Chicago;