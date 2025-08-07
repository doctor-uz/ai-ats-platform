import ScoreGauge from "~/components/ScoreGauge";
import ScoreBadge from "~/components/ScoreBadge";

const Category = ({ title, score }: { title: string; score: number }) => {
  const percent = Math.round(score * 10); // Convert 0-10 to 0-100
  const textColor =
    percent > 70
      ? "text-green-600"
      : percent > 49
        ? "text-yellow-600"
        : "text-red-600";

  return (
    <div className="resume-summary">
      <div className="category flex flex-row items-center justify-between px-6 py-4 bg-white rounded-2xl mb-4 shadow">
        <div className="flex flex-row items-center gap-4">
          <p className="text-2xl">{title}</p>
          <ScoreBadge score={percent} />
        </div>
        <p className="text-2xl">
          <span className={textColor}>{percent}</span>/100
        </p>
      </div>
    </div>
  );
};

const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <div className="flex flex-row items-center p-4 gap-8">
        <ScoreGauge score={Math.round(feedback.overall_rating * 10)} />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Your Resume Score</h2>
          <p className="text-sm text-gray-500">
            This score is calculated based on the variables listed below.
          </p>
        </div>
      </div>
      <Category title="Overall Fit" score={feedback.overall_rating} />
      <Category title="ATS Compatibility" score={feedback.ats_compatibility} />
      <Category title="Job Match" score={feedback.keyword_optimization} />
    </div>
  );
};

export default Summary;
