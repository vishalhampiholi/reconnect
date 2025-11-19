import React from 'react';
import { Heart } from 'lucide-react';
import { Memory } from '../types';

const memories: Memory[] = [
  { 
    id: 1, 
    // Converted Google Drive view link to direct stream link
    imageUrl: 'https://drive.google.com/uc?export=view&id=1adOFV1-TiGUi3jeGiX_v-H820oNVhpRe', 
    caption: 'You look absolutely beautiful in blue', 
    date: 'Us' 
  },
  { 
    id: 2, 
    // Converted Google Drive view link to direct stream link
    imageUrl: 'https://drive.google.com/uc?export=view&id=1VNSkcVENHM2U5xaui4NE83K2ZuvstOeJ', 
    caption: 'My favorite place is right here', 
    date: 'Forever' 
  }
];

const PhotoCard: React.FC<{ memory: Memory }> = ({ memory }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500 border-4 border-white/50 bg-rose-50">
      <div className="aspect-[3/4] w-full overflow-hidden relative">
        <img
          src={memory.imageUrl}
          alt={memory.caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            // Fallback in case Drive blocking or quota limit is hit
            const target = e.target as HTMLImageElement;
            target.onerror = null; // prevent infinite loop
            // Only replace if it's not already the placeholder to avoid loops
            if (!target.src.includes('placehold')) {
               target.parentElement!.innerHTML = `<div class="flex items-center justify-center h-full bg-rose-100 text-rose-500 text-center p-4"><p>Image loading...<br/><span class="text-xs opacity-70">If it doesn't appear, Google Drive might be busy.</span></p></div>`;
            }
          }}
        />
        
        {/* Caption Overlay - Appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/90 via-transparent to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="font-serif text-2xl font-bold tracking-wide drop-shadow-sm">{memory.caption}</p>
            <div className="flex items-center text-rose-200 font-medium mt-2">
              <Heart size={18} className="mr-2 fill-current" />
              <span>{memory.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PhotoGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 max-w-4xl mx-auto">
      {memories.map((memory) => (
        <PhotoCard key={memory.id} memory={memory} />
      ))}
    </div>
  );
};