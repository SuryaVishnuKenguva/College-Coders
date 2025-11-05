import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: `Mee channel future laa chala manchi IT skills nercine channel ga avthundhi bro really
      Millions of views and subscribers vastharu... 🎉`,
      position: "top-left",
    },
    {
      id: 2,
      text: `Nuvvem manishivi ayya swami.. intha manchiga YouTube lo yevaru chepparu...
      Slow motion lo petti chustthey inka super ga ardham avtundi..
      Thank you very very much mama ❤️❤️🎉🎉
      I'm very lucky to having YouTube teacher like you 😊`,
      position: "top-right",
    },
    {
      id: 3,
      text: `Your exercises and challenging exercises are best and next level bro for being consistent ✨✨
- thank you`,
      position: "bottom-left",
    },
    {
      id: 4,
      text: `I've watched so many JS tutorials, but this one finally made everything click 😍
I never subscribe to anyone, but your explanation is just next level —
subscribed and liked instantly! ❤️🔥`,
      position: "bottom-right",
    },
  ];

  return (
    <section className="relative flex items-center justify-center bg-linear-to-br from-base-100 via-base-200 to-base-100 dark:from-base-300 dark:via-base-200 dark:to-base-300 overflow-hidden">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-base-content mb-3 leading-tight">
            Student{" "}
            <span className="bg-primary bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
        </div>

        {/* Testimonials Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Glowing effect on hover */}
              <div
                className={`absolute -inset-1 bg-primary rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
              ></div>

              {/* Card */}
              <div className="relative h-full bg-base-100/90 dark:bg-base-200/90 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border-2 border-base-300/50 group-hover:border-transparent transition-all duration-500 shadow-xl group-hover:shadow-2xl hover:-translate-y-1 flex flex-col">
                {/* Quote icon with gradient */}
                <div className="mb-4">
                  <div
                    className={`inline-flex w-12 h-12 bg-primary rounded-xl items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <FaQuoteLeft className="text-white text-xl" />
                  </div>
                </div>

                {/* Testimonial text */}
                <blockquote className="text-base-content text-base lg:text-sm leading-relaxed font-medium flex-1 mb-6 whitespace-pre-line">
                  "{testimonial.text}"
                </blockquote>

                {/* Gradient accent line */}
                <div className="relative pt-4">
                  <div
                    className={`h-1 bg-primary rounded-full transition-all duration-500 ${
                      index % 2 === 0
                        ? "w-16 group-hover:w-full"
                        : "w-full group-hover:w-16 ml-auto"
                    }`}
                  ></div>
                </div>

                {/* Decorative corner gradient */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 bg-primary opacity-5 rounded-tl-full rounded-br-3xl group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
