import React from 'react';
import { Star, Heart, Smile, Coffee } from 'lucide-react';

export const CompensationCards: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto py-8">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Updated Compensation</h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
          I've reviewed your feedback and restructured the offer. The new package addresses previous pain points directly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card 1: Conflict Resolution */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="text-amber-500 fill-current" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Conflict Resolution Upgrades</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                New software installed: 'Active Listening 2.0' and 'Ego Deletion'. No more silly arguments.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Unlimited Affection */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="text-rose-500 fill-current" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Unlimited Affection</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                100% coverage for hugs, kisses, and hand-holding. No deductibles.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Dedicated Support Staff */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
              <Smile className="text-rose-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Dedicated Support Staff</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                I am available 24/7 to cheer you up, bring you food, or just listen.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Coffee & Date Perks */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
              <Coffee className="text-orange-500" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Coffee & Date Perks</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Guaranteed weekly dates and your coffee order memorized perfectly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
