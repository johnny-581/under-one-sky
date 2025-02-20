const ContactForm = () => {
    return (
        <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-md my-12">
            <h2 className="text-2xl font-bold text-center mb-4">Share Your Story</h2>
            <p className="text-gray-600 text-center mb-8">
                If you are interested in an interview with us, please fill the information below and we&apos;ll connect with you in a week.
            </p>

            <form
                action="https://formspree.io/f/mjkgjppp"
                method="POST"
                className="space-y-6"
            >
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">First Name:</label>
                        <input
                            type="text"
                            name="first-name"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">Last Name:</label>
                        <input
                            type="text"
                            name="last-name"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default ContactForm;

{/* Contact Form
      <div className="flex flex-col items-center">
        <h1>Share Your Story</h1>
        <p>If you are interested in an interview with us, please fill the information below and we&apos;ll connect with you in a week.</p>
        <form
          action="https://formspree.io/f/mjkgjppp"
          method="POST"
          className="flex flex-col items-center"
        >
          <label>
            First Name:
            <input type="first-name" name="first-name" />
          </label>
          <label>
            Last Name:
            <input type="last-name" name="last-name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div> */}

