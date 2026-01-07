import { Lightbulb, Map, Rocket } from "lucide-react";

export default function Timeline() {
    return (
        <div className="bg-background-light font-display text-text-main-light flex flex-col overflow-x-hidden transition-colors duration-200">
            <div className="layout-container flex h-full grow flex-col">
                {/* Header Section */}
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-12 md:py-20">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center text-center">
                        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1">
                            <span className="text-xs font-bold uppercase tracking-wide text-primary">
                                How it works
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
                            Your Path to a Validated MVP
                        </h2>
                        <p className="text-text-muted-light text-lg max-w-[600px]">
                            We've simplified the journey from raw idea to market-ready product
                            into three streamlined steps.
                        </p>
                    </div>
                </div>
                {/* Horizontal Process Section */}
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center pb-10">
                    <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
                        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                            {/* Decorative Connector Line (Desktop Only) */}
                            {/* Spanning from the center of first item to center of last item roughly */}
                            <div className="absolute top-[2rem] left-[16%] right-[16%] h-[2px] bg-gray-200 hidden md:block z-0">
                                {/* Gradient overlay for progress feel */}
                                <div className="h-full w-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/10"></div>
                            </div>
                            {/* Step 1: Onboarding */}
                            <div className="group relative flex flex-col items-center text-center z-10">
                                <div className="mb-6 relative">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-light border-2 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-sm">
                                        <Lightbulb className="text-primary" size={32} />
                                    </div>
                                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                                        1
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-text-main-light">
                                    Onboarding
                                </h3>
                                <p className="text-text-muted-light leading-relaxed px-2">
                                    Input your idea and receive tailored guidance to refine your
                                    concept into a concrete plan.
                                </p>
                            </div>
                            {/* Step 2: Roadmap */}
                            <div className="group relative flex flex-col items-center text-center z-10">
                                <div className="mb-6 relative">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-light border-2 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-sm">
                                        <Map className="text-primary" size={32} />
                                    </div>
                                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                                        2
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-text-main-light">
                                    Roadmap
                                </h3>
                                <p className="text-text-muted-light leading-relaxed px-2">
                                    Follow a guided execution plan with specific tasks to validate
                                    your core assumptions.
                                </p>
                            </div>
                            {/* Step 3: Outcome */}
                            <div className="group relative flex flex-col items-center text-center z-10">
                                <div className="mb-6 relative">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-light border-2 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-sm">
                                        <Rocket className="text-primary" size={32} />
                                    </div>
                                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                                        3
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-text-main-light">
                                    Outcome
                                </h3>
                                <p className="text-text-muted-light leading-relaxed px-2">
                                    Launch a market-ready MVP backed by real user data and initial
                                    traction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
