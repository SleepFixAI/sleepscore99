import { useState } from 'react';

const CTA = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">Join the Waitlist</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be the first to know when SleepFix AI launches. Enter your email below and we'll notify you!
          </p>
          <form
            id="get-early-access"
            action="https://formspree.io/f/xwporpje"
            method="POST"
            className="max-w-md mx-auto mb-8 flex flex-col items-center gap-4"
            onSubmit={() => setSubmitted(true)}
          >
            <input
                type="email"
              id="email"
              name="email"
              placeholder="Your email address"
                required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            <button
                type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium glow-effect w-full"
              >
              Get early access
            </button>
          </form>
          <div
            className="confirmation text-green-500 text-lg font-semibold"
            id="confirmation"
            style={{ display: submitted ? 'block' : 'none' }}
          >
            Thank you! You'll be notified when we launch.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
