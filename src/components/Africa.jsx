import React, { useRef } from 'react';
import './Places.css';

const places = [
    { 
        name: 'South Africa', 
        imageUrl: 'https://assets3.thrillist.com/v1/image/2630168/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70', 
        description: 'South Africa is famous for its\nbeautiful landscapes, wildlife,\n and vibrant cities.'
    },
    { 
        name: 'Kenya', 
        imageUrl: 'https://cloudfront.safaribookings.com/blog/2019/07/7-10-Most-Beautiful-and-Interesting-Places-to-Visit-in-Kenya-BW-800px.jpg', 
        description: 'Kenya is renowned for its wildlife reserves\nand stunning natural beauty.'
    },
    { 
        name: 'Egypt', 
        imageUrl: 'https://www.visafirst.com/blog/wp-content/uploads/2022/10/Beautiful-Ruins-seated-statues-of-Ramesses-II-at-the-Great-Temple-of-Abu-Simbel.jpg', 
        description: 'Egypt is home to ancient civilization landmarks,\nincluding the pyramids and the Nile River.'
    },
    { 
        name: 'Morocco', 
        imageUrl: 'https://www.joinmytrip.com/blog/wp-content/uploads/2023/02/heidi-kaden-NncAbldgViA-unsplash-scaled.jpg', 
        description: 'Morocco is known for its rich history,\nstunning architecture, and diverse landscapes.'
    },
    { 
        name: 'Ghana', 
        imageUrl: 'https://content.r9cdn.net/rimg/dimg/dd/30/25eecbb5-city-5989-174dc0226d1.jpg?crop=true&width=1020&height=498', 
        description: 'Ghana is famous for its warm hospitality,\ncocoa production, and historical forts.'
    },
    { 
        name: 'Tanzania', 
        imageUrl: 'https://www.visafirst.com/blog/wp-content/uploads/2020/07/Tanzanian-beach.jpg', 
        description: 'Tanzania is known for Mount Kilimanjaro\nand its rich wildlife in national parks.'
    },
    { 
        name: 'Zimbabwe', 
        imageUrl: 'https://www.tripsavvy.com/thmb/fNsdbjMNzBA8dVWyuIGDcNW0Nyw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-143922110-5bf7964146e0fb0026a2df41.jpg', 
        description: 'Zimbabwe is famous for its natural wonders,\nincluding Victoria Falls and Hwange National Park.'
    }
];


const PlacesInAfrica = () => {
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
            <h2>Africa</h2>
             </div>
            <section className="grid-section">
                <div className="scroll-container">
                    <button className="scroll-button left" onClick={() => scroll('left')}>
                        &#8592;
                    </button>
                    <div className="grid" ref={scrollRef}>
                        {places.map((place, index) => (
                            <div key={index} className="grid-item">
                                <img src={place.imageUrl} alt={place.name} />
                                <div className="place-info">
                                    <h3>{place.name}</h3>
                                    <p>{place.description}</p>
                                </div>
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

export default PlacesInAfrica;
