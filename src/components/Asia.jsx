import React, { useRef } from 'react';
import './Places.css';

const places = [
    { 
        name: 'Japan', 
        imageUrl: 'https://image12.photobiz.com/6412/9_20210331184634_10380152_xlarge.jpg', 
        description: 'Japan is known for its culture, technology\n and stunning landscapes.'
    },
    { 
        name: 'China', 
        imageUrl: 'https://www.onthegotours.com/repository/Great-Wall-New-Pic-228551391689622.jpg', 
        description: 'China is home to the Great Wall and a history\nspanning thousands of years.'
    },
    { 
        name: 'India', 
        imageUrl: 'https://www.datocms-assets.com/32623/1660060831-safetravelinda_hero.jpg', 
        description: 'India is famous for its diverse culture, \ncuisine, and landmarks like the Taj Mahal.'
    },
    { 
        name: 'Thailand', 
        imageUrl: 'https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg', 
        description: 'Thailand is known for its beautiful \nbeaches, vibrant street life, and rich heritage.'
    },
    { 
        name: 'South Korea', 
        imageUrl: 'https://bucketlistinabikini.com/wp-content/uploads/2018/10/seoul-south-korea-2.jpg?w=1200', 
        description: 'South Korea blends modern \ntechnology with traditional culture and history.'
    },
    { 
        name: 'Malaysia', 
        imageUrl: 'https://www.worldatlas.com/r/w1200/upload/13/df/17/shutterstock-421599898.jpg', 
        description: 'Malaysia is known for its beautiful \nislands, rainforests, and multicultural society.'
    },
    { 
        name: 'Indonesia', 
        imageUrl: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/08/Raja-Ampat-Island-in-Indonesia.jpg', 
        description: 'Indonesia is made up of thousands of \nislands, known for its biodiversity and rich cultures.'
    },
    { 
        name: 'Vietnam', 
        imageUrl: 'https://www.exoticvoyages.com/uploads/images/userfiles/aerial_view_of_golden_bridge.jpg', 
        description: 'Vietnam is famous for its stunning \nlandscapes, delicious cuisine, and historical sites.'
    }
];


const PlacesInAsia = () => {
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
            <h2>Asia</h2>
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


export default PlacesInAsia;
