import { Button } from '@/components/ui/button';
import Luna from '@/components/icons/Luna';

const Hero = () => {
  const handleDownload = () => {
    window.location.href = "https://github.com/SleepFixAI/first-release-apk-/releases/download/demo/SleepFixAI.apk";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with particles */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 particle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 particle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 particle" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-1/4 particle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/2 particle" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6">
              The World's First{' '}
              <span className="text-primary">Intelligent Sleep</span>{' '}
              Ecosystem
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AI that doesn't just track your sleep—it optimizes your entire environment 
              for perfect rest, every night.
            </p>

            {/* CTA */}
            <div className="mb-8">
              <Button 
                onClick={handleDownload}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium glow-effect"
              >
                Download Demo App
              </Button>
            </div>

            {/* Device Integration Logos */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>Integrates with:</span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-card rounded-full">Google Health</span>
                <span className="px-3 py-1 bg-card rounded-full">Fitbit</span>
                <span className="px-3 py-1 bg-card rounded-full">Alexa</span>
                <span className="px-3 py-1 bg-card rounded-full">AQI Monitor</span>
                <span className="px-3 py-1 bg-card rounded-full">Smart Bed</span>
                <span className="px-3 py-1 bg-card rounded-full">Philips Hue</span>
                <span className="px-3 py-1 bg-card rounded-full">Nest</span>
                <span className="px-3 py-1 bg-card rounded-full">OOLER</span>
              </div>
            </div>
          </div>

          {/* Right Content - Luna Icon */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/moon joyel png.png" 
                alt="Half Orange Luna Moon"
                className="w-32 h-32 object-contain luna-glow animate-pulse-glow"
              />
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" />
              <div className="absolute inset-4 rounded-full border border-primary/30 animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
