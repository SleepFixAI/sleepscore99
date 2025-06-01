
const MarketOpportunity = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Market{' '}
            <span className="text-primary">Opportunity</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The sleep optimization market is experiencing unprecedented growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Market Growth */}
          <div className="glass-card p-8 text-center animate-fade-in">
            <div className="text-4xl font-extrabold text-primary mb-4">
              $27.6B → $69.88B
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Market Growth</h3>
            <p className="text-gray-300">
              Sleep tech market projected to grow 152% by 2030
            </p>
          </div>

          {/* Annual Growth */}
          <div className="glass-card p-8 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-extrabold text-primary mb-4">
              12%
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Annual Growth Rate</h3>
            <p className="text-gray-300">
              Consistent year-over-year market expansion
            </p>
          </div>

          {/* Target Market */}
          <div className="glass-card p-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-extrabold text-primary mb-4">
              70M
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Adults with Sleep Disorders</h3>
            <p className="text-gray-300">
              In the US alone, seeking better solutions
            </p>
          </div>
        </div>

        {/* Revenue Model */}
        <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Revenue Model
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary mb-4">B2C Subscription</h4>
              <div className="text-3xl font-bold text-white mb-4">$19.99/month</div>
              <p className="text-gray-300">
                Individual consumers seeking better sleep quality
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary mb-4">B2B Enterprise</h4>
              <div className="text-3xl font-bold text-white mb-4">$50-200/employee/year</div>
              <p className="text-gray-300">
                Corporate wellness programs and healthcare providers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
