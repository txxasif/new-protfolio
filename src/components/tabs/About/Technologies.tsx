import { Heading } from "./Heading";
import { AnimatedSpan, Terminal } from "@/components/magicui/terminal";
import {
  JavaScriptIcon,
  MongoDbIcon,
  NodeJsIcon,
  PostGresIcon,
  ReactIcon,
  TypeScriptIcon,
} from "@/icons";
export const Technologies = () => {
  const technologies = [
    { Icon: JavaScriptIcon, name: "JavaScript", delay: 1000 },
    { Icon: TypeScriptIcon, name: "TypeScript", delay: 1500 },
    { Icon: ReactIcon, name: "React", delay: 2000 },
    { Icon: NodeJsIcon, name: "Node.js", delay: 2500 },
    { Icon: MongoDbIcon, name: "MongoDB", delay: 3000 },
    { Icon: PostGresIcon, name: "PostgreSQL", delay: 3500 },
  ];
  return (
    <div className="space-y-10 flex-1 p-6">
      <Heading title="Technologies" />
      <div className="flex">
        <Terminal>
          {technologies.map((item) => (
            <AnimatedSpan
              key={item.name}
              delay={item.delay}
              className="text-[#767676]"
            >
              <div className="flex items-center gap-2 ">
                <item.Icon className="size-4" />
                <div className="flex items-center mt-1 text-base">
                  {item.name}
                </div>
              </div>
            </AnimatedSpan>
          ))}
        </Terminal>
      </div>
    </div>
  );
};
