import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import bgImage from '../assets/bg/homeHeroBg.png';

export default function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main>
            <div
                className="hero bg-emerald-600 bg-cover bg-center px-4 py-8 md:px-20 md:py-32 relative min-h-[90vh] overflow-hidden"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: `center ${scrollPosition * 0.4}px`
                }}
            >
                <div className="text-primary-content text-center">
                    <div className="text-left md:text-center">
                        <h1 className="text-3xl leading-10 md:text-5xl md:leading-relaxed font-bold">
                            Break Language Barriers with Agentic AI-Powered Multilingual Chatbots
                        </h1>
                        <p className="py-6 text-md md:text-xl">
                            Communicate with customers in 100+ languages using intelligent conversational agents that understand context and nuance
                        </p>
                        <Link to="/waitlist" className="btn w-full md:w-fit">
                            Join Waitlist
                        </Link>
                    </div>
                </div>
            </div>
            <div className='h-screen'></div>
        </main>
    );
}