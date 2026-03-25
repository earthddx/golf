import { useState, useEffect } from 'react'
import {
  Bone, Dumbbell, Stethoscope, PersonStanding, ScanLine, Award,
  MapPin, Mail,
} from 'lucide-react'

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )
}
import styles from './App.module.css'

const NAV_LINKS = ['About', 'Services', 'Method', 'Contact']

const SERVICES = [
  {
    Icon: Bone,
    title: 'Golf Biomechanics',
    desc: 'Detailed analysis of your swing mechanics using science-backed biomechanical principles to unlock power, consistency, and injury-free play.',
  },
  {
    Icon: Dumbbell,
    title: 'MyTPI Golf Fitness',
    desc: 'Titleist Performance Institute-certified screening and training programs tailored specifically to the demands of the golf athlete.',
  },
  {
    Icon: Stethoscope,
    title: 'Medical Golf Fitness',
    desc: 'Rehabilitation-informed training bridging the gap between medical recovery and peak on-course performance.',
  },
  {
    Icon: PersonStanding,
    title: 'ELDOA',
    desc: 'Targeted spinal decompression and postural exercises that enhance mobility, reduce pain, and improve your address position.',
  },
  {
    Icon: ScanLine,
    title: 'K-Vest 3D Analysis',
    desc: 'Real-time 3D motion capture of your kinematic sequence — see exactly how energy transfers from ground through club head.',
  },
  {
    Icon: Award,
    title: 'CES / NASM',
    desc: 'NASM Corrective Exercise Specialist methodology to identify and fix movement dysfunctions before they become injuries.',
  },
]

