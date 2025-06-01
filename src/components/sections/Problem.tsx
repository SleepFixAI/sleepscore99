const Problem = () => {
  const statistics = [
    {
      number: "1 in 3",
      label: "adults suffer from chronic sleep problems",
      delay: "0s"
    },
    {
      number: "48%",
      label: "of poor sleepers report declining mental health",
      delay: "0.2s"
    },
    {
      number: "70%",
      label: "wake up tired every morning",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgb(255 75 51 / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgb(255 75 51 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            The Sleep Crisis: A{' '}
            <span className="text-primary">$27.6 Billion</span>{' '}
            Problem
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Statistics Cards - 60% */}
          <div className="lg:col-span-3 grid gap-6">
            {statistics.map((stat, index) => (
              <div 
                key={index}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-5xl lg:text-6xl font-extrabold text-primary mb-4">
                  {stat.number}
                </div>
                <p className="text-xl text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Problem Explanation - 40% */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Sleep deprivation is destroying lives and productivity
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Poor sleep costs the US economy <span className="text-primary font-semibold">$411 billion annually</span> in lost productivity.
                </p>
                <p>
                  Sleep disorders increase the risk of heart disease, diabetes, depression, and premature death.
                </p>
                <p>
                  Yet most people have no idea how to systematically improve their sleep quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
