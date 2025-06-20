import React from "react";

const QUESTION_SETS = {
  governance: [
    {
      title: "1. AI Governance",
      questions: [
        {
          q: "Does your organization have a formal AI governance structure?",
          options: ["Yes", "Partially", "No"],
        },
        {
          q: "Are AI-related roles and responsibilities clearly defined?",
          options: ["Yes", "Partially", "No"],
        },
      ],
    },
  ],
  risk: [
    {
      title: "2. Risk Management",
      questions: [
        {
          q: "Does your organization conduct AI risk assessments?",
          options: ["Yes, for all AI systems", "Only for some systems", "No"],
        },
        {
          q: "Is there a process for ongoing monitoring of AI systems?",
          options: ["Yes", "Partially", "No"],
        },
      ],
    },
  ],
  compliance: [
    {
      title: "3. Compliance",
      questions: [
        {
          q: "Is your organization familiar with AI regulations applicable to your industry?",
          options: ["Yes, very familiar", "Somewhat familiar", "Not familiar"],
        },
        {
          q: "Do you maintain documentation of AI systems for compliance purposes?",
          options: [
            "Yes, comprehensive",
            "Partial documentation",
            "No documentation",
          ],
        },
      ],
    },
  ],
  technical: [
    {
      title: "4. Technical Capabilities",
      questions: [
        {
          q: "Does your organization have the technical expertise to evaluate AI systems?",
          options: ["Yes", "Limited expertise", "No"],
        },
        {
          q: "Are there processes in place to test AI systems for bias and fairness?",
          options: ["Yes", "Limited testing", "No"],
        },
      ],
    },
  ],
};

const Enterprise = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Enterprise AI Readiness</h1>

      <div className="bg-white p-6 rounded-xl shadow border">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">AI Readiness Assessment</h2>
          <p className="text-gray-600">
            Complete the questionnaire below to assess your organization's readiness.
          </p>
          <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg mt-3 text-sm border border-blue-200">
            ℹ️ This assessment will help identify areas for AI governance and compliance.
          </div>
        </div>

        {/* Render All Sections */}
        {Object.values(QUESTION_SETS).map((sectionArray, index) =>
          sectionArray.map((section, idx) => (
            <div key={`${index}-${idx}`} className="mb-8">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              {section.questions.map((q, qIdx) => (
                <div key={qIdx} className="mb-4">
                  <p className="mb-2">{q.q}</p>
                  <div className="flex flex-col gap-1">
                    {q.options.map((option, optIdx) => (
                      <label key={optIdx} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`${section.title}-${qIdx}`}
                          className="accent-blue-600"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Enterprise;
