import './home.css'
import '../../../index.css'
import Basket from '../../../assets/Basket.svg'

var specials_data =  [
    {
        'id': '1',
        'title': 'Greek Salad',
        'price': '$12.99',
        'description': 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        'image': 'greek salad.jpg'
    },
    {
        'id': '2',
        'title': 'Bruschetta',
        'price': '$5.99',
        'description': 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        'image': 'bruchetta.svg'
    },
    {
        'id': '3',
        'title': 'Lemon Dessert',
        'price': '$5.00',
        'description': "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
        'image': 'lemon dessert.jpg'
    }
]

function SpecialsCarouselItem(props) {
    return (
        <div className='specials-carousel-item'>
            <img src={require(`../../../assets/${props.image}`)} className='specials-carousel-image'/>
            <div className='carousel-item-contents'>
                <div className='carousel-title-and-price'>
                    <div className='carousel-item-title'>
                        {props.title}
                    </div>
                    <div className='carousel-item-price'>
                        {props.price}
                    </div>
                </div>
                <div className='carousel-item-description'>
                    {props.description}
                </div>
                <div className='carousel-item-order-delivery'>
                    <div className='carousel-order-cta'>
                        Order a delivery
                    </div>
                    <img src={Basket} className='basket-icon'/>
                </div>
            </div>
        </div>
    )
}


function Specials() {
    return (
    <div className='specials'>
        <div className='specials-header'>
            <h1>
                This Week's Specials!
            </h1>
            <button>
                Online Menu
            </button>
        </div>
        <div className='specials-carousel'>
            {specials_data.map((a, idx) => (
                <SpecialsCarouselItem key={a.id} id={a.id} title={a.title} price={a.price} description={a.description} image={a.image} />
            )
            )}
        </div>
    </div>
    )
}

export default Specials;