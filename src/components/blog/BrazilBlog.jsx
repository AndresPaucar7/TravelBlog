import React, { useState } from 'react';
import BlogModal from './BlogModal'; 
import './BrazilBlog.css';

const blogPosts = [
    {
        title: 'Culture',
        preview: 'I am half-brazilian on the side of my Mother. Note that I have never lived in Brazil, still never came...',
        fullStory: `I am half-brazilian on the side of my Mother. Note that I have never lived in Brazil, still never came (can't afford the flight), and am mixed with another ethnicity to which I feel more connected my whole life. But recently, I felt pretty sad not knowing much about it. My mother does all she can to help me learn about it. She cooks me her favorite dishes, speaks to me in Portuguese from time to time, tells me about her childhood there, etc. Even though I love every bit of effort she makes to keep me in touch with my origins, there is only so much that she can do. That's why I created this account. I want to learn. I "feel" Brazilian but every time I go on the internet, it feels like I am only Brazilian by name. I tried to search about it, but most information I found is either from foreigners (romanticized vlogs, etc.) or in Portuguese (which I understand to some extent but can't speak), so it's been really hard for me to find reliable and complete information.`,
        imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/121022090741-africa-brazil-samba-sao-paulo.jpg?q=x_0,y_223,h_2418,w_4300,c_crop/w_800'
    },
    {
        title: 'The Ultimate Guide To Rio De Janeiro',
        preview: 'About 6 years ago when I was 19, I flew into Rio, excited but clueless about what awaited me...',
        fullStory: `About 6 years ago when I was 19, I flew into Rio, excited but clueless about what awaited me. But man, did I get a wild welcome.
        
        It's midnight when I arrived, and I found out my bags were stuck in Panama. So there I am, alone in this dead quiet baggage claim, trying to fill out a lost luggage form with Google Translate. It took forever. Then, just when I'm about to leave, I see every exit is blocked off. I figured, screw it, I'll go through the roped-off door. Big mistake. Some giant dude in military gear grabs my backpack, tells me to follow him in broken English. He leads me to this sketchy room, and there's my bag, on a table. No one says a word as they dump my bag and start to rummage through my stuff. After a tense few minutes without saying a word, they're like, "All good," and left me.`,
        imageUrl: 'https://content.r9cdn.net/rimg/dimg/54/ed/eb0f657a-lm-159298-16d6b936db3.jpg?crop=true&width=1020&height=498'
    },
    {
        title: 'Exploring Brazil\'s Nature',
        preview: 'Brazil is a land of gigantic proportions. Energetic, flamboyant, and fun...',
        fullStory: `Brazil is a land of gigantic proportions. Energetic, flamboyant, and fun, Brazil is also overwhelmingly beautiful. Within its mountains, seas, rainforests, deserts, and millions of miles of rivers, are many of our planet’s last wild frontiers. Its diversity of life and landscape is second to none.

        In each episode, the viewer will be taken on a journey across fabulous landscapes and will meet carefully selected, charismatic and little-known animal species. The series investigates their fight for survival and their amazing adaptations to local environments. It will show behavior that will surprise even avid nature-lovers.`,
        imageUrl: 'https://www.fodors.com/wp-content/uploads/2019/06/Natural-Wonders-Brazil-Chapada-Dos-Veadeiros.jpg'
    }
];

const BrazilBlog = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStory, setCurrentStory] = useState({ title: '', story: '', imageUrl: '' });
    const [isAddStoryModal, setIsAddStoryModal] = useState(false);

    const openModal = (title, story, imageUrl) => {
        setCurrentStory({ title, story, imageUrl });
        setIsModalOpen(true);
        setIsAddStoryModal(false);
    };

    const openAddStoryModal = () => {
        setCurrentStory({ title: '', story: '', imageUrl: '' });
        setIsModalOpen(true);
        setIsAddStoryModal(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentStory({ title: '', story: '', imageUrl: '' });
    };

    return (
        <section className="blog-grid">
            {blogPosts.map((post, index) => (
                <div key={index} className="blog-card">
                    <img src={post.imageUrl} alt={post.title} className="blog-image" />
                    <div className="blog-content">
                        <h2>{post.title}</h2>
                        <p>{post.preview}</p>
                        <button className="full-story-btn" onClick={() => openModal(post.title, post.fullStory, post.imageUrl)}>
                            Click for full story
                        </button>
                    </div>
                </div>
            ))}
            
            <button className="add-story-btn" onClick={openAddStoryModal}>
                Add Your Story
            </button>

            <BlogModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                title={currentStory.title} 
                story={currentStory.story} 
                imageUrl={currentStory.imageUrl}
                isAddStoryModal={isAddStoryModal}
                setCurrentStory={setCurrentStory}
            />
        </section>
    );
};

export default BrazilBlog;
