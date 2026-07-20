import React,{useState} from "react";

const SkillCard = ({skills , cardTitle ,description ,color }) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
   <div     
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
            className="relative overflow-hidden rounded-3xl border-[2px] border-violet-500/20 bg-white/10 backdrop-blur-md p-6 mt-6"
            style={{
              boxShadow: isHovered ? `0 0 40px ${color}` : "none",
            }}
          >
            {/* Top Glow */}
            <div className="absolute inset-0  pointer-events-none" />
  
            <h1 className="flex items-center justify-center gap-2 text-3xl font-black text-violet-400 mb-8">
              <span className={`px-3 py-2 rounded-3xl text-white/70 font-extrabold `} style={{backgroundColor : color , boxShadow:`0 0 10px ${color}` ,clipPath: "polygon(0 0, 97% 0, 93% 55%, 100% 100%, 0 100%)" }}>
                {cardTitle}{" "}
                <span className="text-4xl bg-green-500 px-2 rounded-3xl">
                  &lt;/&gt;
                </span>
              </span>
            </h1>
  
            <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-rows-3 gap-5">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-gray-100 py-2 rounded-2xl hover:scale-110 duration-300 text-black font-bold"
                    style={{clipPath: "polygon(0 0, 93% 0, 89% 55%, 100% 100%, 0 100%)"}}
                  >
                    <Icon size={36} color={skill.color} backgroundcolor="#ff06ff"/>
                    <div className="text-center">{skill.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
  );
};

export default SkillCard;
