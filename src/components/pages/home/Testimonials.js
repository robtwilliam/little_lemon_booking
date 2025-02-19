import './home.css';

var testimonial_data = [
    {
        'id': '1',
        'name':'John',
        'rating': '★★★★★',
        'quote': 'One of my favorite restaurants in town',
        'image': 'headshot_1.jpg'
    },
    {
        'id': '2',
        'name':'Jessica',
        'rating': '★★★★',
        'quote': "The best lemon dessert I've ever had.",
        'image': 'headshot_2.jpg'
    },
    {
        'id': '3',
        'name':'Timmy',
        'rating': '★★★★★',
        'quote': "A fun place to eat after work.",
        'image': 'headshot_3.jpg'
    },
    {
        'id': '4',
        'name':'Susan',
        'rating': '★★★★★',
        'quote': "Excellent service and tasty chicken.",
        'image': 'headshot_4.jpg'
    }

]

function TestimonialCard(props) {
    return (
    <div className='testimonial-card'>
        <div className='testimonial-rating'>
            <div className='rating-header'>
                Rating:
            </div>
            <div className='rating-stars'>
                {props.rating}
            </div>
        </div>
        <div className='testimonial-image-and-name'>
            <img src={require(`../../../assets/${props.image}`)} className='testimonial-image' alt={props.name}/>
            <div className='testimonial-name'>
                {props.name}
            </div>
        </div>
        <div className='testimonial-quote'>
            "{props.quote}"
        </div>
    </div>
    )
}

function Testimonials() {
    return (
        <div className='testimonials'>
            <h1>Testimonials</h1>
            <div className='testimonial-cards'>
                {testimonial_data.map((a,idx) => (
                    <TestimonialCard id={a.id} key={a.id} name={a.name} rating={a.rating} quote={a.quote} image={a.image} />
                ))
                }
            </div>
        </div>
    )
}

export default Testimonials;