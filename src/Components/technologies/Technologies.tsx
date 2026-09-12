import { use } from "react";

import type { Technology } from "../../Types/types";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
  addedId: string[];
  onAdd: (tech: Technology) => void;
}

const Technologies = ({
  technologiesPromise,
  addedId,
  onAdd,
}: TechnologiesProps) => {
  const technology = use(technologiesPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {technology.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          isAdded={addedId.includes(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default Technologies;