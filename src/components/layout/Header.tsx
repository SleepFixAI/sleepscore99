import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onSleepAssessmentClick: () => void;
}

const Header = ({ onSleepAssessmentClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Product', href: '#product' },
    { name: 'Research', href: '/research' },
    { name: 'Sleep Assessment', href: '#assessment', onClick: onSleepAssessmentClick },
    { name: 'Company', href: '/company' },
  ];

  const handleDownload = () => {
    window.location.href = "https://github.com/SleepFixAI/first-release-apk-/releases/download/demo/SleepFixAI.apk";
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/moon joyel png.png" 
              alt="SleepFix.ai Logo"
              className="w-8 h-8 object-contain luna-glow animate-pulse-glow"
            />
            <span className="text-xl font-bold text-foreground">SleepFix.ai</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.name === 'Research' || item.name === 'Company' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </Link>
              ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={item.onClick ? (e) => { e.preventDefault(); item.onClick(); } : undefined}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </a>
              )
            ))}
            <ThemeToggle />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium glow-effect"
            >
              Download Demo App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border">
            <div className="flex flex-col space-y-4 pt-6">
              {navigation.map((item) => (
                item.name === 'Research' || item.name === 'Company' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground/80 hover:text-foreground transition-colors duration-200 py-2 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                    setIsMenuOpen(false);
                  }}
                    className="text-foreground/80 hover:text-foreground transition-colors duration-200 py-2 cursor-pointer"
                >
                  {item.name}
                </a>
                )
              ))}
              <div className="flex items-center justify-between">
                <ThemeToggle />
                <Button 
                  onClick={handleDownload}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                >
                  Download Demo App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
