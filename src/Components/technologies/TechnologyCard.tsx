const TechnologyCard = ({
  tech,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="border rounded-xl p-5 shadow-sm bg-white flex flex-col justify-between">
      
      <div className="flex justify-between items-start">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-8 h-8"
        />

        <span className="text-xs bg-gray-100 py-1 px-2 rounded-full">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold">
        {tech.name}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {tech.description}
      </p>

      <div className="flex gap-2 items-center text-xs text-gray-600 mt-3">
        
        <span className="px-2 py-1 bg-gray-100 rounded-full">
          {tech.category}
        </span>

        <span className="px-2 py-1 bg-gray-100 rounded-full">
          {tech.difficulty}
        </span>

        <span className="flex items-center gap-1">
          <MdOutlineStar className="text-yellow-500" />
          {tech.rating}
        </span>

      </div>

      <button
        onClick={() => onAdd(tech)}
        //disabled={isAdded}
        className={`py-2 mt-4 rounded-lg font-medium ${
          isAdded
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;