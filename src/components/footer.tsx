import { useEffect, useRef } from 'react';

export default function Footer() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Duplicate content for infinite scroll effect if needed, 
    // or rely on CSS animation. The CSS uses logic that assumes content is wide enough.
    // We'll duplicate the items in the ticker div to ensure smooth infinite loop.

    return (
        <footer className="relative w-full bg-black border-t border-white/5 blueprint-grid pt-24 pb-8 overflow-hidden font-display antialiased">
            <div className="absolute top-0 left-0 w-full glow-line"></div>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-12 gap-12 items-center">
                    <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
                        <div className="space-y-2">
                            <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none">
                                <span className="text-white">Stop guessing.</span><br />
                                <span className="text-primary">Start building.</span>
                            </h2>
                            <p className="text-slate-500 text-lg font-medium mt-6 max-w-xl">
                                The definitive operating system for modern founders. Move from ideation to launch with surgical precision.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="glass-panel p-8 rounded-2xl flex flex-col relative overflow-hidden group">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                            <div className="mb-8 relative z-10">
                                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                                    <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Ready to build?</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Transform your technical depth into a market-ready product with our guided blueprint.</p>
                            </div>
                            <div className="mt-auto space-y-4 relative z-10">
                                <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary h-12 px-6 text-black text-base font-bold transition-all hover:bg-orange-500 active:scale-[0.98]">
                                    <span>Join the waitlist</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <a className="w-full flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 h-12 px-6 text-slate-300 text-sm font-semibold hover:bg-white/10 transition-all" href="#">
                                    View documentation
                                </a>
                                <div className="flex items-center justify-center gap-2 pt-4">
                                    <div className="flex -space-x-2">
                                        <div className="h-6 w-6 rounded-full border-2 border-background-dark bg-slate-700"></div>
                                        <div className="h-6 w-6 rounded-full border-2 border-background-dark bg-slate-600"></div>
                                        <div className="h-6 w-6 rounded-full border-2 border-background-dark bg-slate-500"></div>
                                    </div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                                        <span className="text-primary">2,000+</span> Founders Joined
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 relative w-full overflow-hidden mask-fade">
                <div className="ticker-animate flex gap-6 px-6 w-max">
                    {/* First Set */}
                    <div className="flex gap-6">
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-xl">local_fire_department</span>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Current Streak</p>
                                <p className="text-white font-bold text-sm">12 Days</p>
                            </div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-xl">donut_large</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">MVP Progress</p>
                                <div className="h-1.5 w-24 bg-white/10 rounded-full mt-1">
                                    <div className="h-full w-3/4 bg-primary rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-xl">task_alt</span>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Open Tasks</p>
                                <p className="text-white font-bold text-sm">8 Pending</p>
                            </div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                            <div>
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Environment</p>
                                <p className="text-white font-bold text-sm">Production</p>
                            </div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <span className="material-symbols-outlined text-primary">analytics</span>
                            <div>
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Engagement</p>
                                <p className="text-white font-bold text-sm">+24% WoW</p>
                            </div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <span className="material-symbols-outlined text-primary">hub</span>
                            <div>
                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Active Nodes</p>
                                <p className="text-white font-bold text-sm">147 Active</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Set (Duplicate) */}
                    <div className="flex gap-6">
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-xl">local_fire_department</span>
                            </div>
                            <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Current Streak</p><p className="text-white font-bold text-sm">12 Days</p></div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined text-primary text-xl">donut_large</span></div>
                            <div className="flex-1"><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">MVP Progress</p><div className="h-1.5 w-24 bg-white/10 rounded-full mt-1"><div className="h-full w-3/4 bg-primary rounded-full"></div></div></div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined text-primary text-xl">task_alt</span></div>
                            <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Open Tasks</p><p class="text-white font-bold text-sm">8 Pending</p></div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                            <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Environment</p><p className="text-white font-bold text-sm">Production</p></div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <span className="material-symbols-outlined text-primary">analytics</span>
                            <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Engagement</p><p className="text-white font-bold text-sm">+24% WoW</p></div>
                        </div>
                        <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-4 min-w-[200px]">
                            <span className="material-symbols-outlined text-primary">hub</span>
                            <div><p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">Active Nodes</p><p className="text-white font-bold text-sm">147 Active</p></div>
                        </div>
                    </div>

                    {/* Third Set (Duplicate for smoothness on wide screens if needed, just 2 is probably enough if width is 50% relative to container, but let's stick to 2 for now as per user request code) -- Actually user code had 2 sets, I will keep 2. */}
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-20">
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <img src="KroweIcon.svg" width={35} height={3}></img>
                            <span className="font-bold text-lg text-white">Krowe</span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium">© 2024 Krowe Systems Inc.</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
                            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                            <a className="hover:text-primary transition-colors" href="#">Terms</a>
                            <a className="hover:text-primary transition-colors" href="#">Contact</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <a className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-primary transition-colors" href="#">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                            </a>
                            <a className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 text-slate-400 hover:text-primary transition-colors" href="#">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
