import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "./Accordion";

const Details = ({ feedback }: { feedback: Feedback }) => {
  const formatTips = (tipsArray: string[], type: "good" | "improve") =>
    tipsArray.map((tip) => ({
      type,
      tip,
    }));

  return (
    <div className="flex flex-col gap-4 w-full">
      <Accordion>
        <AccordionItem id="strengths">
          <AccordionHeader itemId="strengths">
            <span className="text-2xl font-semibold">Strengths</span>
          </AccordionHeader>
          <AccordionContent itemId="strengths">
            <div className="flex flex-col gap-2">
              {feedback.strengths.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img
                    src="/icons/check.svg"
                    alt="check"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-green-700">{s}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="weaknesses">
          <AccordionHeader itemId="weaknesses">
            <span className="text-2xl font-semibold">Weaknesses</span>
          </AccordionHeader>
          <AccordionContent itemId="weaknesses">
            <div className="flex flex-col gap-2">
              {feedback.weaknesses.map((w, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img
                    src="/icons/warning.svg"
                    alt="warn"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-amber-700">{w}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="missing">
          <AccordionHeader itemId="missing">
            <span className="text-2xl font-semibold">Missing Requirements</span>
          </AccordionHeader>
          <AccordionContent itemId="missing">
            <div className="flex flex-col gap-2">
              {feedback.missing_requirements.map((m, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img
                    src="/icons/warning.svg"
                    alt="warn"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-amber-700">{m}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="recommendations">
          <AccordionHeader itemId="recommendations">
            <span className="text-2xl font-semibold">Recommendations</span>
          </AccordionHeader>
          <AccordionContent itemId="recommendations">
            <div className="flex flex-col gap-2">
              {feedback.recommendations.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img
                    src="/icons/check.svg"
                    alt="check"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-green-700">{r}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="suggested">
          <AccordionHeader itemId="suggested">
            <span className="text-2xl font-semibold">
              Suggested Improvements
            </span>
          </AccordionHeader>
          <AccordionContent itemId="suggested">
            <div className="flex flex-col gap-2">
              {feedback.suggested_improvements.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img
                    src="/icons/check.svg"
                    alt="check"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-green-700">{s}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="jobmatch">
          <AccordionHeader itemId="jobmatch">
            <span className="text-2xl font-semibold">Job Match Analysis</span>
          </AccordionHeader>
          <AccordionContent itemId="jobmatch">
            <div className="flex flex-col gap-2">
              <p className="text-blue-700">{feedback.job_match_analysis}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;
