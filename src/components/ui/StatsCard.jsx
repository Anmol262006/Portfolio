import React from "react";

const StatsCard = ({
  Title,
  titleContent,
  numberprojects,
  technumbers,
  techorSkills,
  icon,
  iconTech,
  iconProjects,
  deployed,
  deployedCount,
}) => {
  return (
    <div className="py-10 font-[Yuyu]">
      <div
        className="border-2 border-violet-800 rounded-2xl px-3 py-7 w-fit bg-violet-200
                   flex flex-col lg:flex-row
                   items-center gap-6 mx-auto"
        style={{
          boxShadow: "0 0 10px green, 0 0 20px blue",
        }}
      >
        {/* Icon */}

        {icon && (
          <span
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-violet-500"
            style={{
              boxShadow: "0 0 2px purple, 0 0 4px purple, 0 0 8px blue",
            }}
          >
            {icon}
          </span>
        )}

        {Title && (
          <>
            {" "}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-purple-900">
                {Title}
              </h2>

              <p className="mt-2 text-black font-bold">{titleContent}</p>
            </div>
          </>
        )}

        {/* Stats */}
        <div className="flex justify-around lg:justify-between gap-5 w-full lg:w-auto">
          {iconProjects && (
            <div className="text-center flex flex-col gap-4">
              <span className="border-2 border-black px-3 py-1 rounded-2xl">
                {iconProjects}
              </span>
              <span className="flex flex-col justify-around lg:justify-normal">
                <h3 className="text-3xl font-bold text-black">
                  {numberprojects}
                </h3>
                <p className="text-sm text-gray-700">Projects</p>
              </span>
            </div>
          )}
          <div className="hidden lg:block h-20 w-px bg-violet-500"></div>

          {iconTech && (
            <div className="text-center flex flex-col gap-4">
              <span className="border-2 border-black px-3 py-1 rounded-2xl">
                {iconTech}
              </span>
              <span>
                <h3 className="text-3xl font-bold text-black">{technumbers}</h3>
                <p className="text-sm text-gray-700">{techorSkills}</p>
              </span>
            </div>
          )}

          {deployed && (
            <>
              <div className="hidden lg:block h-20 w-px bg-violet-500"></div>

              <div className="text-center flex flex-col gap-4">
                <span className="border-2 border-black px-3 py-1 rounded-2xl">
                  {deployed}
                </span>
                <span>
                  {deployedCount && <>
                  <h3 className="text-3xl font-bold text-black">
                    {deployedCount}
                  </h3>
                  <p className="text-sm text-gray-700">Deployed</p>
                  </>
                  }
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
