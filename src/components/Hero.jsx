import { ArrowRight } from './icons'

const HERO_VIDEO_URL = 'https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4'

function Hero({ onExplore }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-app px-4 md:px-8 pt-4 md:pt-6">
      <div className="relative w-full max-w-7xl h-[72vh] md:h-[84vh] rounded-[2rem] overflow-hidden border border-subtle bg-app">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 overlay-image-top" />
        <div className="absolute inset-0 overlay-image-bottom" />

        <div className="relative z-10 flex h-full items-end md:items-center p-6 md:p-12 lg:p-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-semibold tracking-tight leading-[0.95]">Designing experiences through customers insight</h1>
            <p className="mt-5 max-w-2xl text-white/80 text-base md:text-xl leading-relaxed">
              Remove opinionism from product decisions, get clear data-driven insights directly from your customers.
            </p>
            <button type="button" onClick={onExplore} className="mt-8 inline-flex items-center gap-3 rounded-full button-primary px-6 py-3 transition-colors">
              Explore the feed <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
