
import { Clock, Moon, Bell } from 'lucide-react';

const Market = () => {
  const problems = [
    {
      icon: Clock,
      title: "Sleep Trackers Only Track",
      description: "Wearables tell you what happened but can't improve tomorrow night's sleep. They're reactive, not proactive.",
      delay: "0s"
    },
    {
      icon: Moon,
      title: "Fragmented Solutions",
      description: "Smart mattresses, white noise apps, and sleep aids work in isolation. No unified optimization system.",
      delay: "0.2s"
    },
    {
      icon: Bell,
      title: "One-Size-Fits-All Advice",
      description: "Generic sleep hygiene tips ignore your unique physiology, schedule, and environmental factors.",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Traditional Sleep Solutions{' '}
            <span className="text-primary">Fail</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The sleep industry offers disconnected tools that measure problems but don't solve them
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: problem.delay }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <problem.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Market;
