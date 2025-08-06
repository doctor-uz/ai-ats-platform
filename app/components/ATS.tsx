import React from "react";

interface ATSProps {
  score: number; // ats_compatibility (0-10)
  issues: string[];
}

const ATS: React.FC<ATSProps> = ({ score, issues }) => {
  const percent = Math.round(score * 10);
  const gradientClass =
    percent > 69
      ? "from-green-100"
      : percent > 49
        ? "from-yellow-100"
        : "from-red-100";

  const iconSrc =
    percent > 69
      ? "/icons/ats-good.svg"
      : percent > 49
        ? "/icons/ats-warning.svg"
        : "/icons/ats-bad.svg";

  const subtitle =
    percent > 69
      ? "Great Job!"
      : percent > 49
        ? "Good Start"
        : "Needs Improvement";

  return (
    <div
      className={`bg-gradient-to-b ${gradientClass} to-white rounded-2xl shadow-md w-full p-6`}
    >
      <div className="flex items-center gap-4 mb-6">
        <img src={iconSrc} alt="ATS Score Icon" className="w-12 h-12" />
        <div>
          <h2 className="text-2xl font-bold">ATS Score - {percent}/100</h2>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{subtitle}</h3>
        <p className="text-gray-600 mb-4">
          This score shows how your resume is likely to perform in Applicant
          Tracking Systems.
        </p>
        <div className="space-y-3">
          {issues.map((issue, i) => (
            <div key={i} className="flex items-start gap-3">
              <img
                src="/icons/warning.svg"
                alt="Warning"
                className="w-5 h-5 mt-1"
              />
              <p className="text-amber-700">{issue}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic">
        Keep refining your resume to improve your chances of getting past ATS
        filters.
      </p>
    </div>
  );
};

export default ATS;
