
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Brain, Database, Calculator, CheckCircle } from 'lucide-react';

interface SleepAssessmentProps {
  onBack: () => void;
}

const SleepAssessment = ({ onBack }: SleepAssessmentProps) => {
  const promptText = `Create a Typeform-style multi-step form for the **Pittsburgh Sleep Quality Index (PSQI)** on my website. It should:

* Use **Supabase** to store responses
* Automatically calculate the **PSQI score** using a GitHub-based calculator
* Show the final sleep score on the **end screen**
* UI should look clean and modern (Typeform-style), with 1 question per screen, soft shadows, rounded cards, and progress indicator

### 🟢 Welcome Page:

* **Title:** Sleep Quality Assessment (PSQI)
* **Description:** This short sleep survey helps measure your sleep quality over the past month. Please answer honestly. Your score will be shown at the end.

---

### 🔹 SECTION 1: Basic Sleep Patterns

1. What time have you usually gone to bed at night?
   * **Type:** Time picker
   * **Variable:** \`bedtime\`
   * **Required**

2. How long (in minutes) has it usually taken you to fall asleep each night?
   * **Type:** Number input
   * **Min:** 0, **Max:** 300
   * **Variable:** \`sleep_latency_minutes\`
   * **Required**

3. What time have you usually gotten up in the morning?
   * **Type:** Time picker
   * **Variable:** \`wake_time\`
   * **Required**

4. How many hours of actual sleep did you get at night?
   * **Type:** Decimal number
   * **Min:** 0.0, **Max:** 12.0
   * **Variable:** \`sleep_duration\`
   * **Required**

---

### 🔹 SECTION 2: Sleep Disturbances (Likert scale)

Show this instruction before Q5a–Q5j:
> "During the past month, how often have you had trouble sleeping due to the following reasons?"

Use this **4-option scale** for all below:
* Not during the past month (0)
* Less than once a week (1)
* Once or twice a week (2)
* Three or more times a week (3)

5a. Cannot get to sleep within 30 minutes → \`sleep_onset_trouble\`
5b. Wake up in the middle of the night or early morning → \`night_wakings\`
5c. Have to get up to use the bathroom → \`bathroom_trips\`
5d. Cannot breathe comfortably → \`breathing_problems\`
5e. Cough or snore loudly → \`cough_snore\`
5f. Feel too cold → \`too_cold\`
5g. Feel too hot → \`too_hot\`
5h. Have bad dreams → \`bad_dreams\`
5i. Have pain → \`pain\`

5j. Other reason(s) for trouble sleeping → \`other_problems\`
* If response is not "Not during the past month", show follow-up text field:
  > "Please describe the other reason(s)" → \`other_problems_description\`

---

### 🔹 SECTION 3: Sleep Medication and Daytime Function

6. How often have you taken medicine to help you sleep?
* Same 4-option scale
* Variable: \`sleep_medication\`

7. How often have you had trouble staying awake while driving, eating, or being social?
* Same 4-option scale
* Variable: \`daytime_sleepiness\`

8. How much of a problem has it been to keep up enthusiasm to get things done?
* Options:
  * No problem at all (0)
  * Only a very slight problem (1)
  * Somewhat of a problem (2)
  * A very big problem (3)
* Variable: \`enthusiasm_problem\`

---

### 🔹 SECTION 4: Subjective Sleep Quality

9. How would you rate your overall sleep quality during the past month?
* Options:
  * Very good (0)
  * Fairly good (1)
  * Fairly bad (2)
  * Very bad (3)
* Variable: \`sleep_quality_rating\`

---

### 🔹 SECTION 5: Partner Observations (Optional)

10. Do you have a bed partner or roommate?
* Options:
  * No bed partner or roommate
  * Partner/roommate in another room
  * Partner in same room, not same bed
  * Partner in same bed
* Variable: \`partner_status\`

If any option other than "No partner," show:
* 10a. Loud snoring → \`partner_snoring\`
* 10b. Long pauses between breaths while asleep → \`partner_breathing_pauses\`
* 10c. Legs twitching or jerking while you sleep → \`partner_leg_movements\`
* 10d. Episodes of disorientation or confusion → \`partner_confusion\`
* 10e. Other restlessness while you sleep → \`partner_other_restlessness\`
  * If not "Not during the past month," show:
    > "Please describe the restlessness" → \`partner_other_description\`

Use the same 4-option frequency scale.

---

### 🔚 End Screen

* Thank user for completing the form
* Show PSQI Score using GitHub calculator based on their answers
* Show message:
  > "Your PSQI Score is X. Scores over 5 suggest poor sleep quality. Consider consulting a sleep specialist if this continues."
* Optional: Provide a link or button to "Learn ways to improve your sleep"`;

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-8 text-gray-300 hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Sleep Quality Assessment
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create a professional PSQI (Pittsburgh Sleep Quality Index) assessment form for your website
          </p>
        </div>

        {/* AI Prompt Card */}
        <Card className="glass-card max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-3">
              <Brain className="text-primary" size={32} />
              AI Prompt for Lovable
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              Copy and paste this prompt into Lovable AI to automatically generate a complete PSQI sleep assessment form
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Features Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Database className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">Supabase Storage</h3>
                <p className="text-gray-400 text-sm">Automatically stores all responses</p>
              </div>
              <div className="text-center">
                <Calculator className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">Auto Scoring</h3>
                <p className="text-gray-400 text-sm">Calculates PSQI score instantly</p>
              </div>
              <div className="text-center">
                <CheckCircle className="text-primary mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">Typeform Style</h3>
                <p className="text-gray-400 text-sm">Clean, one question per screen</p>
              </div>
            </div>

            {/* Prompt Box */}
            <div className="bg-card/50 border border-white/10 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">🧠 Prompt for Lovable AI:</h3>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(promptText);
                    // You could add a toast notification here
                  }}
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-white"
                >
                  Copy Prompt
                </Button>
              </div>
              
              <div className="bg-background/80 rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="text-gray-300 text-sm whitespace-pre-wrap font-mono leading-relaxed">
{promptText}
                </pre>
              </div>
            </div>

            {/* Additional Options */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Additional Features Available:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <div>
                    <p className="text-white font-medium">Supabase Schema Generation</p>
                    <p className="text-gray-400 text-sm">Database tables and relationships</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1" size={16} />
                  <div>
                    <p className="text-white font-medium">GitHub PSQI Calculator</p>
                    <p className="text-gray-400 text-sm">Direct integration for scoring</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SleepAssessment;
