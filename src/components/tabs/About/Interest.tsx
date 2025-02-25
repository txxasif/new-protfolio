import { AnimatedSpan, Terminal } from "@/components/magicui/terminal";
import { Heading } from "./Heading";

const terminalSteps = [
  { text: "✔ Web Design.", delay: 1000 },
  {
    text: "✔ Learning New Things",
    delay: 1500,
  },
  {
    text: "✔ Playing Video Games.",
    delay: 2000,
  },
  {
    text: "✔ Traveling.",
    delay: 2500,
  },
  {
    text: "✔ Watching Football.",
    delay: 3000,
  },
];

export function Interests() {
  return (
    <div className="space-y-10 flex-1 p-6">
      <Heading title="Interests" />
      <div className="flex">
        <Terminal>
          {terminalSteps.map((step, index) => (
            <AnimatedSpan
              key={index}
              delay={step.delay}
              className="text-[#767676] text-base"
            >
              <span dangerouslySetInnerHTML={{ __html: step.text }} />
            </AnimatedSpan>
          ))}
        </Terminal>
      </div>
    </div>
  );
}
