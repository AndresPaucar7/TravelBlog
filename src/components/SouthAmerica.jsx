import React, { useRef } from 'react';
import './Places.css';

const places = [
    { name: 'Brazil', imageUrl: 'https://cdn.adventure-life.com/64/17/2/gm97uu4m/fullsize.jpg', description: 'Brazil is known for the Amazon rainforest\nand vibrant culture.' },
    { name: 'Colombia', imageUrl: 'https://images5.alphacoders.com/427/thumb-1920-427646.jpg', description: 'Colombia is famous for its coffee\nand beautiful landscapes.' },
    { name: 'Argentina', imageUrl: 'https://vamospanish.com/wp-content/uploads/live-in-buenos-aires-1024x574.jpg', description: 'Argentina is renowned for tango\nand Patagonia.' },
    { name: 'Peru', imageUrl: 'https://www.peru.travel/contenido/acercadeperu/imagen/en/6/0.0/principal/machu%20picchu.jpg', description: 'Peru is home to Machu Picchu\nand rich Inca heritage.' },
    { name: 'Venezuela', imageUrl: 'https://america.cgtn.com/wp-content/uploads/2018/06/VCG11476446839.jpg', description: 'Venezuela boasts Angel Falls,\nthe world\'s highest waterfall.' },
    { name: 'Chile', imageUrl: 'https://www.onetravel.com/going-places/wp-content/uploads/2016/12/Santiago-de-Chile.jpg', description: 'Chile stretches along the\nwestern edge of South America.' },
    { name: 'Ecuador', imageUrl: 'https://www.darioendara.com/wp-content/uploads/2017/03/91-Cuenca-Ecuador-travel-photography.jpg', description: 'Ecuador is known for the Galápagos Islands\nand biodiversity.' },
    { name: 'Bolivia', imageUrl: 'https://www.travelawaits.com/wp-content/uploads/2021/04/f0d78129f8312fdf96d6bc0e0a80cf0d781-scaled.jpg?fit=2560%2C2560', description: 'Bolivia is famous for its\nsalt flats and indigenous culture.' }
];


const SouthAmerica = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (direction === 'left') {
            scrollRef.current.scrollLeft -= 300;
        } else {
            scrollRef.current.scrollLeft += 300;
        }
    };

    return (
        <div>
            <div className='title'>
                <h2>South America</h2>
            </div>
            <section className="grid-section">
                <div className="scroll-container">
                    <button className="scroll-button left" onClick={() => scroll('left')}>
                    ;
                    </button>
                    <div className="grid" ref={scrollRef}>
                        {places.map((place, index) => (
                            <div key={index} className="grid-item">
                                {place.name === 'Brazil' ? (
                                    <a href={place.link}> 
                                        <img src={place.imageUrl} alt={place.name} />
                                        <div className="place-info">
                                            <h3>{place.name}</h3>
                                            <p>{place.description}</p>
                                        </div>
                                    </a>
                                ) : (
                                    <>
                                        <img src={place.imageUrl} alt={place.name} />
                                        <div className="place-info">
                                            <h3>{place.name}</h3>
                                            <p>{place.description}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    <button className="scroll-button right" onClick={() => scroll('right')}>
                        &#8594;
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SouthAmerica;