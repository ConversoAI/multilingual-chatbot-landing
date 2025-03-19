import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import bgImage from '../assets/bg/homeHeroBg.png';
import chatbotSad from '../assets/chatbot-sad.png'
import { IconCurrencyDollar, IconLanguage } from '@tabler/icons-react';

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
            <section className="w-full px-4 py-8 md:px-20 md:py-32">
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex flex-row justify-center items-center'>
                        <img src={chatbotSad} alt="Chatbot" className='h-1/2' />
                    </div>
                    <div className='flex flex-col items-start justify-center gap-8'>
                        <h2 className='text-2xl md:text-4xl font-bold'>Global reach with local understanding</h2>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <span className='text-primary'><IconCurrencyDollar size={36} /></span>
                                <div>
                                    <h3 className='text-lg md:text-xl font-bold'>The Cost of Language Barriers</h3>
                                    <p className='text-sm md:text-base'>In today's global marketplace, businesses without multilingual support lose 40% of potential international customers. Traditional translation services are slow, expensive, and miss cultural context.</p>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <span className='text-primary'><IconLanguage size={36} /></span>
                                <div>
                                    <h3 className='text-lg md:text-xl font-bold'>With Our Multilingual Chatbot Platform</h3>
                                    <p className='text-sm md:text-base'>Deliver exceptional multilingual experiences fast - without the complexity of traditional translation services.
                                        Accelerate global customer engagement, eliminate language barriers, and deploy across all channels with ease.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
