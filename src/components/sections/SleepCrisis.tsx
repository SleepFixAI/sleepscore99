import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, Zap, Brain, TrendingUp, Users, Heart, Clock } from 'lucide-react';

const stats = [
  { value: '$27.6B', label: 'Sleep Crisis Cost', icon: TrendingUp },
  { value: '1 in 3', label: 'Adults with Sleep Problems', icon: Users },
  { value: '48%', label: 'Mental Health Impact', icon: Heart },
  { value: '70%', label: 'Wake Up Tired', icon: Clock }
];

const problems = [
  {
    title: 'Sleep Trackers Only Track',
    description: 'Wearables tell you what happened but can\'t improve tomorrow night\'s sleep. They\'re reactive, not proactive.',
    icon: AlertTriangle
  },
  {
    title: 'Fragmented Solutions',
    description: 'Smart mattresses, white noise apps, and sleep aids work in isolation. No unified optimization system.',
    icon: AlertTriangle
  },
  {
    title: 'One-Size-Fits-All Advice',
    description: 'Generic sleep hygiene tips ignore your unique physiology, schedule, and environmental factors.',
    icon: AlertTriangle
  }
];

const solutions = [
  {
    title: 'Universal Device Integration',
    description: 'Connect Google Health, Fitbit, smart mattresses, Alexa, air quality monitors, and more into one intelligent ecosystem.',
    icon: Zap
  },
  {
    title: 'AI-Powered Analysis',
    description: 'Advanced algorithms analyze movement patterns, snoring detection, and environmental correlation to understand your sleep.',
    icon: Brain
  },
  {
    title: 'Automated Optimization',
    description: 'Dynamic adjustment of light, temperature, noise, and other factors before you even realize what\'s keeping you awake.',
    icon: Zap
  }
];

const devices = [
  'Google Health', 'Fitbit', 'Smart Mattress', 'Alexa',
  'Air Quality Monitor', 'Smart Thermostat', 'Philips Hue',
  'OOLER', 'Nest'
];

const SleepCrisis = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="sleep-crisis-card p-6 text-center hover-lift"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="sleep-crisis-stat mb-2">{stat.value}</h3>
              <p className="sleep-crisis-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sleep-crisis-card p-8 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Sleep Crisis: A $27.6 Billion Problem
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sleep deprivation is destroying lives and productivity. Poor sleep costs the US economy $411 billion annually in lost productivity.
            </p>
            <p className="text-lg text-muted-foreground">
              Sleep disorders increase the risk of heart disease, diabetes, depression, and premature death.
            </p>
          </motion.div>

          {/* Problems Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">
              Why Traditional Sleep Solutions Fail
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="sleep-crisis-card p-6 hover-lift"
                >
                  <problem.icon className="w-6 h-6 text-primary mb-4" />
                  <h4 className="text-xl font-semibold mb-3">{problem.title}</h4>
                  <p className="text-muted-foreground">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">
              Introducing SleepFix.ai: Intelligent Sleep Ecosystem
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              The first AI system that connects all your devices and automatically optimizes your environment for perfect sleep, every single night.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="sleep-crisis-card p-6 hover-lift"
                >
                  <solution.icon className="w-6 h-6 text-primary mb-4" />
                  <h4 className="text-xl font-semibold mb-3">{solution.title}</h4>
                  <p className="text-muted-foreground">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Devices Grid */}
          <div className="sleep-crisis-card p-8">
            <h3 className="text-2xl font-bold mb-6">Connected Devices</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {devices.map((device, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="sleep-crisis-device hover-lift"
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>{device}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepCrisis; 