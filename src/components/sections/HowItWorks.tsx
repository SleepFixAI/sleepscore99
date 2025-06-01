import Luna from '@/components/icons/Luna';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Devices",
      description: "Link your existing sleep trackers, smart home devices, and health apps to SleepFix.ai",
      icon: "connect"
    },
    {
      number: "02", 
      title: "AI Analysis",
      description: "Our AI analyzes your sleep patterns, environment data, and lifestyle factors",
      icon: "analysis"
    },
    {
      number: "03",
      title: "Environment Control",
      description: "Automated adjustments to temperature, lighting, sound, and air quality",
      icon: "control"
    },
    {
      number: "04",
      title: "Better Sleep",
      description: "Wake up refreshed with continuously optimized sleep quality",
      icon: "sleep"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How{' '}
            <span className="text-primary">SleepFix.ai</span>{' '}
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four simple steps to transform your sleep experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step number circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg glow-effect relative z-10">
                    {step.number}
                  </div>
                  {/* Connection line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden w-0.5 h-8 bg-primary/50 mx-auto mt-4" />
                  )}
                  {/* Connection dots for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8">
                      <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
