'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, TrendingUp, Eye, ChevronDown, Globe, Heart, BookOpen, DollarSign, Scale } from "lucide-react";

interface SDGGoal {
  number: number;
  title: string;
  description: string;
  color: string;
  bgGradient: string;
  hoverGradient: string;
  textColor: string;
  borderColor: string;
  impact: string;
  icon: React.ComponentType<any>;
  category: string;
  stats: {
    beneficiaries: string;
    locations: string;
    success: string;
  };
}

interface CounterAnimationProps {
  target: string;
  duration?: number;
}

interface SDGCardProps {
  goal: SDGGoal;
  index: number;
}

const sdgGoals: SDGGoal[] = [
  {
    number: 1,
    title: "No Poverty",
    description: "By providing free or affordable eye care to underserved populations, we help individuals maintain their health, stay employed, and reduce the economic burden on families—breaking the cycle of poverty through better vision.",
    color: "red",
    bgGradient: "from-red-50 via-red-100 to-red-200",
    hoverGradient: "from-red-500 to-red-600",
    textColor: "text-red-600",
    borderColor: "border-red-200",
    impact: "1000+ people received free screenings",
    icon: DollarSign,
    category: "Economic",
    stats: { beneficiaries: "1000+", locations: "25", success: "92%" }
  },
  {
    number: 3,
    title: "Good Health and Well-being",
    description: "We promote lifelong health by detecting and treating preventable eye conditions early. Access to timely eye care reduces the risk of permanent vision loss and improves overall quality of life for children and adults alike.",
    color: "green",
    bgGradient: "from-emerald-50 via-emerald-100 to-emerald-200",
    hoverGradient: "from-emerald-500 to-emerald-600",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    impact: "200+ referrals to treatment facilities",
    icon: Heart,
    category: "Health",
    stats: { beneficiaries: "200+", locations: "30", success: "95%" }
  },
  {
    number: 4,
    title: "Quality Education",
    description: "Children with uncorrected vision problems often struggle in school. Through school-based eye screenings and treatment, we help students see clearly, learn better, and reach their full academic potential.",
    color: "blue",
    bgGradient: "from-blue-50 via-blue-100 to-blue-200",
    hoverGradient: "from-blue-500 to-blue-600",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    impact: "50+ schools with improved student performance",
    icon: BookOpen,
    category: "Education",
    stats: { beneficiaries: "1,200+", locations: "50", success: "88%" }
  },
  {
    number: 5,
    title: "Gender Equality",
    description: "Women and girls often face greater barriers to accessing healthcare. Our outreach programs ensure that eye care reaches everyone—regardless of gender—empowering women and girls to lead healthy, productive lives.",
    color: "purple",
    bgGradient: "from-purple-50 via-purple-100 to-purple-200",
    hoverGradient: "from-purple-500 to-purple-600",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    impact: "60% of beneficiaries are women and girls",
    icon: Scale,
    category: "Social",
    stats: { beneficiaries: "750+", locations: "40", success: "90%" }
  },
  {
    number: 8,
    title: "Decent Work and Economic Growth",
    description: "Clear vision is essential for many forms of employment. By preventing vision loss, we help people remain in the workforce, support their families, and contribute to economic development.",
    color: "orange",
    bgGradient: "from-amber-50 via-amber-100 to-amber-200",
    hoverGradient: "from-amber-500 to-amber-600",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
    impact: "85% of treated patients returned to work",
    icon: TrendingUp,
    category: "Economic",
    stats: { beneficiaries: "300+", locations: "20", success: "85%" }
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    description: "We bring eye care directly to marginalized communities, schools, and remote areas—ensuring equitable access to health services for those who need it most, regardless of income or location.",
    color: "teal",
    bgGradient: "from-cyan-50 via-cyan-100 to-cyan-200",
    hoverGradient: "from-cyan-500 to-cyan-600",
    textColor: "text-cyan-600",
    borderColor: "border-cyan-200",
    impact: "15+ underserved communities reached",
    icon: Globe,
    category: "Social",
    stats: { beneficiaries: "600+", locations: "15", success: "93%" }
  },
];

const CounterAnimation: React.FC<CounterAnimationProps> = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const targetNum = parseInt(target.replace(/[^0-9]/g, ''));
    const increment = targetNum / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, duration]);
  
  return <span>{count}{target.replace(/[0-9]/g, '')}</span>;
};

