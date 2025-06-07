import React, { useState } from 'react';
import { ChevronRight, Moon, Clock, Bed, AlertCircle, CheckCircle } from 'lucide-react';

const SleepAssessmentTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);

  const questions = [
    {
      id: 'q1',
      text: 'During the past month, when have you usually gone to bed at night?',
      type: 'time',
      component: 0
    },
    {
      id: 'q2', 
      text: 'During the past month, how long (in minutes) has it usually taken you to fall asleep each night?',
      type: 'number',
      component: 1
    },
    {
      id: 'q3',
      text: 'During the past month, when have you usually gotten up in the morning?',
      type: 'time',
      component: 2
    },
    {
      id: 'q4',
      text: 'During the past month, how many hours of actual sleep did you get at night?',
      type: 'number',
      component: 2
    },
    {
      id: 'q5a',
      text: 'Cannot get to sleep within 30 minutes',
      type: 'frequency',
      component: 3
    },
    {
      id: 'q5b', 
      text: 'Wake up in the middle of the night or early morning',
      type: 'frequency',
      component: 3
    },
    {
      id: 'q5c',
      text: 'Have to get up to use the bathroom',
      type: 'frequency',
      component: 3
    },
    {
      id: 'q5d',
      text: 'Cannot breathe comfortably',
      type: 'frequency',
      component: 3
    },
    {
      id: 'q5e',
      text: 'Cough or snore loudly',
      type: 'frequency',
      component: 3
    },
    {
      id: 'q5f',
      text: 'Feel too cold',
      type: 'frequency',
      component: 3
    },
    {
      id: 'q5g',
      text: 'Feel too hot',
      type: 'frequency',
      component: 3
    },
    {
      id: 'q5h',
      text: 'Had bad dreams',
      type: 'frequency',
      component: 3
    },
    {
      id: 'q5i',
      text: 'Have pain',
      type: 'frequency',
      component: 3
    },
    {
      id: 'q6',
      text: 'During the past month, how would you rate your sleep quality overall?',
      type: 'quality',
      component: 0,
      options: [
        { value: 0, label: 'Very good' },
        { value: 1, label: 'Fairly good' },
        { value: 2, label: 'Fairly bad' },
        { value: 3, label: 'Very bad' }
      ]
    },
    {
      id: 'q7',
      text: 'During the past month, how often have you taken medicine to help you sleep?',
      type: 'frequency',
      component: 4
    },
    {
      id: 'q8',
      text: 'During the past month, how often have you had trouble staying awake while driving, eating meals, or engaging in social activity?',
      type: 'frequency',
      component: 5
    },
    {
      id: 'q9',
      text: 'During the past month, how much of a problem has it been for you to keep up enthusiasm to get things done?',
      type: 'problem',
      component: 5,
      options: [
        { value: 0, label: 'No problem at all' },
        { value: 1, label: 'Only a very slight problem' },
        { value: 2, label: 'Somewhat of a problem' },
        { value: 3, label: 'A very big problem' }
      ]
    }
  ];

  const frequencyOptions = [
    { value: 0, label: 'Not during the past month' },
    { value: 1, label: 'Less than once a week' },
    { value: 2, label: 'Once or twice a week' },
    { value: 3, label: 'Three or more times a week' }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculatePSQIScore = () => {
    // Component 1: Subjective sleep quality (q6)
    const c1 = answers.q6 || 0;

    // Component 2: Sleep latency (q2 + q5a)
    const sleepLatency = parseInt(answers.q2) || 0;
    let latencyScore = 0;
    if (sleepLatency <= 15) latencyScore = 0;
    else if (sleepLatency <= 30) latencyScore = 1;
    else if (sleepLatency <= 60) latencyScore = 2;
    else latencyScore = 3;
    const c2 = Math.min(3, latencyScore + (answers.q5a || 0));

    // Component 3: Sleep duration (q4)
    const sleepHours = parseFloat(answers.q4) || 0;
    let c3 = 0;
    if (sleepHours > 7) c3 = 0;
    else if (sleepHours >= 6) c3 = 1;
    else if (sleepHours >= 5) c3 = 2;
    else c3 = 3;

    // Component 4: Habitual sleep efficiency
    const bedTime = answers.q1 || '';
    const wakeTime = answers.q3 || '';
    // Simplified calculation for demo - in real implementation, calculate time in bed vs sleep time
    const c4 = sleepHours >= 7 ? 0 : sleepHours >= 6 ? 1 : sleepHours >= 5 ? 2 : 3;

    // Component 5: Sleep disturbances (sum of q5b-q5i)
    const disturbances = ['q5b', 'q5c', 'q5d', 'q5e', 'q5f', 'q5g', 'q5h', 'q5i']
      .reduce((sum, q) => sum + (answers[q] || 0), 0);
    let c5 = 0;
    if (disturbances === 0) c5 = 0;
    else if (disturbances <= 9) c5 = 1;
    else if (disturbances <= 18) c5 = 2;
    else c5 = 3;

    // Component 6: Use of sleeping medication (q7)
    const c6 = answers.q7 || 0;

    // Component 7: Daytime dysfunction (q8 + q9)
    const c7 = Math.min(3, (answers.q8 || 0) + (answers.q9 || 0));

    const totalScore = c1 + c2 + c3 + c4 + c5 + c6 + c7;
    return { totalScore, components: [c1, c2, c3, c4, c5, c6, c7] };
  };

  const getScoreInterpretation = (score) => {
    if (score <= 5) {
      return {
        level: 'Good Sleep Quality',
        color: 'text-green-600',
        bgColor: 'bg-green-50 border-green-200',
        icon: CheckCircle,
        message: 'Your sleep quality appears to be good! Keep maintaining healthy sleep habits.',
        severity: 'low'
      };
    } else if (score <= 10) {
      return {
        level: 'Mild Sleep Issues',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50 border-yellow-200',
        icon: AlertCircle,
        message: 'You may be experiencing some sleep difficulties. Consider improving your sleep hygiene.',
        severity: 'medium'
      };
    } else {
      return {
        level: 'Significant Sleep Problems',
        color: 'text-red-600',
        bgColor: 'bg-red-50 border-red-200',
        icon: AlertCircle,
        message: 'Your results suggest significant sleep problems. We recommend consulting with a healthcare provider.',
        severity: 'high'
      };
    }
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const { totalScore } = calculatePSQIScore();
      const interpretation = getScoreInterpretation(totalScore);
      if (interpretation.severity === 'medium' || interpretation.severity === 'high') {
        setShowEmailForm(true);
      }
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Here you would send the email to your backend
    console.log('Email submitted:', email);
    alert('Thank you! We\'ll notify you when SleepFix is ready to help improve your sleep.');
  };

  const renderQuestion = (question) => {
    const currentAnswer = answers[question.id];

    switch (question.type) {
      case 'time':
        return (
          <input
            type="time"
            value={currentAnswer || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4b33] focus:border-transparent text-base"
          />
        );

      case 'number':
        return (
          <input
            type="number"
            value={currentAnswer || ''}
            onChange={(e) => handleAnswer(question.id, parseInt(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4b33] focus:border-transparent text-base"
            placeholder="Enter number"
          />
        );

      case 'frequency':
        return (
          <div className="space-y-3">
            {frequencyOptions.map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={currentAnswer === option.value}
                  onChange={(e) => handleAnswer(question.id, parseInt(e.target.value))}
                  className="w-4 h-4 text-[#ff4b33] mt-0.5 flex-shrink-0"
                />
                <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'quality':
      case 'problem':
        return (
          <div className="space-y-3">
            {question.options.map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={currentAnswer === option.value}
                  onChange={(e) => handleAnswer(question.id, parseInt(e.target.value))}
                  className="w-4 h-4 text-[#ff4b33] mt-0.5 flex-shrink-0"
                />
                <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{option.label}</span>
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  if (showResults) {
    const { totalScore } = calculatePSQIScore();
    const interpretation = getScoreInterpretation(totalScore);
    const IconComponent = interpretation.icon;

    return (
      <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Moon className="w-8 h-8 text-[#ff4b33]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Your Sleep Quality Score</h2>
            </div>

            <div className={`p-4 sm:p-6 rounded-lg border-2 ${interpretation.bgColor} mb-6`}>
              <div className="flex items-center justify-center mb-4">
                <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${interpretation.color} mr-3`} />
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-800">{totalScore}</div>
                  <div className="text-xs sm:text-sm text-gray-600">out of 21</div>
                </div>
              </div>
              <div className={`text-base sm:text-lg font-semibold ${interpretation.color} text-center mb-2`}>
                {interpretation.level}
              </div>
              <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">{interpretation.message}</p>
            </div>

            {showEmailForm && (
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 sm:p-6 rounded-lg border border-orange-200 mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                  🚀 Get Early Access to SleepFix
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  Your results indicate you could benefit from personalized sleep improvement. 
                  Join our waitlist for early access to SleepFix - your personalized sleep optimization platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4b33] focus:border-transparent text-base"
                  />
                  <button
                    onClick={handleEmailSubmit}
                    className="px-6 py-3 bg-[#ff4b33] text-white rounded-lg hover:bg-[#e63e29] transition-colors font-medium text-base whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            )}

            <div className="text-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-base"
              >
                Take Assessment Again
              </button>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
                <strong>Disclaimer:</strong> This assessment is a screening tool, not a diagnostic instrument. 
                For persistent sleep problems, please consult with a healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Moon className="w-8 h-8 text-[#ff4b33]" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Sleep Quality Assessment</h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Discover your sleep quality with this scientifically validated assessment</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#ff4b33] h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
              {currentQuestion.text}
            </h2>
            {renderQuestion(currentQuestion)}
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="order-2 sm:order-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={!answers[currentQuestion.id] && answers[currentQuestion.id] !== 0}
              className="order-1 sm:order-2 px-6 py-3 bg-[#ff4b33] text-white rounded-lg hover:bg-[#e63e29] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-base font-medium"
            >
              {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepAssessmentTool;
