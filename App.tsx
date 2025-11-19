import React, { useState, useEffect, useCallback } from 'react';
import { Heart, Sparkles, Send, RefreshCcw, ArrowLeft, Video } from 'lucide-react';
import { HappinessChart } from './components/HappinessChart';
import { CompensationCards } from './components/CompensationCards';
import { JobDescription } from './components/JobDescription';
import { generateRomanticApology } from './services/geminiService';
import { AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [aiMessage, setAiMessage] = useState<string>("");
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);

  // Initialize with a static message to avoid hitting API rate limits on page load
  useEffect(() => {
    setAiMessage("I asked AI to help me apologize, but honestly, no algorithm can measure how much I miss you. Click the button if you want to see it try.");
  }, []);

  const handleGenerateApology = useCallback(async () => {
    if (isLoadingAi) return; // Prevent double clicking
    
    setIsLoadingAi(true);
    // Add a small artificial delay so the user sees the "thinking" state even if API is fast/fails
    const minLoadingTime = new Promise(resolve => setTimeout(resolve, 800));
    const messagePromise = generateRomanticApology();
    
    const [_, message] = await Promise.all([minLoadingTime, messagePromise]);
    
    setAiMessage(message);
    setIsLoadingAi(false);
  }, [isLoadingAi]);

  const handleApplyClick = () => {
    setAppState(AppState.APPLICATION);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    setAppState(AppState.HOME);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinalSubmit = () => {
    setAppState(AppState.SUCCESS);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation / Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-rose-100">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 text-rose-600 cursor-pointer" onClick={handleBackHome}>
            <Heart className="fill-current" size={24} />
            <span className="font-serif font-bold text-xl tracking-tight">Us.</span>
          </div>
          {appState !== AppState.HOME && (
             <button onClick={handleBackHome} className="text-slate-500 hover:text-rose-600 flex items-center gap-1 text-sm font-medium transition-colors">
               <ArrowLeft size={16} /> Back to Memories
             </button>
          )}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 pt-8 md:pt-12 space-y-16">
        
        {appState === AppState.HOME && (
          <>
            {/* Hero Section */}
            <section className="text-center space-y-6">
              <div className="inline-block animate-bounce">
                <span className="bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm font-semibold tracking-wide border border-rose-200">
                  Important Update
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">
                I messed up.<br />
                <span className="text-rose-500 italic">I miss you.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Life isn't the same without my girl. I've built this page to show you that I'm serious about fixing things and that our story deserves another chapter.
              </p>
            </section>

            {/* Chart Section */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold text-slate-800">The Data Doesn't Lie</h2>
                <p className="text-slate-600">
                  I've been analyzing the metrics, and the correlation is undeniable. My happiness levels have plummeted since the fight. However, projections indicate a 200% recovery rate if you say yes to dinner.
                </p>
                <div className="p-4 bg-white rounded-lg border-l-4 border-rose-400 italic text-slate-500">
                  "A stunning dip in quality of life observed post-breakup." — <span className="font-semibold">My Mom</span>
                </div>
              </div>
              <HappinessChart />
            </section>

            {/* Compensation Section (Replaces Gallery) */}
            <CompensationCards />

            {/* AI Apology Generator */}
            <section className="bg-rose-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-rose-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <Sparkles className="w-12 h-12 mx-auto text-rose-300" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold">
                  I'm not good with words...
                </h2>
                <p className="text-rose-100 text-lg">
                  So I asked an AI to write something beautiful for you, but even it struggled to capture how amazing you are.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 min-h-[120px] flex items-center justify-center">
                  {isLoadingAi ? (
                    <div className="animate-pulse text-rose-200">Consulting the love algorithms...</div>
                  ) : (
                    <p className="font-serif text-xl italic leading-relaxed">"{aiMessage}"</p>
                  )}
                </div>

                <button 
                  onClick={handleGenerateApology}
                  disabled={isLoadingAi}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-rose-900 rounded-full font-semibold hover:bg-rose-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <RefreshCcw size={18} className={isLoadingAi ? "animate-spin" : ""} />
                  {isLoadingAi ? "Thinking..." : "Try Better Words"}
                </button>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 text-center">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">Ready to review the offer?</h2>
              <button 
                onClick={handleApplyClick}
                className="bg-rose-600 text-white text-xl font-bold py-4 px-10 rounded-full shadow-xl shadow-rose-200 hover:bg-rose-700 transform hover:scale-105 transition-all"
              >
                View Open Position
              </button>
            </section>
          </>
        )}

        {appState === AppState.APPLICATION && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <JobDescription onApply={() => setAppState(AppState.SUCCESS)} />
          </div>
        )}

        {appState === AppState.SUCCESS && (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in duration-500">
             <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
               <Heart className="w-12 h-12 text-green-500 fill-current animate-pulse" />
             </div>
             <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900">
               Application Received!
             </h1>
             <p className="text-xl text-slate-600 max-w-lg">
               Your application has been fast-tracked to the top of the pile (it's the only one). <br/>
               <span className="font-bold text-rose-600">Are you free for a call?</span>
             </p>
             
             <div className="pt-8">
               <a 
                 href="https://facetime.apple.com/join#v=1&p=OBJQXMVdEfC2AwJLU/2yIg&k=htclPNbJZwegRCrTsE-Wf2UPQcfQEsvm2UnKuDwIWo0"
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition flex items-center gap-3 mx-auto w-fit"
               >
                 <Video size={20} />
                 Join Video Call
               </a>
               <p className="text-xs text-slate-400 mt-4">I'd really love to hear your voice.</p>
             </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-400 text-sm">
        <p>Made with ❤️, regret, and React.</p>
      </footer>
    </div>
  );
}

export default App;