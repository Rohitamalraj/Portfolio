import { Button } from "@/components/ui/button"
import TextType from "./TextType"
import ShinyText from "./ShinyText"
import RotatingText from "./RotatingText"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-lime-400 px-8 py-3 text-black hover:bg-lime-300 text-lg font-semibold shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 hover:scale-105">
      <a href="#contact" rel="noopener noreferrer">
        Get In Touch
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-lime-300/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(132,204,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(132,204,22,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-8 flex items-center gap-2">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-ping"></div>
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80 font-medium">
              a developer based in chennai
            </p>
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-ping delay-300"></div>
          </div>

          <div className="space-y-6 mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block text-white/90 hover:text-white transition-colors duration-500">
                Hi, I'm
              </span>
              <TextType 
                text="Rohit Amal Raj"
                typingSpeed={80}
                pauseDuration={3000}
                deletingSpeed={50}
                showCursor={true}
                cursorCharacter="|"
                className="block bg-gradient-to-r from-lime-400 via-lime-300 to-green-400 bg-clip-text text-transparent drop-shadow-2xl"
                cursorClassName="text-lime-400"
                startOnVisible={true}
                loop={true}
                initialDelay={500}
              />
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
                <ShinyText 
                  text="Crafting digital experiences that " 
                  speed={4}
                  className="text-gray-300"
                />
                <span className="text-lime-400 font-semibold"> matter</span>
              </p>
              <p className="text-lg text-gray-400 mt-4 font-light">
                <RotatingText
                  texts={[
                    'Computer Science Student • Web3 Developer • AI Enthusiast',
                    'Full-Stack Developer • Blockchain Explorer • Tech Innovator',
                    'Software Engineer • Problem Solver • Digital Creator'
                  ]}
                  mainClassName="px-2 bg-lime-400/10 text-gray-400 overflow-hidden py-1 justify-center rounded-lg border border-lime-400/20"
                  staggerFrom="first"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                  splitBy="characters"
                />
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            {buttonNew}
            <button className="group flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors duration-300">
              <span className="text-sm uppercase tracking-wide">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-600 group-hover:border-lime-400 rounded-full p-1 transition-colors duration-300">
                <div className="w-1 h-3 bg-gray-600 group-hover:bg-lime-400 rounded-full animate-bounce"></div>
              </div>
            </button>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 text-lime-400/20 text-6xl font-bold animate-float">
            &lt;/&gt;
          </div>
          <div className="absolute bottom-20 right-10 text-lime-400/20 text-4xl animate-float delay-1000">
            { }
          </div>
          <div className="absolute top-1/3 right-20 text-lime-400/20 text-5xl animate-float delay-500">
            #
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}
