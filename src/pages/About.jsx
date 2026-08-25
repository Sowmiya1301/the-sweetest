import React from "react";

function About() {
  return (
    <section
      id="about"
      className="bg-body py-12 sm:py-16 lg:py-20 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="order-1">
            <img
              src="/images/about.jpg"
              alt="Delicious strawberry cake"
              className="w-full h-64 sm:h-80 md:h-[380px] object-cover rounded-xl sm:rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="order-2 max-w-lg">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-primary">A Little Slice of</span>

              <span className="text-primary-dark block"> Happiness</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted leading-6 sm:leading-7">
              From birthdays to little treats, our cakes make every moment extra
              special. We believe every celebration deserves something sweet,
              beautiful, and made with love.
            </p>

            <p className="mt-4 text-sm sm:text-base text-muted leading-6 sm:leading-7">
              Handmade with care and the finest ingredients, every cake is baked
              fresh to bring a little happiness to your day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
