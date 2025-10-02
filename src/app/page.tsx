export default function Home() {
  return (
    <main>
      {/* Top utility bar */}
      <div className="w-full border-b bg-muted/30 text-sm">
        <div className="container-grid flex flex-wrap items-center justify-between gap-2 py-2 md:h-10 md:py-0">
          <div className="text-muted-foreground">STEM Center @ IHub</div>
          <div className="flex items-center gap-4 text-muted-foreground md:gap-6 overflow-x-auto whitespace-nowrap md:overflow-visible md:whitespace-normal [-ms-overflow-style:none] [scrollbar-width:none]">
            <a href="#contact" className="hover:text-foreground">Hardware & Robots</a>
            <a href="#explore" className="hover:text-foreground">3D Print</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container-grid flex h-14 items-center justify-between sm:h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-primary" />
            <span className="text-base font-semibold tracking-tight md:text-lg">Southeastern Northshore STEM Center</span>
          </a>
          <nav className="flex gap-4 overflow-x-auto whitespace-nowrap md:gap-8 md:overflow-visible md:whitespace-normal [-ms-overflow-style:none] [scrollbar-width:none]">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#explore" className="hover:text-primary">Explore</a>
            <a href="#events" className="hover:text-primary">Events</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="container-grid grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              LaSTEM Region 9 • Northshore
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Southeastern Northshore STEM Center</h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              The Louisiana Regional Science, Technology, Engineering, and Math (LaSTEM)
              Network connects communities to improve STEM education, opportunity, and
              advancement. The Northshore Regional STEM Center supports LaSTEM’s mission
              across Livingston, St. Helena, St. Tammany, Tangipahoa, and Washington Parishes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#explore"
                className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
              >
                Explore programs
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground"
              >
                Contact us
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-muted">
              <img
                src="https://ugc.same-assets.com/1KMH7dUMSeZFfIC08YMeM-idYHPkJyHe.jpeg"
                alt="Students collaborating on a STEM activity"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            {/* Decorative bricks */}
            <img
              src="https://ext.same-assets.com/2203708706/2546225362.svg"
              alt=""
              className="pointer-events-none absolute -left-6 -top-6 h-16 w-16 select-none opacity-80"
            />
            <img
              src="https://ext.same-assets.com/2203708706/1893538824.svg"
              alt=""
              className="pointer-events-none absolute -bottom-6 -right-6 h-16 w-16 select-none opacity-80"
            />
          </div>
        </div>

        {/* soft background blob */}
        <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* Partner logos */}
      <section className="border-y py-8">
        <div className="container-grid grid grid-cols-2 items-center gap-8 opacity-80 md:grid-cols-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Southeastern_Louisiana_University_logo.png"
            alt="Southeastern Louisiana University"
            className="mx-auto h-10 w-auto object-contain"
          />
          <img
            src="https://cdn.phenompeople.com/CareerConnectResources/prod/LEFAGLOBAL/images/NTCCLOGO-1626801158802.png"
            alt="Northshore Technical Community College"
            className="mx-auto h-10 w-auto object-contain"
          />
          <img
            src="https://ugc.same-assets.com/y6jVXzcwO8FXazB4hS7r7pQNMNd9WRqj.png"
            alt="LaSTEM"
            className="mx-auto h-10 w-auto object-contain"
          />
          <img
            src="https://ugc.same-assets.com/rlgEPBu_DSN3QK2GNHl5zD1hFXDubHV-.png"
            alt="LaSTEM Regions"
            className="mx-auto h-10 w-auto object-contain"
          />
          <img
            src="https://ugc.same-assets.com/E808SpBYDoufedBoM9oX5LF2ht793XbY.webp"
            alt="SLU Athletics"
            className="mx-auto h-10 w-auto object-contain"
          />
          <img
            src="https://chambermaster.blob.core.windows.net/images/customers/1729/members/1152/logos/MEMBER_PAGE_HEADER/NTCC_logo_color_vert(1).png"
            alt="NTCC Alt"
            className="mx-auto h-10 w-auto object-contain"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container-grid grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">The Northshore Regional STEM Center</h2>
            <p className="mt-4 text-muted-foreground">
              The region’s five parishes (Livingston, St. Helena, St. Tammany, Tangipahoa, and Washington) have been designated as the LaSTEM Region 9. Led by Southeastern Louisiana University and Northshore Technical Community College in partnership with LaSTEM and with the guidance of a representative Advisory Committee, the Southeastern Northshore STEM Center supports the mission and goals of LaSTEM in alignment with stakeholders in our region to connect, collaborate, and more effectively build STEM opportunities to prepare tomorrow’s STEM workforce in response to the needs of all stakeholders.
            </p>
            <p className="mt-4 text-muted-foreground">
              Hosting the Southeastern Northshore STEM Network Center is the natural progression of an already existing, well developed partnership between Southeastern, NTCC, and STEM-related industries, government, educational, and community organizations.
            </p>
            <a
              href="https://lastem.regents.la.gov/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow hover:opacity-90"
            >
              Learn more about LaSTEM
            </a>
          </div>
          <div className="grid content-start gap-6">
            <div className="overflow-hidden rounded-2xl border">
              <img
                src="https://ugc.same-assets.com/rlgEPBu_DSN3QK2GNHl5zD1hFXDubHV-.png"
                alt="STEM regional map"
                className="h-full w-full object-contain bg-white"
              />
            </div>
            <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground md:grid-cols-3">
              <li className="rounded-lg border bg-card px-3 py-2">Livingston</li>
              <li className="rounded-lg border bg-card px-3 py-2">St. Helena</li>
              <li className="rounded-lg border bg-card px-3 py-2">St. Tammany</li>
              <li className="rounded-lg border bg-card px-3 py-2">Tangipahoa</li>
              <li className="rounded-lg border bg-card px-3 py-2">Washington</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Explore grid */}
      <section id="explore" className="section">
        <div className="container-grid">
          <h2 className="text-3xl font-bold tracking-tight">Explore</h2>
          <p className="mt-2 text-muted-foreground">Discover our programs and initiatives across the Northshore.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Staff", img: "https://ugc.same-assets.com/MCLvzNHqjjJ9cNn-1D3B41KPsnlm0nbO.jpeg" },
              { title: "Advisory Committee", img: "https://ugc.same-assets.com/Al20Xkfda7UQhHxKuuNBmceCBPg0JzGu.jpeg" },
              { title: "Region VIII Science Fair", img: "https://ugc.same-assets.com/-OXmulslL-2-YNcTofFL0_ZW5YT30Z9Q.jpeg" },
              { title: "SeaPerch", img: "https://ugc.same-assets.com/poIDpWB2YbnXWI2MCW15nwozapc02R35.jpeg" },
              { title: "STEM Scholars", img: "https://ugc.same-assets.com/1KMH7dUMSeZFfIC08YMeM-idYHPkJyHe.jpeg" },
            ].map((card) => (
              <a key={card.title} href="#" className="group overflow-hidden rounded-2xl border">
                <div className="aspect-[4/3] bg-muted">
                  <img src={card.img} alt={card.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border group-hover:bg-primary group-hover:text-primary-foreground">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features band (mirrors LEGO section) */}
      <section className="section bg-muted/30">
        <div className="container-grid grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-6">
            <img src="https://ext.same-assets.com/2203708706/2372872162.svg" alt="" className="h-10 w-10" />
            <h3 className="mt-4 text-xl font-semibold">Meeting Standards, Having Fun</h3>
            <p className="mt-2 text-muted-foreground">Engaging, standards-aligned activities that meet all learners where they are.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <img src="https://ext.same-assets.com/2203708706/848183260.svg" alt="" className="h-10 w-10" />
            <h3 className="mt-4 text-xl font-semibold">Excite, Engage and Inspire</h3>
            <p className="mt-2 text-muted-foreground">Hands-on, playful learning that turns curiosity into discovery.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <img src="https://ext.same-assets.com/2203708706/821899428.svg" alt="" className="h-10 w-10" />
            <h3 className="mt-4 text-xl font-semibold">Everything you need to succeed</h3>
            <p className="mt-2 text-muted-foreground">Scaffolding, PD, and a community to support teachers and students.</p>
          </div>
        </div>
      </section>

      {/* Highlight band */}
      <section className="section">
        <div className="container-grid grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight">The future is in their hands</h2>
            <p className="mt-4 text-muted-foreground">
              Our hands-on programs connect students to STEM concepts, unlocking aha moments, supporting teachers with standards-aligned lessons, and engaging whole classrooms.
            </p>
            <a href="#explore" className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90">See programs</a>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-2xl border">
            <img src="https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt4c64c3285742fd27/67dbe385632b931c29d48f67/lego-education-brand-hero-video-thumbnail_(2).jpg?locale=en-us&auto=webp&format=jpeg&width=1800&quality=90&fit=bounds" alt="Students doing science" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="section bg-muted/30">
        <div className="container-grid">
          <h2 className="text-3xl font-bold tracking-tight">Upcoming Events</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="group flex items-stretch gap-4 overflow-hidden rounded-2xl border bg-card p-4">
              <div className="flex w-28 shrink-0 flex-col items-center justify-center rounded-xl bg-primary/10 text-center">
                <div className="text-3xl font-bold leading-none text-primary">8</div>
                <div className="text-xs uppercase tracking-wide text-primary">November</div>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <h3 className="text-xl font-semibold">SeaPerch New Coaches Training</h3>
                <p className="mt-1 text-sm text-muted-foreground">Saturday @ 8:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container-grid grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
            <div className="mt-6 grid gap-4 text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground">Southeastern Northshore STEM Center</div>
                <div>SLU Box 10345</div>
                <div>Hammond, LA 70402</div>
              </div>
              <div>
                <a href="tel:+19855493306" className="hover:text-foreground">(985) 549-3306</a>
              </div>
              <div>
                <a href="mailto:stemcenter@southeastern.edu" className="hover:text-foreground">stemcenter@southeastern.edu</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="text-xl font-semibold">Director</h3>
            <p className="mt-2 text-muted-foreground">Jordan Smith-Kenning</p>
            <div className="mt-6 overflow-hidden rounded-xl border bg-muted/50">
              <img src="https://ugc.same-assets.com/buRrJcHrdCl-vPkD_acjkCZ92dkbh04-.jpeg" alt="STEM students" className="h-56 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="container-grid grid gap-8 md:grid-cols-2">
          <div>
            <div className="text-lg font-semibold">Southeastern Northshore STEM Center</div>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Empowering our region to connect, collaborate and build STEM opportunities.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-4 text-sm">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#explore" className="hover:text-primary">Explore</a>
            <a href="#events" className="hover:text-primary">Events</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
        </div>
        <div className="container-grid mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Southeastern Louisiana University • Northshore Technical Community College • LaSTEM
        </div>
      </footer>
    </main>
  );
}
