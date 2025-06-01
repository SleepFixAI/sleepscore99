
import { Network, Brain, Settings } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: Network,
      title: "Universal Device Integration",
      description: "Connect Google Health, Fitbit, smart mattresses, Alexa, air quality monitors, and more into one intelligent ecosystem.",
      delay: "0s"
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze movement patterns, snoring detection, and environmental correlation to understand your sleep.",
      delay: "0.2s"
    },
    {
      icon: Settings,
      title: "Automated Optimization",
      description: "Dynamic adjustment of light, temperature, noise, and other factors before you even realize what's keeping you awake.",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Introducing{' '}
            <span className="text-primary">SleepFix.ai</span>:{' '}
            Intelligent Sleep Ecosystem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            The first AI system that connects all your devices and automatically optimizes 
            your environment for perfect sleep, every single night.
          </p>

          {/* Device Integration Mockup */}
          <div className="glass-card p-8 mb-16 inline-block">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-300">Connected Devices</span>
              </div>
              {['Google Health', 'Fitbit', 'Smart Mattress', 'Alexa', 'Air Quality Monitor', 'Smart Thermostat', 'Philips Hue', 'OOLER', 'Nest'].map((device, index) => (
                <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full">
                  {device}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: feature.delay }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
