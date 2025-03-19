// import Hero from "../components/Hero";
import { Link } from 'react-router-dom';
import bgImage from '../assets/bg/homeHeroBg.png'


export default function Home() {
    return (
        <div className="hero bg-cover bg-center px-4 py-8 md:px-20 md:py-32"
            style={{ backgroundImage: `url(${bgImage})` }}>
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
        </div >
    )
}