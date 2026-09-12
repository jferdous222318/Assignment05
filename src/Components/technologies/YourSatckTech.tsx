
import { MdClose } from "react-icons/md";
import type { Technology } from "../../Types/types";
interface YourStackTechProps{
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}
const YourStackTech = ({ stack, onRemove, onRemoveAll }: YourStackTechProps) => {
  return (
    <div className="border rounded-2xl p-5 w-full max-w-xs h-fit sticky top-24">
      <h3 className="text-lg font-bold">Your Stack</h3>

      {stack.length === 0 ? (
        <>
          <p className="text-sm text-gray-400 mt-1">
            No technologies selected yet.
          </p>
          <div className="border border-dashed rounded-xl mt-4 py-10 text-center text-sm text-gray-300">
            Your stack is empty.
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-400 mt-1">
            {stack.length} Technology Selected
          </p>

          <div className="flex flex-col gap-3 mt-4">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between border rounded-xl p-3"
              >
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                  <div>
                    <p className="text-sm font-semibold">{tech.name}</p>
                    <p className="text-xs text-gray-400">{tech.category}</p>
                  </div>
                </div>
                <button onClick={() => onRemove(tech.id)}>
                  <MdClose className="text-gray-400 hover:text-gray-600" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full mt-5 py-2 rounded-lg border border-red-400 text-red-500 font-medium hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStackTech;