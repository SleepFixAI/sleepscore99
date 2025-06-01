import { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formspree.io/f/xqaqyajl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        e.currentTarget.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-background min-h-screen flex items-center justify-center">
      <div className="container max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-primary">Contact</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <form className="contact-form space-y-6" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            disabled={formStatus === 'sending'}
          >
            {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {formStatus === 'success' && (
            <p className="text-green-500 text-center">Message sent successfully!</p>
          )}
          {formStatus === 'error' && (
            <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact; 