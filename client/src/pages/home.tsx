import { Play, Disc3, Music, Youtube, Instagram } from "lucide-react";
const heroBg = "/logo.png";
const logoImg = "/logo-mark.png";

export default function Home() {
  const VIDEO_ID = "dQw4w9WgXcQ"; // Placeholder video

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 overflow-x-hidden flex flex-col relative">
      {/* Logo */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-50 animate-in fade-in duration-1000">
        <img src={logoImg} alt="Lee Wise Logo" className="w-16 h-16 md:w-24 md:h-24 object-contain" />
      </div>

      {/* Background with texture */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-top bg-no-repeat opacity-90 scale-90 origin-top"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="fixed inset-0 z-0 bg-noise pointer-events-none mix-blend-overlay opacity-50" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-24 max-w-4xl mx-auto w-full">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-6 mb-24 animate-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">
          <h1 className="font-sans text-7xl md:text-9xl tracking-tighter text-glow" data-testid="text-title">
            Lee Wise
          </h1>
          <p className="font-sans text-xl md:text-2xl text-white/60 tracking-widest uppercase font-light" data-testid="text-subtitle">
            Indie • Rock • Folk • Blues
          </p>
        </section>

        {/* Links Section */}
        <section className="w-full flex flex-col items-center space-y-4 mb-32 animate-in fade-in zoom-in-95 duration-1000 delay-300 ease-out fill-mode-both">
          <h2 className="sr-only">Listen on</h2>
          <div className="flex flex-col w-full max-w-sm space-y-3">
            <LinkButton icon={<Play className="w-5 h-5" />} label="Spotify" href="#" testId="link-spotify" />
            <LinkButton icon={<Music className="w-5 h-5" />} label="Apple Music" href="#" testId="link-apple-music" />
            <LinkButton icon={<Youtube className="w-5 h-5" />} label="YouTube" href="https://youtube.com/@LeeWiseArt" testId="link-youtube" />
            <LinkButton icon={<Disc3 className="w-5 h-5" />} label="TikTok" href="https://tiktok.com/@leewiseart" testId="link-tiktok" />
            <LinkButton icon={<Instagram className="w-5 h-5" />} label="Instagram" href="https://instagram.com/leewiseart" testId="link-instagram" />
          </div>
        </section>

        {/* Latest Release */}
        <section className="w-full flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 ease-out fill-mode-both">
          <h2 className="font-serif text-3xl md:text-4xl italic text-white/80" data-testid="text-latest-release">
            Latest Release
          </h2>
          <div className="w-full aspect-video glass-panel rounded-xl overflow-hidden shadow-2xl shadow-black/50" data-testid="embed-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?controls=0&rel=0`}
              title="Lee Wise - Latest Release"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>

        {/* Mailing List Section */}
        <section className="w-full flex flex-col items-center space-y-6 mt-32 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 ease-out fill-mode-both">
          <h2 className="font-serif text-3xl md:text-4xl italic text-white/80" data-testid="text-mailing-list">
            Join the mailing list
          </h2>
          <form 
            action="https://app.kit.com/forms/9120995/subscriptions" 
            method="POST"
            className="flex flex-col w-full max-w-sm space-y-4"
            data-testid="form-mailing-list"
          >
            <input 
              type="email" 
              name="email_address" 
              placeholder="Your email address" 
              required 
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              data-testid="input-email"
            />
            <button 
              type="submit" 
              className="w-full px-6 py-4 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
              data-testid="button-subscribe"
            >
              Subscribe
            </button>
            <p className="text-xs text-white/40 text-center tracking-wide" data-testid="text-mailing-list-helper">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 text-center animate-in fade-in duration-1000 delay-700 fill-mode-both">
        <a 
          href="https://leewise.art" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-white/30 hover:text-white/70 transition-colors duration-300 uppercase tracking-[0.2em]"
          data-testid="link-visual-art"
        >
          Visual art: leewise.art
        </a>
      </footer>
    </div>
  );
}

function LinkButton({ icon, label, href, testId }: { icon: React.ReactNode; label: string; href: string, testId: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testId}
      className="group relative flex items-center justify-between w-full px-6 py-4 glass-panel rounded-lg hover:bg-white/10 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      <span className="flex items-center space-x-4 relative z-10">
        <span className="text-white/70 group-hover:text-white transition-colors duration-300">
          {icon}
        </span>
        <span className="font-sans font-medium tracking-wide text-white/90 group-hover:text-white transition-colors duration-300">
          {label}
        </span>
      </span>
    </a>
  );
}