const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Athletes Trained' },
  { value: '6', label: 'Certifications' },
  { value: '100%', label: 'Science-Based' },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle') // idle | sending | success | error

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/REPLACE_WITH_FORM_ID', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target),
      })
      setFormStatus(res.ok ? 'success' : 'error')
    } catch {
      setFormStatus('error')
    }
  }

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.app}>

      {/* ── NAVBAR ── */}
      <header className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
        <a href="#" className={styles.logo} onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className={styles.logoMark}>A</span>
          <span className={styles.logoText}>Alle Golf Lab</span>
        </a>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className={styles.navLink}
               onClick={e => handleNav(e, link)}>
              {link}
            </a>
          ))}
          <a href="#contact" className={styles.navCta} onClick={e => handleNav(e, 'Contact')}>
            Book a Session
          </a>
        </nav>

        <button className={styles.burger} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span className={menuOpen ? styles.burgerLineTop : ''} />
          <span className={menuOpen ? styles.burgerLineMid : ''} />
          <span className={menuOpen ? styles.burgerLineBot : ''} />
        </button>
      </header>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <img
          className={styles.heroBg}
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1800&q=80"
          alt="Golf course at sunrise"
        />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Alle Golf Lab LLC</p>
          <h1 className={styles.heroTitle}>
            Elevate Your Game<br />
            <span className={styles.heroTitleAccent}>Through Science</span>
          </h1>
          <p className={styles.heroSub}>
            Expert golf biomechanics & fitness coaching with Alessandra Miller —<br />
            TPI Certified | K-Vest | NASM | ELDOA
          </p>
          <div className={styles.heroCtas}>
            <a href="#contact" className={styles.btnPrimary} onClick={e => handleNav(e, 'Contact')}>
              Book a Session
            </a>
            <a href="#services" className={styles.btnGhost} onClick={e => handleNav(e, 'Services')}>
              Explore Services
            </a>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className={styles.statsStrip}>
        {STATS.map(s => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrap}>
              <img
                src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80"
                alt="Golf swing analysis"
                className={styles.aboutImg}
              />
              <div className={styles.aboutBadge}>
                <span>TPI</span>
                <span>Certified</span>
              </div>
            </div>

            <div className={styles.aboutText}>
              <img src="/thumbnail.jpeg" alt="Alessandra Miller" className={styles.avatar} />
              <p className={styles.sectionEyebrow}>About Alessandra</p>
              <h2 className={styles.sectionTitle}>Where Biomechanics<br />Meets the Fairway</h2>
              <p className={styles.aboutParagraph}>
                Alessandra Miller is a certified golf fitness specialist and biomechanics expert
                based at Alle Golf Lab LLC. With a deep commitment to evidence-based coaching,
                she bridges the worlds of sports science, rehabilitation, and high-performance golf training.
              </p>
              <p className={styles.aboutParagraph}>
                Her multidisciplinary background — spanning TPI Golf Fitness, K-Vest 3D motion
                analysis, ELDOA, and NASM Corrective Exercise — allows her to assess each golfer
                as a whole athlete and build individualized programs that produce lasting results
                on the course.
              </p>
              <ul className={styles.certList}>
                {['MyTPI Golf Fitness Certified', 'K-Vest 3D Biomechanics', 'ELDOA Practitioner',
                  'NASM-CES', 'Medical Golf Fitness'].map(c => (
                  <li key={c} className={styles.certItem}>
                    <span className={styles.certDot} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>What We Offer</p>
            <h2 className={styles.sectionTitle}>Training Methods &amp; Services</h2>
            <p className={styles.sectionDesc}>
              A full-spectrum approach to golf performance — from movement screening to on-course application.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.map(s => (
              <div key={s.title} className={styles.serviceCard}>
                <s.Icon size={32} className={styles.serviceIcon} />
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHOD / FEATURE ── */}
      <section id="method" className={styles.method}>
        <div className={styles.methodImageCol}>
          <img
            src="https://images.unsplash.com/photo-1611374243147-44a702c2d44c?auto=format&fit=crop&w=900&q=80"
            alt="Golfer on the green"
            className={styles.methodImg}
          />
        </div>
        <div className={styles.methodText}>
          <p className={styles.sectionEyebrow}>The Alle Golf Lab Method</p>
          <h2 className={styles.sectionTitle}>Assess. Train.<br />Perform.</h2>
          <p className={styles.methodParagraph}>
            Every program begins with a thorough physical and movement screen. We identify
            your body's limitations, asymmetries, and strengths — then build a roadmap
            designed specifically around your game.
          </p>

          <div className={styles.steps}>
            {[
              { n: '01', title: 'Movement Screen', desc: 'Full TPI body-swing connection assessment to map your physical profile.' },
              { n: '02', title: 'K-Vest 3D Analysis', desc: 'Motion capture reveals your kinematic sequence and power leaks in real time.' },
              { n: '03', title: 'Custom Program', desc: 'ELDOA, corrective exercise, and strength work tailored to your specific needs.' },
              { n: '04', title: 'On-Course Results', desc: 'Measurable improvements in distance, accuracy, and injury resilience.' },
            ].map(step => (
              <div key={step.n} className={styles.step}>
                <span className={styles.stepNum}>{step.n}</span>
                <div>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerOverlay} />
        <img
          src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1800&q=80"
          alt="Golf course fairway"
          className={styles.ctaBannerBg}
        />
        <div className={styles.ctaBannerContent}>
          <h2 className={styles.ctaBannerTitle}>Ready to play your best golf?</h2>
          <p className={styles.ctaBannerSub}>Join Alessandra at Alle Golf Lab and start your science-based journey today.</p>
          <a href="#contact" className={styles.btnPrimary} onClick={e => handleNav(e, 'Contact')}>
            Book Your Assessment
          </a>
        </div>
      </section>

      {/* ── AFFILIATE ── */}
      <section className={styles.affiliate}>
        <div className={styles.container}>
          <p className={styles.affiliateLabel}>Official Affiliates</p>
          <div className={styles.affiliateGrid}>
            <div className={styles.affiliateItem}>
              <a
                href="https://my.lactigo.com/alle"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.affiliateItem}
              >
                <img src="/lactigo.avif" alt="LactiGo" className={styles.affiliateLogo} />
              </a>
            </div>
            <div className={styles.affiliateDivider} />
            <div className={styles.affiliateItem}>
              <a
                href="https://epihydrate.com/pages/mysta-golf-performance"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.affiliateItem}
              >
                <img src="/mystagolf.webp" alt="Mysta Golf" className={`${styles.affiliateLogo} ${styles.affiliateLogoLg}`} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Get in Touch</p>
            <h2 className={styles.sectionTitle}>Start Your Journey</h2>
            <p className={styles.sectionDesc}>
              Ready to take your golf game to the next level? Send a message and Alessandra will be in touch.
            </p>
          </div>

          <div className={styles.contactGrid}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>First Name</label>
                  <input className={styles.input} type="text" name="firstName" placeholder="John" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Last Name</label>
                  <input className={styles.input} type="text" name="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Interested In</label>
                <select className={styles.input} name="interest">
                  <option>Golf Biomechanics Assessment</option>
                  <option>TPI Golf Fitness Program</option>
                  <option>K-Vest 3D Analysis</option>
                  <option>ELDOA &amp; Corrective Exercise</option>
                  <option>Full Performance Program</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea className={`${styles.input} ${styles.textarea}`} name="message" rows={4}
                  placeholder="Tell us about your golf goals..." />
              </div>
              {formStatus === 'success' ? (
                <p className={styles.formSuccess}>Message sent! Alessandra will be in touch soon.</p>
              ) : (
                <>
                  {formStatus === 'error' && (
                    <p className={styles.formError}>Something went wrong. Please try again.</p>
                  )}
                  <button type="submit" className={styles.btnSubmit} disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </>
              )}
            </form>

            <div className={styles.contactInfo}>
              <div className={styles.contactCard}>
                <MapPin size={22} className={styles.contactIcon} />
                <div>
                  <h4>Location</h4>
                  <p>Alle Golf Lab LLC<br />Available in-person &amp; online</p>
                </div>
              </div>
              <div className={styles.contactCard}>
                <Mail size={22} className={styles.contactIcon} />
                <div>
                  <h4>Email</h4>
                  <p>hello@allegolflab.com</p>
                </div>
              </div>
              <div className={styles.contactQuote}>
                <p>"The body controls the club. Train the body, transform the game."</p>
                <span>— Alessandra Miller</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <span className={styles.logoMark}>A</span>
            <span className={styles.logoText}>Alle Golf Lab LLC</span>
          </div>
          <p className={styles.footerTagline}>Golf Biomechanics · TPI · K-Vest · ELDOA · NASM</p>
          <div className={styles.footerSocial}>
            <a
              href="https://www.linkedin.com/in/alessandra-miller-9a5580190/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href="https://www.instagram.com/alecxssgf/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} Alle Golf Lab LLC. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}
