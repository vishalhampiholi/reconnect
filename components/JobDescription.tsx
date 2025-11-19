import React from 'react';
import { Check, Star, Coffee, HeartHandshake } from 'lucide-react';

interface JobDescriptionProps {
  onApply: () => void;
}

export const JobDescription: React.FC<JobDescriptionProps> = ({ onApply }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-rose-100 max-w-3xl mx-auto">
      <div className="bg-rose-500 p-6 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-3 backdrop-blur-sm">
          <Star className="text-white" size={32} fill="currentColor" />
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
          Open Position: Girlfriend (Senior Level)
        </h2>
        <p className="text-rose-100 mt-2 font-medium">Immediate Start • Lifetime Contract</p>
      </div>
      
      <div className="p-8 space-y-8">
        {/* Description */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-wide">The Role</h3>
          <p className="text-slate-600 leading-relaxed">
            I am currently looking to re-hire a highly qualified candidate for the position of Girlfriend. 
            The previous contract was suspended due to a "misunderstanding" (my bad), but management (me) 
            has undergone significant retraining and is ready to offer improved working conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Requirements */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-wide flex items-center">
              <Check className="mr-2 text-rose-500" size={20} /> Requirements
            </h3>
            <ul className="space-y-3">
              {['Must be you (non-negotiable)', 'Expertise in being cute', 'Willingness to forgive an idiot', 'Ability to tolerate my bad jokes'].map((item, i) => (
                <li key={i} className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-wide flex items-center">
              <HeartHandshake className="mr-2 text-rose-500" size={20} /> Benefits Package
            </h3>
            <ul className="space-y-3">
              {[
                'Unlimited cuddles & back scratches', 
                'Dedicated food sharing program', 
                '100% Loyalty Bonus',
                'Priority over video games'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-600">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 text-center">
          <button 
            onClick={onApply}
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-rose-200 transform transition hover:scale-105 hover:-translate-y-1 text-lg flex items-center mx-auto gap-2"
          >
            <span>Apply for Position</span>
            <Coffee size={20} />
          </button>
          <p className="mt-4 text-xs text-slate-400 uppercase tracking-widest">Equal Opportunity Lover</p>
        </div>
      </div>
    </div>
  );
};