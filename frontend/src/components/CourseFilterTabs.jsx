import { FaGraduationCap, FaLock } from "react-icons/fa";

export default function CourseFilterTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "free", label: "Free Courses", icon: FaGraduationCap },
    { id: "paid", label: "Paid Courses", icon: FaLock },
  ];

  return (
    <div className="flex justify-center mb-8 sm:mb-12">
      <div className="inline-flex bg-base-200 dark:bg-base-100 p-1 rounded-full shadow-lg -mb-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300
                ${
                  isActive
                    ? "bg-primary text-white shadow-lg scale-105 sm:scale-110"
                    : "text-base-content/50 hover:text-base-content hover:bg-base-300/50"
                }
              `}
            >
              <Icon className={`text-sm sm:text-base ${isActive ? "animate-pulse" : ""}`} />
              <span className="hidden xs:inline">{tab.label}</span>
              <span className="xs:hidden">{tab.id === 'free' ? 'Free' : 'Paid'}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}