const SDGCard: React.FC<SDGCardProps> = ({ goal, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = goal.icon;
  
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border-2 ${goal.borderColor} 
        bg-white/90 backdrop-blur-md shadow-lg hover:shadow-2xl 
        transition-all duration-700 ease-out transform hover:-translate-y-2
        ${isHovered ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 150}ms`,
        opacity: 0,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${goal.bgGradient} opacity-0 
        group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Header Section with Icon and Number */}
      <div className="relative p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className={`relative flex items-center justify-center w-16 h-16 
            bg-gradient-to-br ${goal.bgGradient} rounded-2xl shadow-md
            group-hover:shadow-lg transition-all duration-300 transform
            group-hover:scale-110 group-hover:rotate-3`}>
            <span className={`text-2xl font-bold ${goal.textColor} z-10`}>
              {goal.number}
            </span>
          </div>
          
          <div className={`px-3 py-1 rounded-full text-xs font-medium
            bg-gradient-to-r ${goal.bgGradient} ${goal.textColor} 
            shadow-sm border ${goal.borderColor}`}>
            {goal.category}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white 
          transition-colors duration-300">
          {goal.title}
        </h3>
        
        <p className={`text-sm text-gray-600 group-hover:text-white/90 
          transition-colors duration-300 leading-relaxed
          ${isExpanded ? '' : 'line-clamp-3'}`}>
          {goal.description}
        </p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700 
            group-hover:text-white transition-colors duration-300 flex items-center"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
          <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 
            ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      {/* Stats Section */}
      <div className="relative px-6 pb-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 group-hover:text-white 
              transition-colors duration-300">
              <CounterAnimation target={goal.stats.beneficiaries} />
            </div>
            <div className="text-xs text-gray-500 group-hover:text-white/70 
              transition-colors duration-300">
              Beneficiaries
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 group-hover:text-white 
              transition-colors duration-300">
              <CounterAnimation target={goal.stats.locations} />
            </div>
            <div className="text-xs text-gray-500 group-hover:text-white/70 
              transition-colors duration-300">
              Locations
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 group-hover:text-white 
              transition-colors duration-300">
              <CounterAnimation target={goal.stats.success} />
            </div>
            <div className="text-xs text-gray-500 group-hover:text-white/70 
              transition-colors duration-300">
              Success Rate
            </div>
          </div>
        </div>
      </div>
      
      {/* Impact Section */}
      <div className="relative px-6 pb-4">
        <div className={`p-4 rounded-xl bg-gradient-to-r ${goal.bgGradient} 
          border ${goal.borderColor} group-hover:bg-white/20 group-hover:border-white/30
          transition-all duration-300`}>
          <div className="flex items-center space-x-2 mb-2">
            <IconComponent className={`w-4 h-4 ${goal.textColor} group-hover:text-white
              transition-colors duration-300`} />
            <span className="text-sm font-semibold text-gray-900 group-hover:text-white
              transition-colors duration-300">
              Key Impact
            </span>
          </div>
          <p className={`text-sm font-medium ${goal.textColor} group-hover:text-white
            transition-colors duration-300`}>
            {goal.impact}
          </p>
        </div>
      </div>
      
      {/* Action Button */}
      {/* <div className="relative px-6 pb-6">
        <button className={`w-full py-3 px-4 rounded-xl border-2 ${goal.borderColor}
          ${goal.textColor} font-medium text-sm transition-all duration-300
          hover:bg-gradient-to-r ${goal.hoverGradient} hover:text-white hover:border-transparent
          hover:shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2
          group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30`}>
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div> */}
      
      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${goal.hoverGradient} 
        opacity-0 group-hover:opacity-95 transition-opacity duration-500 -z-10`} />
    </div>
  );
};

export  function SDGGrid() {
  const [visibleCards, setVisibleCards] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards(prev => {
        if (prev < sdgGoals.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 200);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-md">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3 animate-pulse" />
              UN Sustainable Development Goals
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Impact on the{' '}
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
                SDGs
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              We're committed to advancing the United Nations Sustainable Development Goals through 
              accessible eye care, creating lasting change in communities worldwide.
            </p>
            
            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
                <div className="text-2xl font-bold text-blue-600">
                  <CounterAnimation target="1,000+" />
                </div>
                <div className="text-sm text-gray-600">Total Beneficiaries</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
                <div className="text-2xl font-bold text-green-600">
                  <CounterAnimation target="10+" />
                </div>
                <div className="text-sm text-gray-600">Locations Served</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
                <div className="text-2xl font-bold text-purple-600">
                  <CounterAnimation target="6" />
                </div>
                <div className="text-sm text-gray-600">SDGs Addressed</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
                <div className="text-2xl font-bold text-amber-600">
                  <CounterAnimation target="91%" />
                </div>
                <div className="text-sm text-gray-600">Avg Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* SDG Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {sdgGoals.map((goal, index) => (
              <div
                key={goal.number}
                style={{
                  opacity: index < visibleCards ? 1 : 0,
                  transform: index < visibleCards ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease-out'
                }}
              >
                <SDGCard goal={goal} index={index} />
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          {/* <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>View Our Full Impact Report</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Get Involved Today
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}