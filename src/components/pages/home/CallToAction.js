import '../../../App.css';
import Banner from '../../../assets/restauranfood.jpg'

function CallToAction() {
    return (
        <div className="banner">
            <div className="banner-contents">
                <div className="banner-text">
                    <h1>
                        Little Lemon
                    </h1>
                    <h2>
                        Chicago
                    </h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button>
                        Reserve a Table
                    </button>
                </div>
                <img src={Banner} alt="restaurantfood"></img>
            </div>
        </div>
    )
}

export default CallToAction;