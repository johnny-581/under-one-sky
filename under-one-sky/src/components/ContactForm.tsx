const ContactForm = () => {
    return (
        <div className="max-w-[900px] mx-auto mt-[100px] mb-[90px]">
            <h2 className="text-4xl font-merriweather font-light text-foreground text-center mb-8">Share Your Story</h2>
            <p className="text-[27px] font-merriweather text-foreground text-center mb-8">
                If you are interested in an interview with us, please fill the information below and we&apos;ll connect with you in a week.
            </p>

            <form
                action="https://formspree.io/f/mjkgjppp"
                method="POST"
                className="mx-auto max-w-[600px] text-[27px] font-merriweather"
            >
                <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-[10%] mb-14">
                    <label className="self-end">First Name:</label>
                    <div className="relative group">
                        <input
                            type="text"
                            name="first-name"
                            className="relative z-10 bg-transparent w-full py-1 focus:outline-none"
                            required
                        />
                        <span className="absolute bottom-0 left-[-8px] right-0 h-[4px] 
                           bg-gray rounded-full 
                           group-focus-within:bg-red
                           transition-colors duration-200"
                        ></span>
                    </div>

                    <label className="self-end">Last Name:</label>
                    <div className="relative group">
                        <input
                            type="text"
                            name="last-name"
                            className="relative z-10 bg-transparent w-full py-1 focus:outline-none"
                            required
                        />
                        <span className="absolute bottom-0 left-[-8px] right-0 h-[4px] 
                           bg-gray rounded-full 
                           group-focus-within:bg-red
                           transition-colors duration-200"
                        ></span>
                    </div>

                    <label className="self-end">Email:</label>
                    <div className="relative group">
                        <input
                            type="email"
                            name="email"
                            className="relative z-10 bg-transparent w-full py-1 focus:outline-none"
                            required
                        />
                        <span className="absolute bottom-0 left-[-8px] right-0 h-[4px] 
                           bg-gray rounded-full 
                           group-focus-within:bg-red
                           transition-colors duration-200"
                        ></span>
                    </div>
                </div>



                <button
                    type="submit"
                    className="w-full bg-beige hover:bg-yellow py-2 px-10 rounded-full transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm;
