const Science = () => {
  const optimalConditions = [
    { label: "Temperature", value: "65-68°F", icon: "🌡️" },
    { label: "Humidity", value: "30-50%", icon: "💧" },
    { label: "Light", value: "<1 lux", icon: "💡" },
    { label: "Sound", value: "<30 dB", icon: "🔇" }
  ];

  const sleepFacts = [
    "Sleep quality affects 95% of growth hormone production",
    "Temperature regulation is crucial for REM sleep",
    "Light exposure impacts circadian rhythm within 15 minutes",
    "Air quality directly correlates with sleep depth"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The Science Behind{' '}
            <span className="text-primary">Better Sleep</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI optimizes your environment based on proven sleep research
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sleep Facts */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-8">
              Research-Backed Sleep Optimization
            </h3>
            <div className="space-y-6">
              {sleepFacts.map((fact, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Optimal Conditions */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-white mb-8">
              Optimal Sleep Environment
            </h3>
            <div className="glass-card p-8">
              <div className="grid grid-cols-2 gap-6">
                {optimalConditions.map((condition, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors"
                  >
                    <div className="text-3xl mb-2">{condition.icon}</div>
                    <div className="text-xl font-bold text-primary mb-1">
                      {condition.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {condition.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="mt-8 glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Live Environmental Monitoring
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sleep Quality Score</span>
                  <span className="text-primary font-bold">94/100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Environment Score</span>
                  <span className="text-green-400 font-bold">Optimal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Auto-adjustments</span>
                  <span className="text-primary font-bold">12 tonight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;
