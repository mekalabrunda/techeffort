import Background from "./components/layout/Background";
import Hero from "./sections/Hero";
import InfoCards from "./sections/InfoCards";
import Customers from "./sections/Customers";
import logo from "./assets/Logo.png";

export default function App() {
  return (
    <>
      {/* Decorative background behind content */}
      <Background />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-10 backdrop-blur-[2px] z-50">
        {/* logo block positioned to the left edge of viewport */}
        <div className="absolute left-4 top-4 flex flex-col z-50">
          <img src={logo} alt="techEffort Inc." className="h-8 rounded-[2px]" />
          <span className="mt-1 text-[#666] text-xs">
            <i>Since 2016</i>
          </span>
        </div>

        <div className="container max-w-[72rem] mx-auto h-20 flex items-center">
          {/* future nav items can go here; container keeps centered layout for other nav content */}
        </div>
      </nav>

      <main className="container max-w-[72rem] pt-24 pb-10 sm:pt-28 sm:pb-14 text-text-primary">
        {/* Hero */}
        <Hero />

        {/* Two cards */}
        <section aria-label="Overview" className="mt-14 sm:mt-16">
          <InfoCards />
        </section>

        {/* Customers */}
        <section aria-labelledby="customers-title" className="mt-14 sm:mt-16">
          <h2
            id="customers-title"
            className="text-center text-xl font-extrabold tracking-tight"
          >
            Our Customers
          </h2>
          <Customers />
        </section>

        {/* Footer */}
        <footer className="mt-16 sm:mt-20 text-center text-text-muted text-sm">
          © 2025 techeffort inc
        </footer>
      </main>
    </>
  );
}
