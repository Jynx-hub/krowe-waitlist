import { Search, ArrowRight, Lightbulb, CircleDollarSign } from "lucide-react"


export default function Features() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 pb-26 pt-24">
            {/* Hero-style Heading for Features */}
            <div className="flex flex-col gap-10 @container">
                <div className="text-center mb-4">
                    <h1 className="text-gray-900  tracking-tight text-3xl sm:text-4xl md:text-5xl font-black leading-tight max-w-[800px] mx-auto">
                        Everything you need to build your startup
                    </h1>
                    <p className="mt-4 text-gray-500 text-lg max-w-[600px] mx-auto">
                        From validation to funding, we provide the essential tools founders need to move fast and break nothing.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full text-left">
                    {/* Card 1: Market Research */}
                    <div className="group flex flex-col h-full bg-white rounded-2xl border border-[#e6e0db] p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <Search className="material-symbols-outlined text-3xl" />
                        </div>
                        <div className="flex flex-col gap-3 flex-grow">
                            <h2 className="text-[#181411] text-xl font-bold leading-tight">Deep Market Research</h2>
                            <p className="text-[#897561] text-base font-normal leading-relaxed">
                                Uncover hidden opportunities and understand your audience before you build. Our AI-driven insights help you spot gaps in the market instantly.
                            </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <a className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all" href="#">
                                Explore Research Tools
                                <span className="material-symbols-outlined text-lg"><ArrowRight /></span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Idea Validation */}
                    <div className="group flex flex-col h-full bg-white rounded-2xl border border-[#e6e0db] p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-3xl"><Lightbulb /></span>
                        </div>
                        <div className="flex flex-col gap-3 flex-grow">
                            <h2 className="text-[#181411] text-xl font-bold leading-tight">Rapid Idea Validation</h2>
                            <p className="text-[#897561] text-base font-normal leading-relaxed">
                                Test your hypothesis with real users and get feedback instantly. Create landing pages and surveys in minutes to gauge interest.
                            </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <a className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all" href="#">
                                Start Validating
                                <span className="material-symbols-outlined text-lg"><ArrowRight /></span>
                            </a>
                        </div>
                    </div>

                    {/* Card 3: Finances */}
                    <div className="group flex flex-col h-full bg-white rounded-2xl border border-[#e6e0db] p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-3xl"><CircleDollarSign /></span>
                        </div>
                        <div className="flex flex-col gap-3 flex-grow">
                            <h2 className="text-[#181411] text-xl font-bold leading-tight">Smart Financial Planning</h2>
                            <p className="text-[#897561] text-base font-normal leading-relaxed">
                                Manage burn rate, project runway, and secure funding with ease. Visualize your cash flow and prepare investor-ready reports automatically.
                            </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <a className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all" href="#">
                                Manage Finances
                                <span className="material-symbols-outlined text-lg"><ArrowRight /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
