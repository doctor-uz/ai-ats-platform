import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "./Accordion";

const Details = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Accordion>
        <AccordionItem id="strengths">
          <AccordionHeader itemId="strengths">
            <span className="text-2xl font-semibold">Strengths</span>
          </AccordionHeader>
          <AccordionContent itemId="strengths">
            <div className="flex flex-col gap-2">
              {feedback?.strengths?.map?.((s, i) => (
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
              {feedback?.weaknesses?.map((w, i) => (
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

        <AccordionItem id="specific_improvements">
          <AccordionHeader itemId="specific_improvements">
            <span className="text-2xl font-semibold">
              Specific Improvements
            </span>
          </AccordionHeader>
          <AccordionContent itemId="specific_improvements">
            <div className="flex flex-col gap-2">
              {feedback?.specific_improvements?.map((impr, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img
                    src="/icons/check.svg"
                    alt="improvement"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-blue-700">{impr}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="techskills">
          <AccordionHeader itemId="techskills">
            <span className="text-2xl font-semibold">
              Technical Skills Feedback
            </span>
          </AccordionHeader>
          <AccordionContent itemId="techskills">
            <p className="text-gray-700">
              {feedback?.technical_skills_feedback}
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="experience">
          <AccordionHeader itemId="experience">
            <span className="text-2xl font-semibold">Experience Feedback</span>
          </AccordionHeader>
          <AccordionContent itemId="experience">
            <p className="text-gray-700">{feedback?.experience_feedback}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="formatting">
          <AccordionHeader itemId="formatting">
            <span className="text-2xl font-semibold">Formatting Feedback</span>
          </AccordionHeader>
          <AccordionContent itemId="formatting">
            <p className="text-gray-700">{feedback?.formatting_feedback}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="jobmatch">
          <AccordionHeader itemId="jobmatch">
            <span className="text-2xl font-semibold">Job Match Feedback</span>
          </AccordionHeader>
          <AccordionContent itemId="jobmatch">
            <p className="text-gray-700">{feedback?.job_match_feedback}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;
