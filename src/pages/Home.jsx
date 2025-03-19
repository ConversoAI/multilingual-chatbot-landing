// import Hero from "../components/Hero";
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className="hero min-h-[50vh] bg-base-200">
            <div className="hero-content text-center">
                <div className="text-left md:text-center">
                    <h1 className="text-2xl leading-10 md:text-5xl md:leading-relaxed font-bold">
                        Break Language Barriers with <span className="text-primary">Agentic AI-Powered</span> Multilingual Chatbots
                    </h1>
                    <p className="py-6 text-md md:text-xl">
                        Communicate with customers in 100+ languages using intelligent conversational agents that understand context and nuance
                    </p>
                    <Link to="/waitlist" className="btn btn-primary">
                        Join Waitlist
                    </Link>
                </div>
            </div>
        </div>
    )
}