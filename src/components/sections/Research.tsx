import { useState } from 'react';

const Research = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Research' },
    { id: 'cardiovascular', name: 'Cardiovascular' },
    { id: 'mental-health', name: 'Mental Health' },
    { id: 'metabolic', name: 'Metabolic' },
    { id: 'cognitive', name: 'Cognitive' },
    { id: 'disorders', name: 'Sleep Disorders' },
  ];

  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Sleep Research</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Explore scientific research on the consequences of sleep deprivation, related diseases, and disorders
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cardiovascular Health Section */}
          <div className={`space-y-8 ${activeCategory === 'all' || activeCategory === 'cardiovascular' ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold mb-6">Cardiovascular Health</h2>
            <div className="space-y-6">
              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Cardiovascular Health</div>
                <h3 className="text-xl font-semibold mb-3">Sleep Deprivation and Increased Risk of Cardiovascular Disease</h3>
                <p className="text-muted-foreground mb-4">A 10-year study of 4,000 adults found that sleeping less than 6 hours per night increased the risk of coronary heart disease by 48%. Shift workers with disrupted sleep patterns developed hypertension at 2.5 times the rate of day workers.</p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2845795/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>

              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Cardiovascular Health</div>
                <h3 className="text-xl font-semibold mb-3">Effects of Sleep Deprivation on Endothelial Function in Adults</h3>
                <p className="text-muted-foreground mb-4">Moderate sleep restriction (~2–3 hours less per night) impairs endothelial function across the vascular system, including coronary arteries. A single night of less than 4 hours of sleep can reduce coronary artery function, elevating the risk for acute myocardial ischemia.</p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8050211/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>

              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Cardiovascular Health</div>
                <h3 className="text-xl font-semibold mb-3">The Effect of Sleep Deprivation on Coronary Heart Disease</h3>
                <p className="text-muted-foreground mb-4">Sleep deprivation is associated with increased morbidity and mortality in coronary heart disease patients, potentially due to autonomic dysfunction, hypertension, arrhythmia, hormonal dysregulation, oxidative stress, and inflammation.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/28065222/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>
            </div>
          </div>

          {/* Mental Health Section */}
          <div className={`space-y-8 ${activeCategory === 'all' || activeCategory === 'mental-health' ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold mb-6">Mental Health</h2>
            <div className="space-y-6">
              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Mental Health</div>
                <h3 className="text-xl font-semibold mb-3">Sleep Deprivation and Major Depressive Disorder</h3>
                <p className="text-muted-foreground mb-4">A longitudinal study of 10,000 individuals found that insomnia preceded the development of depression in 40% of cases. A case study highlighted a 28-year-old woman whose chronic insomnia led to major depression within 8 months, with symptoms resolving after cognitive behavioral therapy.</p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4318605/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>

              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Mental Health</div>
                <h3 className="text-xl font-semibold mb-3">Sleep Deprivation as a Trigger for Bipolar Disorder Episodes</h3>
                <p className="text-muted-foreground mb-4">Research indicates that sleep disruption precedes 65% of manic episodes in bipolar disorder patients. One case involved a 32-year-old software engineer whose 48-hour coding sessions triggered three consecutive manic episodes, stabilized only after implementing strict sleep regulation.</p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5579327/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>

              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Mental Health</div>
                <h3 className="text-xl font-semibold mb-3">Why Getting a Good Night's Sleep is Crucial if You Have High Blood Pressure</h3>
                <p className="text-muted-foreground mb-4">A study revealed that short sleep combined with hypertension affects cognitive performance and presents a higher risk of developing dementia, emphasizing the importance of consistent, quality sleep.</p>
                <a href="https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/expert-answers/sleep-deprivation/faq-20057959" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Article →</a>
              </article>
            </div>
          </div>

          {/* Metabolic Health Section */}
          <div className={`space-y-8 ${activeCategory === 'all' || activeCategory === 'metabolic' ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold mb-6">Metabolic Health</h2>
            <div className="space-y-6">
              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Metabolic Health</div>
                <h3 className="text-xl font-semibold mb-3">Sleep Deprivation's Role in Type 2 Diabetes Development</h3>
                <p className="text-muted-foreground mb-4">Chronic sleep restriction (5 hours/night for 1 week) reduces insulin sensitivity by 25% and impairs glucose tolerance. A case study involved a 42-year-old executive who developed prediabetes after 3 years of sleep restriction, reversing the condition after implementing proper sleep hygiene.</p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10693913/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>

              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Metabolic Health</div>
                <h3 className="text-xl font-semibold mb-3">Mechanisms of Sleep Deprivation-Induced Hepatic Steatosis and Insulin Resistance in Mice</h3>
                <p className="text-muted-foreground mb-4">A single 6-hour sleep deprivation in mice induced glucose intolerance and increased hepatic glucose production, leading to hepatic steatosis without weight gain, mediated by increased lipid oxidation in the liver.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/29989853/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>

              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Metabolic Health</div>
                <h3 className="text-xl font-semibold mb-3">Metabolic Effects of Sleep Disruption, Links to Obesity and Diabetes</h3>
                <p className="text-muted-foreground mb-4">Sleep disruption has detrimental effects on metabolic health, decreasing insulin sensitivity and glucose tolerance, and promoting weight gain through increased food intake and decreased physical activity.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/24937041/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>
            </div>
          </div>

          {/* Cognitive Function Section */}
          <div className={`space-y-8 ${activeCategory === 'all' || activeCategory === 'cognitive' ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold mb-6">Cognitive Function</h2>
            <div className="space-y-6">
              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Cognitive Function</div>
                <h3 className="text-xl font-semibold mb-3">Chronic Sleep Deprivation and Cognitive Impairment</h3>
                <p className="text-muted-foreground mb-4">Chronic sleep deprivation (less than 6 hours/night for 14 days) produces cognitive performance deficits equivalent to 48 hours of total sleep deprivation. A medical resident made critical medication errors after working 24-hour shifts, illustrating how sleep deprivation mirrors legal alcohol intoxication levels in performance degradation.</p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10155483/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>

              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Cognitive Function</div>
                <h3 className="text-xl font-semibold mb-3">The Effect of Total Sleep Deprivation on Cognitive Functions in Normal Adult Male Subjects</h3>
                <p className="text-muted-foreground mb-4">A study of 18 healthy males deprived of sleep for 24 hours found decreases in cognitive functions such as motor skills, speech, memory, and complex verbal arithmetic, particularly associated with the right anterior hemisphere.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/11699337/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>

              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Cognitive Function</div>
                <h3 className="text-xl font-semibold mb-3">Sleep Deprivation Impairs Cognitive Performance and Alters Brain Function</h3>
                <p className="text-muted-foreground mb-4">A study published in Nature Scientific Reports demonstrates that 24 hours of sleep deprivation leads to significant impairments in cognitive performance, accompanied by altered cerebral blood flow and hemodynamic responses in cortical regions.</p>
                <a href="https://www.nature.com/articles/s41598-021-00188-8" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>
            </div>
          </div>

          {/* Sleep Disorders Section */}
          <div className={`space-y-8 ${activeCategory === 'all' || activeCategory === 'disorders' ? 'block' : 'hidden'}`}>
            <h2 className="text-2xl font-semibold mb-6">Sleep Disorders</h2>
            <div className="space-y-6">
              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Sleep Disorders</div>
                <h3 className="text-xl font-semibold mb-3">Sleep and Mental Disorders: A Meta-Analysis of Polysomnographic Research</h3>
                <p className="text-muted-foreground mb-4">This comprehensive meta-analysis examines polysomnographic studies across various mental disorders, revealing that sleep continuity disturbances are common across multiple psychiatric conditions. The study highlights the role of REM sleep alterations in psychiatric comorbidities.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/27416139/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>

              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Sleep Disorders</div>
                <h3 className="text-xl font-semibold mb-3">The Prevalence of Sleep Loss and Sleep Disorders in Young and Old Adults</h3>
                <p className="text-muted-foreground mb-4">This review discusses how sleep patterns and disorders vary across age groups, noting that nearly 50–60% of the elderly population suffer from sleep disorders such as sleep apnea and restless legs syndrome. It also explores the link between chronic sleep deprivation and neurodegenerative diseases like Alzheimer's and Parkinson's.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/36911264/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>

              <article className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="text-sm text-primary mb-2">Sleep Disorders</div>
                <h3 className="text-xl font-semibold mb-3">Sleep Disorders</h3>
                <p className="text-muted-foreground mb-4">This article provides an overview of six major sleep disorders, including insomnia, circadian rhythm disorders, sleep-disordered breathing, hypersomnia/narcolepsy, parasomnias, and restless legs syndrome. It discusses diagnostic features and management strategies, emphasizing the importance of recognizing and treating these conditions in clinical practice.</p>
                <a href="https://www.ncbi.nlm.nih.gov/books/NBK560720/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read Full Paper →</a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research; 