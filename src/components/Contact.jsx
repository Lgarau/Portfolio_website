

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-br from-stone-900 to-gray-800 py-16">
      <div className="flex flex-col items-center justify-center text-center gap-4">
      
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          <span className="text-6xl font-semibold text-white">Get in Touch</span>
        </h1>

        <a
          href="mailto:lauragarau23@gmail.com"
          className="mt-4 inline-block px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-black rounded-lg hover:scale-105"
        >
          Contact Me
        </a>
        
      </div>
    </div>
  );
};

export default Contact;