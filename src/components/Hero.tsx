import { TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center pt-12 pb-24 px-4 relative">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]"></div>
        <svg className="absolute bottom-0 left-0 w-full h-[80vh] opacity-100" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
          <path className="opacity-40" d="M-100 550 C 200 550, 400 450, 720 350 C 1040 250, 1200 150, 1540 100" stroke="url(#growthGradient)" stroke-dasharray="12 12" stroke-width="2"></path>
          <rect className="text-gray-100" fill="currentColor" height="25%" rx="12" width="80" x="5%" y="75%"></rect>
          <rect className="text-gray-200" fill="currentColor" height="35%" rx="12" width="80" x="15%" y="65%"></rect>
          <rect className="text-primary/5" fill="currentColor" height="55%" rx="12" width="80" x="75%" y="45%"></rect>
          <rect className="text-primary/10" fill="currentColor" height="70%" rx="12" width="80" x="85%" y="30%"></rect>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="growthGradient" x1="0" x2="1440" y1="0" y2="0">
              <stop stop-color="#FF6B4A" stop-opacity="0"></stop>
              <stop offset="0.5" stop-color="#FF6B4A" stop-opacity="1"></stop>
              <stop offset="1" stop-color="#FF6B4A" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-10 mt-10">
        <div className="w-20 h-20 bg-gradient-to-br from-surface-light to-gray-50 rounded-[1.25rem] shadow-card flex items-center justify-center border border-gray-100 mb-2 group transition-transform hover:-translate-y-1 duration-500">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <TrendingUp className="material-icons-round text-3xl" />
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-text-light">
            The business side of <br className="hidden md:block" />
            <span className="gradient-text">building your SaaS</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted-light leading-relaxed max-w-2xl mx-auto">
            Krowe helps you with the business side of a Saas like idea validation, customer research, and marketing. Things vibe coding can't do.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScDZyg4ZXbwFoyQ62WcXL6RonKNlVsjdCbesFV4BkjcIUMWSQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all transform hover:-translate-y-1 inline-block"
          >
            Join the waitlist
          </a>
        </div>
        {/*} <div className="pt-6 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-text-muted-light">
          <div className="flex items-center gap-2 bg-surface-light/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm">
            <span className="material-icons-round text-green-500 text-lg">check_circle</span>
            <span>Setup in 5 minutes</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-light/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm">
            <span className="material-icons-round text-green-500 text-lg">check_circle</span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2 bg-surface-light/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm">
            <span className="material-icons-round text-green-500 text-lg">check_circle</span>
            <span>Cancel anytime</span>
          </div>
        </div> */}
      </div>
    </main >
  )
}
