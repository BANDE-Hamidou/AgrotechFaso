import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { Solution } from './components/sections/Solution'
import { Results } from './components/sections/Results'
import { Investors } from './components/sections/Investors'
import { Team } from './components/sections/Team'
import { Contact } from './components/sections/Contact'
import { brand } from './lib/content'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu principal
      </a>

      <Navbar />

      <main id="contenu">
        <Hero />
        <Problem />
        <Solution />
        <Results />
        <Investors />
        <Team />
        <Contact />
      </main>

      <Footer />

      {/* Balisage minimal pour les moteurs de recherche */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: brand.name,
            description: "Capteur d'humidité du sol pour l'irrigation de précision.",
            email: brand.email,
            telephone: brand.phone,
            address: { '@type': 'PostalAddress', addressLocality: brand.location },
          }),
        }}
      />
    </>
  )
}
