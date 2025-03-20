import { useState } from 'react';

function WaitlistModal() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would send the data to your backend

        // Show success state
        setIsSubmitted(true);

        // Optional: Auto-close after delay
        setTimeout(() => {
            document.getElementById('waitlist_modal').close();
            // Reset form and state after modal closes
            setTimeout(() => {
                setFormData({ fullName: '', email: '' });
                setIsSubmitted(false);
            }, 300);
        }, 3000);
    };

    const closeModal = () => {
        document.getElementById('waitlist_modal').close();
        // Reset form and success state when modal is closed
        setTimeout(() => {
            setFormData({ fullName: '', email: '' });
            setIsSubmitted(false);
        }, 300);
    };

    return (
        <dialog id="waitlist_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                {!isSubmitted ? (
                    <>
                        <h3 className="font-bold text-lg mb-4">Join our Waitlist</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control w-full">
                                <label className="floating-label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="form-control w-full mt-4">
                                <label className="floating-label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="modal-action">
                                <button type="submit" className="btn btn-primary">Join Waitlist</button>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="py-8 text-center">
                        <div className="flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Thank You!</h3>
                        <p className="mb-6">You've been added to our waitlist. We'll notify you when we launch.</p>
                        <button className="btn btn-primary" onClick={closeModal}>Close</button>
                    </div>
                )}
            </div>
        </dialog>
    );
}

export default WaitlistModal;