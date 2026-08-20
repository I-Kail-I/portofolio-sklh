import { skillGroups } from "@/data/mockData";

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Skills & Tools</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Daftar teknologi dan perkakas yang saya gunakan untuk menjadikan konsep aplikasi web yang fungsional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800">
              <span className="text-2xl">{group.icon}</span>
              <h2 className="text-xl font-bold text-white">{group.title}</h2>
            </div>

            <div className="space-y-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-white">
                      {skill.name}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {skill.level}
                    </span>
                  </div>

                  {/* Progress Bar Track */}
                  <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
                    {/* Progress Bar Indicator */}
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}