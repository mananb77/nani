import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function Divider() {
  return (
    <div className="divider">
      <span className="divider-symbol">&#9753;</span>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-title">
          In Loving Memory<span>श्रद्धांजलि</span>
        </div>
        <button
          className={`nav-hamburger ${menuOpen ? 'nav-hamburger-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <li><a href="#bio" onClick={closeMenu}>Her Life</a></li>
          <li><a href="#family" onClick={closeMenu}>Family</a></li>
          <li><a href="#journey" onClick={closeMenu}>Journey</a></li>
          <li><a href="#hospitality" onClick={closeMenu}>Hospitality</a></li>
          <li><a href="#creative" onClick={closeMenu}>Creative</a></li>
          <li><a href="#athlete" onClick={closeMenu}>Athlete</a></li>
          <li><a href="#spiritual" onClick={closeMenu}>Spiritual</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Photos</a></li>
          <li><Link to="/lifestory" style={{ color: 'var(--gold)' }} onClick={closeMenu}>Her Story</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-prayer fade-in">
          ॐ शान्ति शान्ति शान्ति
        </p>

        <div className="hero-photo-container fade-in">
          <img
            src={`${import.meta.env.BASE_URL}photos/Nani.jpg`}
            alt="Nani — Krishna Bhargava in her beloved garden"
          />
        </div>

        <h1 className="hero-name-hindi fade-in">कृष्णा भार्गव</h1>
        <p className="hero-name-english fade-in">Krishna Bhargava</p>
        <p className="hero-years fade-in">September 7, 1940 &ndash; December 4, 2021</p>
        <p className="hero-subtitle fade-in">
          Creative, Welcoming &amp; Warm
        </p>

        <div className="hero-quote fade-in">
          <p className="hero-quote-hindi">
            &ldquo;सबसे छोटी, सबसे लाडली &mdash; जो बड़ी होकर सबको लाड़ प्यार देती रहीं&rdquo;
          </p>
          <p className="hero-quote-english">
            &ldquo;The youngest, most pampered one who grew up to pamper everyone around her&rdquo;
          </p>
        </div>

        <div className="hero-links fade-in">
          <Link to="/lifestory" className="hero-link hero-link-primary">
            Her Life Story
          </Link>
          <a
            href="https://docs.google.com/presentation/d/1klLHUEJiLTs2MTzlo0RI166incQJvLfB-ffUTGQsh4A/edit?slide=id.g7a42ca4f32_0_113#slide=id.g7a42ca4f32_0_113"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            Life Story Slides
          </a>
          <Link to="/memories" className="hero-link">
            Share a Memory
          </Link>
        </div>

        <a href="#bio" className="hero-scroll-hint fade-in" aria-label="Scroll down">
          <span className="hero-scroll-chevron">&#8964;</span>
        </a>
      </div>
    </section>
  );
}

function Bio() {
  const cards = [
    { label: 'Scholar', hindi: 'विद्वान' },
    { label: 'Athlete', hindi: 'खिलाड़ी' },
    { label: 'Hostess', hindi: 'मेज़बान' },
    { label: 'Gardener', hindi: 'माली' },
    { label: 'Devotee', hindi: 'भक्त' },
  ];

  return (
    <section className="bio" id="bio">
      <div className="section-inner">
        <h2 className="section-title fade-in">Who She Was</h2>
        <p className="section-title-hindi fade-in">वो कौन थीं</p>

        <p className="bio-text fade-in">
          Born on Janmashtami in Bikaner, 1940. The youngest and most pampered
          child in a distinguished family of doctors and army fighters &mdash;
          her family&rsquo;s photographs still hang in the Bikaner museum. A
          princess who grew up with royal treatment, an ambassador car, and
          the whole community&rsquo;s adoration. She defied convention to earn a
          Master&rsquo;s degree in Hindi &amp; Sanskrit from an all-girls school
          when women were discouraged from education. A state-level field hockey
          player and table tennis champion who received coaching from the
          legendary Dhyan Chand. She built a home in Bhopal that became legendary
          for its warmth, beauty, and hospitality. For 81 years, she lived with
          purpose, creativity, and an unmatched generosity of spirit.
        </p>

        <p className="bio-text bio-text-hindi fade-in">
          1940 में जन्माष्टमी के शुभ अवसर पर बीकानेर में जन्म। डॉक्टरों और
          सेना के योद्धाओं के प्रतिष्ठित परिवार की सबसे छोटी और सबसे
          लाडली संतान — एक राजकुमारी जिन्हें शाही व्यवहार मिलता था।
          उन्होंने लड़कियों के स्कूल से हिन्दी और संस्कृत में स्नातकोत्तर
          उपाधि प्राप्त की जब लड़कियों की शिक्षा को हतोत्साहित किया जाता था।
          राज्य स्तरीय हॉकी खिलाड़ी और टेबल टेनिस चैंपियन। भोपाल में उन्होंने
          एक ऐसा घर बनाया जो अपनी गर्मजोशी, सुंदरता और आतिथ्य के लिए प्रसिद्ध
          हो गया। 81 वर्षों तक उन्होंने उद्देश्य, रचनात्मकता और अतुलनीय
          उदारता के साथ जीवन जिया।
        </p>

        <div className="bio-cards fade-in">
          {cards.map((card) => (
            <div className="bio-card" key={card.label}>
              <span className="bio-card-label">{card.label}</span>
              <span className="bio-card-hindi">{card.hindi}</span>
            </div>
          ))}
        </div>

        <div className="bio-cta fade-in">
          <Link to="/lifestory" className="bio-cta-link">
            Read Her Full Life Story
            <span className="bio-cta-hindi">उनकी पूरी जीवन कहानी पढ़ें</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FamilyTree() {
  return (
    <section className="family-tree" id="family">
      <div className="section-inner">
        <h2 className="section-title fade-in">Our Family</h2>
        <p className="section-title-hindi fade-in">हमारा परिवार</p>

        <div className="ft fade-in">
          {/* Generation 1: Parents */}
          <div className="ft-gen ft-gen-parents">
            <div className="ft-node">
              <span className="ft-name">Shankarlayal Bhargava</span>
              <span className="ft-name-hindi">शंकरलाल भार्गव</span>
              <span className="ft-role">Father (Doctor)</span>
            </div>
            <span className="ft-amp">&amp;</span>
            <div className="ft-node">
              <span className="ft-name">Smt. Bhargava</span>
              <span className="ft-name-hindi">श्रीमती भार्गव</span>
              <span className="ft-role">Mother</span>
            </div>
          </div>

          <div className="ft-connector" />

          {/* Siblings row */}
          <p className="ft-sibling-label">Their Children</p>
          <div className="ft-siblings">
            <div className="ft-sibling">
              <span className="ft-name">Sister</span>
              <span className="ft-name-hindi">बहन</span>
            </div>
            <div className="ft-sibling">
              <span className="ft-name">Sister</span>
              <span className="ft-name-hindi">बहन</span>
            </div>
            <div className="ft-sibling">
              <span className="ft-name">Sister</span>
              <span className="ft-name-hindi">बहन</span>
            </div>
            <div className="ft-sibling">
              <span className="ft-name">Brother</span>
              <span className="ft-name-hindi">भाई (डॉक्टर)</span>
            </div>
            <div className="ft-sibling ft-sibling-self">
              <span className="ft-name">Krishna</span>
              <span className="ft-name-hindi">कृष्णा (सबसे छोटी)</span>
            </div>
          </div>

          <div className="ft-connector" />

          {/* Generation 2: Nani & Nana */}
          <div className="ft-gen ft-gen-center">
            <div className="ft-node ft-node-highlight">
              <span className="ft-name">Krishna Bhargava</span>
              <span className="ft-name-hindi">कृष्णा भार्गव</span>
              <span className="ft-years">1940 &ndash; 2021</span>
            </div>
            <span className="ft-amp">&amp;</span>
            <div className="ft-node">
              <span className="ft-name">Nana</span>
              <span className="ft-name-hindi">नाना</span>
              <span className="ft-role">Husband</span>
            </div>
          </div>

          <div className="ft-connector" />

          {/* Generation 3 & 4: Daughters, spouses, children */}
          <div className="ft-branches">
            {/* Branch 1: Anshu & Ravi */}
            <div className="ft-branch">
              <div className="ft-couple">
                <div className="ft-node">
                  <span className="ft-name">Anshu</span>
                  <span className="ft-name-hindi">अंशु</span>
                </div>
                <span className="ft-amp">&amp;</span>
                <div className="ft-node">
                  <span className="ft-name">Ravi Bhargava</span>
                  <span className="ft-name-hindi">रवि भार्गव</span>
                </div>
              </div>
              <div className="ft-connector ft-connector-sm" />
              <div className="ft-grandchildren">
                <div className="ft-leaf">
                  <span className="ft-name">Ankita</span>
                  <span className="ft-name-hindi">अंकिता</span>
                </div>
                <div className="ft-leaf">
                  <span className="ft-name">Rishabh</span>
                  <span className="ft-name-hindi">ऋषभ</span>
                </div>
              </div>
            </div>

            {/* Branch 2: Aparna / Bebu */}
            <div className="ft-branch">
              <div className="ft-couple">
                <div className="ft-node">
                  <span className="ft-name">Aparna &ldquo;Bebu&rdquo;</span>
                  <span className="ft-name-hindi">अपर्णा &ldquo;बेबू&rdquo;</span>
                </div>
                <span className="ft-amp">&amp;</span>
                <div className="ft-node">
                  <span className="ft-name">Harsh</span>
                  <span className="ft-name-hindi">हर्ष</span>
                </div>
              </div>
              <div className="ft-connector ft-connector-sm" />
              <div className="ft-grandchildren">
                <div className="ft-leaf">
                  <span className="ft-name">Naman</span>
                  <span className="ft-name-hindi">नमन</span>
                </div>
                <div className="ft-leaf">
                  <span className="ft-name">Manan</span>
                  <span className="ft-name-hindi">मनन</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Athlete() {
  const achievements = [
    {
      title: 'State Field Hockey',
      hindi: 'राज्य स्तरीय फील्ड हॉकी',
      desc: 'Represented her state on the field hockey team, breaking barriers for women in sports.',
    },
    {
      title: 'Table Tennis Champion',
      hindi: 'टेबल टेनिस चैम्पियन',
      desc: 'Won the state championship in table tennis — a testament to her precision and competitive fire.',
    },
    {
      title: 'Coached by Dhyan Chand',
      hindi: 'ध्यानचंद से प्रशिक्षण',
      desc: 'Received coaching from "The Magician" of Indian hockey, one of the greatest players in history.',
    },
    {
      title: 'The Deceptive Style',
      hindi: 'धोखे वाली शैली',
      desc: 'Her signature: look one direction, hit the ball another. Opponents never knew what was coming.',
    },
    {
      title: 'Badminton Queen',
      hindi: 'बैडमिंटन की रानी',
      desc: 'Consistently beat everyone at badminton — friends, family, grandchildren. Nobody could match her.',
    },
    {
      title: 'Card Game Master',
      hindi: 'ताश की विशेषज्ञ',
      desc: 'Expert at thash and courtpiece. Her sharp mind and competitive spirit made her nearly unbeatable.',
    },
  ];

  return (
    <section className="athlete" id="athlete">
      <div className="section-inner">
        <h2 className="section-title fade-in">The Athlete</h2>
        <p className="section-title-hindi fade-in">खिलाड़ी</p>

        <p className="athlete-intro fade-in">
          In an era when sports were considered unfeminine, Nani didn&rsquo;t
          just play &mdash; she competed at the highest level and won. Her
          athletic spirit stayed with her throughout life, from state
          championships to beating grandchildren at badminton.
        </p>

        <div className="athlete-grid">
          {achievements.map((a, i) => (
            <div className="athlete-card fade-in" key={i}>
              <h3 className="athlete-card-title">{a.title}</h3>
              <p className="athlete-card-hindi">{a.hindi}</p>
              <p className="athlete-card-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndiaMap() {
  const cities = [
    { name: 'Bikaner', x: 290, y: 305, primary: true },
    { name: 'Bhopal', x: 385, y: 445, primary: true },
  ];

  return (
    <div className="india-map-container fade-in">
      <svg viewBox="0 0 1024 1024" className="india-map" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0,1024) scale(0.1,-0.1)">
          <path
            d="M4040 10225 c-14 -8 -40 -14 -58 -15 -64 0 -119 -22 -173 -66 -57
-47 -124 -77 -199 -89 -25 -4 -89 -29 -142 -56 l-97 -49 -17 -56 c-9 -33 -30
-71 -49 -92 -31 -34 -35 -36 -121 -42 -71 -5 -104 -13 -158 -38 -83 -39 -130
-40 -211 -7 -33 14 -91 30 -130 36 -38 6 -86 19 -106 29 -46 24 -69 26 -152
16 -65 -8 -68 -10 -82 -43 -21 -50 -19 -76 10 -103 16 -15 25 -35 25 -54 0
-17 7 -40 15 -50 22 -30 18 -58 -12 -82 -27 -21 -27 -24 -16 -65 10 -38 9 -50
-8 -88 -10 -24 -19 -51 -19 -60 0 -9 28 -44 63 -77 101 -97 102 -98 156 -95
54 2 47 11 67 -89 5 -26 12 -32 57 -44 29 -8 69 -17 90 -21 43 -7 49 -28 18
-66 -15 -19 -30 -24 -84 -27 -62 -4 -67 -6 -95 -42 -17 -20 -45 -43 -63 -50
l-32 -13 5 -123 c5 -137 -1 -162 -49 -196 -17 -13 -61 -60 -97 -106 -50 -63
-66 -90 -66 -115 0 -57 -9 -71 -56 -91 -58 -24 -107 -86 -205 -257 -77 -134
-85 -141 -164 -154 -64 -11 -92 -30 -110 -78 -10 -27 -34 -58 -60 -80 -54 -45
-101 -127 -110 -190 -4 -26 -12 -50 -17 -53 -5 -3 -30 2 -54 11 -31 12 -58 15
-87 11 -23 -4 -83 -9 -134 -12 l-92 -6 -3 49 c-3 47 -4 48 -38 51 -54 4 -102
-41 -136 -128 -25 -64 -34 -75 -96 -121 -37 -28 -68 -57 -68 -63 0 -7 -9 -21
-21 -32 -12 -10 -30 -31 -40 -46 -25 -35 -12 -72 33 -91 18 -8 44 -26 58 -41
21 -23 30 -26 61 -21 31 5 39 3 52 -16 17 -24 14 -65 -9 -111 -24 -47 -17 -87
27 -160 l41 -68 54 0 c53 0 54 0 54 -30 0 -16 11 -64 25 -107 14 -43 25 -94
25 -114 0 -28 6 -39 25 -49 22 -12 24 -18 19 -49 -3 -20 -15 -44 -26 -54 -17
-14 -19 -22 -11 -39 7 -16 5 -30 -6 -50 -14 -24 -23 -28 -58 -28 -36 0 -44 4
-48 23 -6 22 -7 22 -100 13 -78 -8 -96 -13 -101 -28 -9 -28 -70 -24 -118 10
-41 28 -41 28 -281 35 l-50 2 -3 -46 c-3 -43 -5 -47 -34 -53 -17 -3 -49 -6
-73 -6 -46 0 -82 -27 -72 -55 8 -20 122 -20 157 0 32 18 40 18 40 1 0 -8 -17
-20 -37 -27 -21 -6 -44 -16 -50 -22 -24 -18 -14 -76 27 -157 35 -69 44 -80 66
-80 15 0 48 -16 73 -35 56 -40 109 -54 211 -53 69 1 78 3 107 31 28 26 37 29
77 25 25 -3 49 -1 55 5 7 7 12 5 17 -7 10 -27 -46 -107 -104 -147 -38 -27 -65
-38 -106 -42 -31 -3 -66 -13 -78 -21 -35 -25 -95 -20 -130 9 -16 14 -35 25
-42 25 -18 0 -36 -21 -36 -42 0 -25 74 -143 125 -198 22 -25 57 -70 78 -100
20 -30 95 -123 166 -206 116 -135 134 -152 168 -157 26 -5 45 -2 62 9 17 12
37 15 73 11 41 -5 61 -1 126 27 42 19 87 37 99 40 12 4 31 18 42 32 13 16 29
24 51 24 38 0 69 32 70 73 0 19 12 38 40 63 47 43 51 76 20 147 l-21 46 27 63
c24 59 38 77 57 78 4 0 7 -6 7 -12 0 -28 17 -40 37 -30 11 6 25 7 33 2 11 -7
7 -15 -19 -39 -28 -26 -32 -36 -26 -59 3 -15 7 -43 9 -62 1 -19 8 -46 15 -59
11 -20 19 -23 49 -18 21 3 45 8 56 13 14 5 17 3 14 -7 -5 -14 -26 -23 -80 -34
-21 -4 -34 -18 -53 -55 -31 -62 -32 -87 -1 -101 21 -10 25 -20 31 -83 3 -39
13 -82 22 -94 18 -29 11 -62 -22 -114 -14 -20 -29 -56 -35 -80 -21 -93 -3
-256 34 -296 18 -20 17 -22 -9 -57 -27 -34 -27 -36 -10 -55 10 -11 31 -20 47
-20 25 0 28 -4 28 -31 0 -16 -9 -47 -19 -67 -39 -76 -41 -97 -15 -136 20 -29
23 -40 14 -56 -9 -17 -7 -28 9 -54 15 -24 21 -50 21 -95 0 -54 4 -68 35 -113
35 -50 40 -76 15 -70 -7 1 -9 -4 -6 -15 19 -62 27 -127 36 -272 l10 -164 75
-115 c59 -90 75 -122 75 -151 0 -28 9 -48 40 -85 22 -26 40 -59 40 -71 0 -15
11 -32 30 -45 38 -27 86 -128 95 -200 4 -30 18 -74 31 -97 18 -31 24 -57 24
-100 0 -32 5 -76 10 -98 6 -22 15 -74 20 -115 7 -49 22 -99 44 -145 19 -38 41
-95 50 -125 11 -37 48 -101 116 -199 55 -79 100 -148 100 -154 0 -5 15 -44 34
-87 19 -42 37 -99 41 -126 10 -74 25 -114 62 -169 20 -30 33 -62 33 -81 0 -25
12 -42 59 -87 70 -67 104 -142 56 -124 -8 4 -15 18 -15 32 0 20 -5 25 -25 25
-25 0 -33 -14 -15 -25 6 -3 10 -35 10 -71 0 -57 4 -71 31 -110 17 -25 42 -73
56 -107 31 -77 123 -175 207 -220 33 -18 68 -45 80 -64 27 -42 49 -41 97 2 22
19 49 35 61 35 13 0 43 23 80 61 53 56 58 65 58 107 0 34 8 60 32 99 36 59 58
71 161 83 41 5 76 15 87 25 21 19 72 15 122 -11 43 -22 68 -18 68 11 0 21 -8
27 -66 45 -36 11 -72 20 -80 20 -16 0 -34 31 -34 58 0 10 15 39 33 63 44 57
107 171 107 192 0 13 10 16 53 16 28 -1 59 0 67 0 8 1 27 -1 42 -5 24 -5 29
-2 44 30 15 31 16 44 6 98 -9 44 -9 89 -3 147 8 77 7 88 -13 125 -27 52 -29
193 -4 241 9 17 19 48 23 69 5 26 15 41 32 49 26 12 61 73 99 174 19 50 24 83
24 153 0 88 0 89 -34 117 -18 15 -39 38 -45 51 -15 28 -7 114 16 187 19 58 18
121 -2 170 -18 41 -19 137 -4 203 6 26 27 83 46 128 39 87 60 106 136 119 l39
6 -7 75 c-5 50 -4 74 3 74 20 0 42 -44 42 -85 0 -46 14 -65 45 -65 28 0 46 21
84 96 44 86 46 88 146 79 l85 -7 64 52 c64 50 116 104 116 120 0 4 -13 13 -30
20 -20 8 -30 19 -30 34 0 34 56 104 90 111 16 3 39 14 52 24 13 10 57 35 98
55 113 56 136 75 189 151 53 76 137 153 189 174 22 9 50 39 87 92 31 43 74 92
98 111 53 41 54 42 62 96 4 27 20 61 42 90 31 41 43 49 92 60 62 14 95 37 73
51 -7 4 -24 6 -38 3 -19 -3 -24 0 -24 15 0 48 80 74 118 40 24 -22 54 -21 100
2 20 10 53 22 72 26 77 16 119 49 194 148 25 34 36 59 36 83 0 28 6 38 30 52
37 21 38 45 4 77 l-27 25 13 92 c10 79 17 100 46 139 35 48 59 59 131 59 47 0
148 62 169 103 10 17 20 74 24 132 8 89 13 108 39 150 16 26 39 54 49 61 18
12 20 11 24 -10 6 -27 -5 -50 -38 -86 -30 -32 -45 -156 -24 -195 8 -16 11 -43
7 -79 -6 -62 8 -83 31 -48 8 12 25 22 38 22 18 0 23 6 26 31 4 39 29 59 52 40
11 -9 16 -30 16 -62 0 -52 19 -67 39 -31 7 12 22 17 53 17 36 0 43 3 46 21 2
16 -5 23 -30 30 -27 8 -34 15 -36 42 -3 28 0 32 21 32 23 0 24 3 20 53 -2 28
-9 74 -14 101 -5 27 -7 76 -3 108 l7 58 -32 0 c-34 0 -35 2 -32 71 2 40 0 46
-23 57 -15 6 -26 20 -26 31 0 10 -12 45 -27 77 -24 52 -25 62 -15 101 7 24 12
72 12 106 l0 63 -55 27 c-31 15 -68 27 -84 27 -48 0 -81 71 -46 100 8 7 15 23
15 36 0 20 5 24 29 24 34 0 48 15 53 55 l3 30 66 -3 c50 -2 69 1 79 13 11 13
9 20 -14 44 -15 15 -30 41 -35 57 -6 25 -13 29 -49 32 -29 2 -43 8 -47 21 -11
36 -53 71 -84 71 -40 0 -45 12 -21 52 11 18 20 41 20 50 0 9 18 29 40 45 42
30 51 63 29 105 -6 11 -8 22 -5 25 10 10 92 -27 116 -52 28 -30 70 -34 70 -6
0 35 46 14 66 -31 21 -46 67 -88 97 -88 11 0 31 10 44 22 14 13 27 18 33 12 5
-5 21 -65 35 -134 24 -118 28 -127 62 -156 30 -27 49 -33 122 -44 87 -12 420
-9 513 5 43 6 51 4 108 -35 l61 -41 -29 -34 c-22 -24 -31 -48 -36 -88 -7 -51
-11 -59 -74 -119 -37 -35 -85 -72 -107 -82 -46 -21 -92 -72 -105 -115 -6 -23
-3 -36 16 -65 20 -29 24 -47 24 -106 0 -86 12 -115 40 -100 11 6 20 20 20 30
0 31 18 24 25 -10 7 -32 30 -39 66 -20 16 9 19 22 19 77 0 64 1 67 40 104 26
25 40 47 40 64 0 23 3 25 50 25 61 0 65 -5 86 -142 9 -57 31 -143 49 -193 18
-49 40 -116 49 -148 10 -35 24 -60 34 -64 9 -4 34 -17 56 -31 44 -27 62 -19
47 20 -8 21 -5 32 14 58 22 30 23 34 9 72 -8 24 -14 78 -14 130 0 78 3 92 20
106 11 10 24 38 29 65 5 26 17 57 27 68 21 23 26 120 10 173 -8 27 -7 29 14
23 13 -3 36 1 53 9 28 15 30 14 56 -10 23 -22 31 -24 56 -17 68 20 67 19 60
80 -6 52 -3 61 35 136 23 44 58 97 77 119 33 36 35 42 30 89 -5 35 -14 59 -32
77 -40 41 -33 69 27 110 29 19 60 49 69 65 26 44 40 148 33 245 -6 106 6 137
53 132 26 -3 36 3 58 32 15 20 36 36 47 36 13 0 24 11 31 29 6 17 21 32 33 35
12 3 46 32 75 63 53 57 55 58 91 49 31 -8 41 -6 58 9 19 17 25 18 53 6 46 -19
94 -25 101 -12 4 6 -13 33 -38 59 -26 27 -46 56 -46 64 0 9 21 33 48 54 75 60
81 71 79 141 -1 59 -3 63 -27 68 -15 3 -42 5 -61 4 -19 -1 -52 7 -76 19 -53
27 -85 28 -108 2 -10 -11 -26 -20 -37 -20 -15 0 -18 8 -18 57 0 50 4 61 31 89
l30 31 -38 32 c-25 21 -46 31 -60 28 -13 -2 -29 3 -40 15 -18 20 -11 34 21 40
37 6 26 23 -29 46 -76 31 -104 28 -158 -13 -29 -22 -57 -35 -76 -35 -23 0 -31
-5 -31 -18 0 -11 -8 -26 -17 -35 -25 -21 -118 -5 -153 28 -45 42 -76 41 -98
-2 -7 -12 -32 -29 -56 -38 -34 -13 -45 -23 -50 -45 -4 -22 -12 -29 -32 -32
-20 -2 -30 -11 -38 -33 -23 -62 -35 -75 -72 -75 -70 0 -154 -52 -154 -96 0
-45 -20 -69 -70 -87 -27 -10 -60 -30 -73 -45 -14 -15 -38 -42 -53 -59 -25 -28
-39 -34 -104 -44 -49 -7 -82 -18 -96 -31 -19 -17 -29 -18 -65 -11 -38 7 -44
12 -47 36 -3 21 -11 29 -41 37 -21 6 -44 17 -51 25 -15 18 -36 19 -47 2 -4 -7
-20 -20 -35 -29 -23 -15 -28 -15 -38 -3 -16 19 -60 19 -96 0 -27 -14 -29 -13
-33 3 -4 22 -31 52 -46 52 -7 0 -20 9 -29 19 -30 33 -79 35 -132 7 -26 -14
-69 -30 -96 -37 -44 -12 -52 -19 -78 -65 -19 -33 -30 -66 -30 -90 0 -36 -5
-43 -67 -91 -86 -66 -96 -61 -92 51 2 58 -1 87 -11 104 -17 26 -55 29 -86 8
-11 -8 -43 -16 -69 -18 l-49 -3 -13 -65 c-7 -36 -20 -102 -29 -148 l-15 -83
25 -30 c31 -36 33 -75 6 -109 -12 -16 -20 -41 -20 -67 0 -42 0 -42 -26 -31
-20 9 -27 9 -34 -2 -5 -8 -30 -13 -68 -14 -33 -1 -67 -7 -75 -15 -20 -16 -57
-6 -75 20 -16 23 -58 25 -66 4 -7 -20 -23 -19 -92 9 -71 28 -217 51 -273 41
-39 -6 -40 -6 -49 27 -10 40 -40 48 -88 22 -33 -18 -34 -18 -58 5 -18 17 -32
22 -49 17 -18 -4 -31 2 -53 25 -86 91 -237 189 -291 189 -7 0 -27 -10 -44 -22
-26 -19 -33 -21 -62 -10 -45 16 -56 15 -101 -9 l-38 -20 -54 25 c-30 14 -70
26 -89 26 -26 0 -38 7 -55 31 -21 28 -26 30 -77 28 -53 -3 -57 -1 -110 45 -49
44 -57 47 -79 37 -42 -19 -60 -13 -120 37 -45 38 -60 58 -68 91 -10 39 -15 44
-71 66 -33 14 -73 34 -89 46 -23 17 -37 20 -76 16 -40 -5 -50 -2 -67 16 -10
12 -35 34 -54 49 l-34 28 28 21 c28 21 28 23 21 98 -6 73 -5 78 20 108 14 17
26 40 26 52 0 14 12 26 37 38 24 12 44 31 54 53 10 19 29 46 43 59 54 51 28
84 -123 156 l-62 29 2 41 c3 51 -5 65 -38 65 -15 0 -37 10 -50 22 -16 15 -42
24 -86 29 -53 6 -66 12 -91 41 -15 18 -35 49 -43 68 -31 71 -65 88 -104 49
-27 -27 -33 -20 -20 29 9 30 8 47 -3 73 -8 19 -17 53 -21 77 -5 28 -13 46 -25
50 -25 10 -68 74 -75 115 -5 23 -1 45 9 65 30 57 66 59 95 5 6 -13 30 -32 53
-44 l41 -21 71 50 c72 51 89 79 70 120 -4 10 -12 35 -18 56 -10 37 -15 41 -59
52 -56 14 -87 38 -87 67 0 12 -10 32 -22 45 -19 19 -23 34 -22 79 2 49 5 57
35 83 25 20 49 29 87 33 30 3 56 8 58 10 3 2 11 37 18 76 16 81 36 111 76 111
30 0 80 34 80 55 0 7 16 44 35 81 19 37 35 81 35 98 0 17 9 45 20 61 26 39 26
75 1 75 -10 0 -38 -7 -61 -15 -23 -8 -44 -15 -45 -15 -1 0 -8 13 -15 29 -8 21
-21 32 -43 37 -43 9 -67 32 -67 64 0 15 -6 33 -14 39 -23 19 -79 23 -106 6z"
            fill="var(--sky-blue)"
            fillOpacity="0.15"
            stroke="var(--sky-blue-deep)"
            strokeWidth="8"
            strokeOpacity="0.4"
          />
        </g>

        {/* Route line connecting cities */}
        <polyline
          points={cities.map(c => `${c.x},${c.y}`).join(' ')}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeDasharray="6,4"
          opacity="0.5"
        />

        {/* City pins */}
        {cities.map((city) => (
          <g key={city.name}>
            <circle
              cx={city.x}
              cy={city.y}
              r="14"
              fill="none"
              stroke={city.name === 'Bhopal' ? 'var(--gold)' : 'var(--sky-blue-deep)'}
              strokeWidth="1"
              opacity="0.3"
            />
            <circle
              cx={city.x}
              cy={city.y}
              r="6"
              fill={city.name === 'Bhopal' ? 'var(--gold)' : 'var(--sky-blue-deep)'}
            />
            <text
              x={city.x}
              y={city.y - 20}
              textAnchor="middle"
              className="india-map-label"
              fill="var(--navy)"
              fontSize="22"
              fontWeight="600"
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function Timeline() {
  const stops = [
    {
      years: '1940',
      city: 'Born on Janmashtami',
      desc: 'September 7th, 1940 in Bikaner, Rajasthan. The youngest and most pampered child in a distinguished family of doctors and army fighters. Born on Lord Krishna\'s birthday — a name and spirit she would carry for a lifetime. She was treated like a princess — with royal treatment, an ambassador car, and people dropping off food for her family. She was embarrassed by the attention, but it reflected the respect her family commanded.',
      hindi: '7 सितम्बर 1940, बीकानेर, राजस्थान। डॉक्टरों और सेना के योद्धाओं के प्रतिष्ठित परिवार की सबसे छोटी और सबसे लाडली संतान। भगवान कृष्ण के जन्मदिन पर जन्म। राजसी व्यवहार — एम्बेसडर कार, लोग खाना लेकर आते थे।',
    },
    {
      years: '1950s',
      city: 'Education Against the Odds',
      desc: 'Attended a total girls school in Bikaner and went on to earn a Master\'s degree in Hindi & Sanskrit — an extraordinary achievement at a time when girls were actively discouraged from pursuing education. Her father Shankarlayal Bhargava, a doctor, ensured all his children received the best education.',
      hindi: 'बीकानेर में लड़कियों के स्कूल में पढ़ाई और हिन्दी व संस्कृत में स्नातकोत्तर उपाधि प्राप्त की — जब लड़कियों की शिक्षा को हतोत्साहित किया जाता था। उनके पिता शंकरलाल भार्गव ने सभी बच्चों को सर्वोत्तम शिक्षा दिलाई।',
    },
    {
      years: '1950s–60s',
      city: 'The Athlete',
      desc: 'Became a state-level field hockey player and table tennis state champion. Received coaching from the legendary Dhyan Chand. Her signature deceptive playing style made her one of the best.',
      hindi: 'राज्य स्तरीय फील्ड हॉकी खिलाड़ी और टेबल टेनिस चैंपियन बनीं। महान ध्यानचंद से प्रशिक्षण प्राप्त किया।',
    },
    {
      years: 'May 1, 1962',
      city: 'Marriage & Partnership',
      desc: 'Married her life partner, beginning a journey of nearly six decades together. A partnership built on love, exploration, and shared devotion to family.',
      hindi: 'जीवन साथी से विवाह, लगभग छह दशक लंबी यात्रा की शुरुआत। प्रेम, अन्वेषण और परिवार के प्रति समर्पण।',
    },
    {
      years: '1960s–2021',
      city: 'Life in Bhopal',
      desc: 'Made Bhopal home. Built a legendary household at BHEL — immaculate gardens, spectacular hospitality, award-winning presence at the Ladies Club. The heart of the community for decades.',
      hindi: 'भोपाल को अपना घर बनाया। भेल में एक अद्वितीय घर बनाया — सुंदर बगीचे, शानदार आतिथ्य, लेडीज़ क्लब में पुरस्कार। दशकों तक समुदाय का केंद्र।',
    },
    {
      years: '2012',
      city: 'Golden Anniversary',
      desc: 'Celebrated 50 years of marriage with a grand celebration, bringing together family and friends from across the country. A testament to enduring love and partnership.',
      hindi: '50 वर्ष के विवाह का भव्य उत्सव, देश भर से परिवार और मित्रों को एक साथ लाया। स्थायी प्रेम और साझेदारी का प्रमाण।',
    },
  ];

  return (
    <section className="timeline" id="journey">
      <div className="section-inner">
        <h2 className="section-title fade-in">Her Journey</h2>
        <p className="section-title-hindi fade-in">उनकी यात्रा</p>

        <IndiaMap />

        <div className="timeline-container">
          {stops.map((stop, i) => (
            <div className="timeline-item fade-in" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-years">{stop.years}</div>
              <h3 className="timeline-city">{stop.city}</h3>
              <p className="timeline-desc">{stop.desc}</p>
              <p className="timeline-desc-hindi">{stop.hindi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hospitality() {
  const dishes = [
    { name: 'Lachhe ka Achaar', hindi: 'लच्छे का अचार', desc: 'Her legendary pickle, famous throughout the community' },
    { name: 'Katthal ka Achaar', hindi: 'कटहल का अचार', desc: 'Jackfruit pickle — a specialty no one could replicate' },
    { name: 'Signature Ketchup', hindi: 'सिग्नेचर केचप', desc: 'Homemade ketchup that put store brands to shame' },
    { name: 'Paneer Paratha Roll', hindi: 'पनीर पराठा रोल', desc: 'Beloved by everyone, perfected over decades' },
    { name: 'Cutlets, Samosas & Breadrolls', hindi: 'कटलेट, समोसे और ब्रेडरोल', desc: 'Crispy, golden, and always in abundant supply' },
    { name: 'Tri-Color Sandwiches', hindi: 'तिरंगा सैंडविच', desc: 'With Kissan jam and Amul butter — a classic' },
    { name: 'Gulab Jamun', hindi: 'गुलाब जामुन', desc: 'The finest anyone had ever tasted — simply legendary' },
    { name: 'Aloo Paratha & Aamrus', hindi: 'आलू पराठा और आमरस', desc: 'Summer vacation magic — the dish every grandchild craved' },
  ];

  return (
    <section className="hospitality" id="hospitality">
      <div className="section-inner">
        <h2 className="section-title fade-in">The Art of Hospitality</h2>
        <p className="section-title-hindi fade-in">आतिथ्य की कला</p>

        <p className="hospitality-intro fade-in">
          Nani &mdash; known lovingly as &ldquo;Mummy&rdquo; by her daughters &mdash; was the
          best hostess anyone knew. Her table always groaned under
          the weight of generous spreads. She threw spectacular parties that
          left guests talking for weeks &mdash; Anshu and Aparna&rsquo;s birthday
          parties were the best, with the finest cakes and decorations. Her famous
          chaat parties were legendary in the BHEL community. She was a pioneer &mdash;
          among the first to own a pressure cooker, with friends coming to her home
          to learn how to use it. An early adopter of the solar cooker.
        </p>
        <p className="hospitality-intro hospitality-intro-hindi fade-in">
          नानी सबसे अच्छी मेज़बान थीं। उनकी मेज़ हमेशा उदार भोजन से भरी
          रहती थी। उन्होंने शानदार पार्टियाँ दीं जिनकी चर्चा हफ्तों तक
          होती थी। वे अग्रणी थीं — प्रेशर कुकर रखने वालों में सबसे पहले,
          सोलर कुकर की शुरुआती उपयोगकर्ता।
        </p>

        <h3 className="hospitality-subtitle fade-in">Her Famous Dishes</h3>
        <p className="hospitality-subtitle-hindi fade-in">उनके प्रसिद्ध व्यंजन</p>

        <div className="hospitality-grid">
          {dishes.map((dish, i) => (
            <div className="hospitality-card fade-in" key={i}>
              <div className="hospitality-card-name">{dish.name}</div>
              <div className="hospitality-card-hindi">{dish.hindi}</div>
              <div className="hospitality-card-desc">{dish.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Creative() {
  return (
    <section className="creative" id="creative">
      <div className="section-inner">
        <h2 className="section-title fade-in">The Creative Spirit</h2>
        <p className="section-title-hindi fade-in">रचनात्मक आत्मा</p>

        {/* Garden Design */}
        <div className="creative-block fade-in">
          <h3 className="creative-block-title">The Garden</h3>
          <p className="creative-block-title-hindi">बगीचा</p>
          <div className="section-photo fade-in">
            <img src={`${import.meta.env.BASE_URL}photos/bhopal-garden.jpg`} alt="The beautiful Bhopal home garden" loading="lazy" />
            <div className="section-photo-caption">The Bhopal Garden</div>
          </div>
          <div className="creative-quote-hindi">
            उन्होंने बगीचे का पूरा लेआउट खुद डिज़ाइन किया — सुंदर फूलों की क्यारियाँ, सुव्यवस्थित लॉन, और छायादार पेड़। यह उनका अभयारण्य था।
          </div>
          <p className="creative-quote-english">
            She designed the entire garden layout herself &mdash; perfectly manicured lawns, carefully
            arranged flower beds, and trees that provided shade and beauty. Her flower arrangements
            were works of art. The garden was her sanctuary, and it showed in every leaf and bloom.
          </p>
        </div>

        {/* Interior Design */}
        <div className="creative-block fade-in">
          <h3 className="creative-block-title">The Home</h3>
          <p className="creative-block-title-hindi">घर</p>
          <div className="creative-quote-hindi">
            घर में हर चीज़ अपनी जगह पर थी। हमेशा बेदाग़ साफ़, खूबसूरती से सजाया हुआ। हस्तनिर्मित कवर, सजावटी स्पर्श — हर विवरण उनके व्यक्तित्व को दर्शाता था।
          </div>
          <p className="creative-quote-english">
            Everything had its place. The home was always immaculate &mdash; elegant furniture
            adorned with handmade covers and decorative touches. Even their car was kept in
            pristine condition. The Bhopal house was a masterpiece of her own creation, warm and
            welcoming and perfectly maintained.
          </p>
        </div>

        {/* Sewing & Stitching */}
        <div className="creative-block fade-in">
          <h3 className="creative-block-title">The Seamstress</h3>
          <p className="creative-block-title-hindi">सिलाई कला</p>
          <div className="section-photo fade-in">
            <img src={`${import.meta.env.BASE_URL}photos/nani-sewing.jpg`} alt="Nani at her sewing machine by the window" loading="lazy" />
            <div className="section-photo-caption">At the Sewing Machine</div>
          </div>
          <div className="creative-quote-hindi">
            उन्होंने अंकिता के पहले जन्मदिन के लिए अद्भुत कपड़े सिले। मनन के लिए कुर्सी का कवर और स्वेटर बनाया। हर सिला हुआ कपड़ा सुंदर और पूर्णतः सटीक होता था।
          </div>
          <p className="creative-quote-english">
            She stitched amazing dresses for Ankita&rsquo;s first birthday. Made Manan&rsquo;s
            chair seat cover and sweater. With her sewing machine, she could bring any vision
            to life &mdash; garments that were both beautiful and perfectly tailored.
          </p>
        </div>

        {/* The Storyteller */}
        <div className="creative-block fade-in">
          <h3 className="creative-block-title">The Storyteller</h3>
          <p className="creative-block-title-hindi">किस्सागो</p>
          <div className="creative-quote-hindi">
            उनकी &ldquo;भूतों की कहानी&rdquo; पीढ़ियों तक मशहूर रहीं। रोमांचक कहानियाँ जो बच्चों को मंत्रमुग्ध कर देती थीं।
          </div>
          <p className="creative-quote-english">
            Her &ldquo;bhootho ki kahani&rdquo; &mdash; ghost stories &mdash; were legendary,
            entertaining generations of children with spine-tingling tales told with perfect
            dramatic timing. She also played board games for hours with her sharp mind and
            competitive spirit, making every moment with grandchildren magical.
          </p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const base = import.meta.env.BASE_URL;
  const photos = [
    { src: `${base}photos/young-nani-portrait.jpg`, alt: 'Young Krishna — vintage portrait from Bikaner', caption: 'Young Krishna, Bikaner' },
    { src: `${base}photos/nani-nana-garden.jpg`, alt: 'Nani and Nana together in the garden', caption: 'Nani & Nana' },
    { src: `${base}photos/family-of-four.jpg`, alt: 'The Bhargava family of four — Nana, Nani, Anshu and Bebu', caption: 'The Bhargava Family' },
    { src: `${base}photos/mother-daughter.jpg`, alt: 'Beautiful mother-daughter embrace', caption: "A Mother\u2019s Love" },
    { src: `${base}photos/nani-sewing.jpg`, alt: 'Nani at her sewing machine by the window', caption: 'The Seamstress' },
    { src: `${base}photos/nani-nana-event.jpg`, alt: 'Nani and Nana at a celebration, Nani in green saree', caption: 'Golden Together' },
    { src: `${base}photos/wedding-blessings.jpg`, alt: 'Grandparents blessing the couple at wedding', caption: "Blessings at Ankita\u2019s Wedding" },
    { src: `${base}photos/family-card-game.jpg`, alt: 'Family playing cards together on the bed', caption: 'Masti Time' },
    { src: `${base}photos/christmas-grandkids.jpg`, alt: 'Christmas celebration with grandchildren', caption: 'Christmas with Grandchildren' },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="section-inner">
        <h2 className="section-title fade-in">Remembering Her</h2>
        <p className="section-title-hindi fade-in">उनकी यादें</p>

        <div className="gallery-grid fade-in">
          {photos.map((photo, i) => (
            <div className="gallery-item" key={i}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery-item-caption">{photo.caption}</div>
            </div>
          ))}
        </div>

        <div className="gallery-links fade-in">
          <Link to="/lifestory" className="gallery-link">
            &#128214;&ensp;Read Her Life Story
          </Link>
        </div>
      </div>
    </section>
  );
}

function Spiritual() {
  return (
    <section className="spiritual" id="spiritual">
      <div className="section-inner">
        <h2 className="section-title fade-in">Faith &amp; Philosophy</h2>
        <p className="section-title-hindi fade-in">आस्था और दर्शन</p>

        <div className="spiritual-items">
          <div className="spiritual-item fade-in">
            <h3 className="spiritual-item-title">
              Monday Mandir Visits &mdash; हर सोमवार मंदिर
            </h3>
            <p className="spiritual-hindi">
              हर सोमवार मंदिर जाना उनकी आध्यात्मिक दिनचर्या का अभिन्न अंग था। यह प्रथा उनके सप्ताह को आधार देती थी।
            </p>
            <p className="spiritual-english">
              Every Monday, she visited the mandir &mdash; a spiritual practice that anchored
              her week. This unwavering devotion was a cornerstone of her life, rain or shine.
            </p>
          </div>

          <div className="spiritual-item fade-in">
            <h3 className="spiritual-item-title">The Home Mandir</h3>
            <p className="spiritual-hindi">
              घर में एक बड़ा मंदिर था जहाँ वे रोज़ाना प्रार्थना और ध्यान करती थीं। यह घर का आध्यात्मिक केंद्र था।
            </p>
            <p className="spiritual-english">
              She maintained a large mandir in her home where she could pray and meditate daily.
              It was the spiritual heart of the household &mdash; kept with the same meticulous
              care she brought to everything else.
            </p>
          </div>

          <div className="spiritual-item fade-in">
            <h3 className="spiritual-item-title">The Philosopher</h3>
            <div className="section-photo section-photo-sm fade-in">
              <img src={`${import.meta.env.BASE_URL}photos/nani-reading.jpg`} alt="Nani reading a book, seated on a mat" loading="lazy" />
              <div className="section-photo-caption">Lost in a Book</div>
            </div>
            <p className="spiritual-hindi">
              उन्होंने भारत के महानतम धार्मिक और दार्शनिक ग्रंथों का विस्तृत अध्ययन किया। उनका दृष्टिकोण पारंपरिक मूल्यों और प्रगतिशील सोच का मिश्रण था।
            </p>
            <p className="spiritual-english">
              She read extensively from India&rsquo;s greatest religious and philosophical texts.
              This study informed her worldview and gave her a perspective that blended traditional
              values with progressive thinking. She understood the deeper meanings behind rituals
              and traditions, and lived her faith through kindness, generosity, and service to others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Travels() {
  const destinations = [
    { name: 'Kodaikanal', hindi: 'कोडाइकनाल', desc: 'Misty mountains of Tamil Nadu' },
    { name: 'Vaishnodevi', hindi: 'वैष्णोदेवी', desc: 'Sacred pilgrimage in the Himalayas' },
    { name: 'Mussoorie', hindi: 'मसूरी', desc: 'The queen of hill stations' },
    { name: 'Haridwar', hindi: 'हरिद्वार', desc: 'The holy city on the Ganges' },
    { name: 'Disney World', hindi: 'डिज़्नी वर्ल्ड', desc: 'The magic kingdom in the USA' },
    { name: 'Niagara Falls', hindi: 'नियाग्रा फ़ॉल्स', desc: 'The thundering waterfalls' },
    { name: 'Singapore', hindi: 'सिंगापुर', desc: 'The garden city of Asia' },
    { name: 'Shaurya Smarak', hindi: 'शौर्य स्मारक', desc: 'A tribute to the armed forces in Bhopal' },
    { name: 'Kerwa Dam', hindi: 'केरवा डैम', desc: 'Monday picnics — their beloved tradition' },
  ];

  return (
    <section className="travels" id="travels">
      <div className="section-inner">
        <h2 className="section-title fade-in">The Explorers</h2>
        <p className="section-title-hindi fade-in">यायावर</p>

        <p className="travels-intro fade-in">
          Nani and Nana were true adventurers who never stopped exploring.
          From sacred temples to magical theme parks, from misty mountains to
          thundering waterfalls, they traveled the world together. Every
          journey was an opportunity to see new places, experience different
          cultures, and create memories.
        </p>

        <div className="travels-grid">
          {destinations.map((dest, i) => (
            <div className="travels-card fade-in" key={i}>
              <div className="travels-card-name">{dest.name}</div>
              <div className="travels-card-hindi">{dest.hindi}</div>
              <div className="travels-card-desc">{dest.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SummerVacations() {
  return (
    <section className="summer" id="summer">
      <div className="section-inner">
        <h2 className="section-title fade-in">Summer Vacations at Nani&rsquo;s</h2>
        <p className="section-title-hindi fade-in">नानी के घर गर्मी की छुट्टियाँ</p>

        <div className="summer-content fade-in">
          <div className="summer-block">
            <div className="summer-quote-hindi">
              हर गर्मी, सभी बच्चे भोपाल में नानी-नाना के घर इकट्ठा होते थे। नानी सबके लिए ढेर सारा खाना बनाती थीं। बच्चे स्विमिंग पूल जाते, खेल खेलते, और ऐसी यादें बनाते जो हमेशा याद रहेंगी।
            </div>
            <p className="summer-quote-english">
              Every summer, children from every branch of the family would gather at Nani
              and Nana&rsquo;s home in Bhopal. Nani would cook elaborate meals &mdash; aloo ki
              paratha with aamrus was the undisputed favourite. The children went swimming at
              the pool, played games, and created memories they would cherish forever.
            </p>
          </div>

          <div className="summer-block">
            <h3 className="summer-block-title">The Grandmother Extraordinaire</h3>
            <p className="summer-block-title-hindi">अद्वितीय नानी</p>
            <div className="section-photo fade-in">
              <img src={`${import.meta.env.BASE_URL}photos/grandparents-couch.jpg`} alt="Grandparents on couch with family visiting" loading="lazy" />
              <div className="section-photo-caption">Family Visits at the Bhopal Home</div>
            </div>
            <div className="summer-quote-hindi">
              वे हर पोते-पोती के जन्म पर उपस्थित रहीं। ताश सिखाया, कहानियाँ सुनाईं, बैडमिंटन खेलीं, और हर बच्चे को विशेष महसूस कराया। क्रिसमस पर सुंदर पेड़ सजाए और सबके लिए उपहार चुने।
            </div>
            <p className="summer-quote-english">
              She was there for the birth of each grandchild. She taught them card games,
              told them spine-tingling ghost stories, played badminton with them, and made
              each one feel uniquely special. Christmas celebrations featured beautifully
              decorated trees and carefully chosen gifts for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportantDates() {
  return (
    <section className="important-dates" id="dates">
      <div className="section-inner">
        <h2 className="section-title fade-in">Important Dates</h2>
        <p className="section-title-hindi fade-in">महत्वपूर्ण तिथियाँ</p>

        <div className="dates-grid fade-in">
          <div className="date-card">
            <div className="date-label">Birth</div>
            <div className="date-label-hindi">जन्म</div>
            <div className="date-value">September 7, 1940</div>
          </div>
          <div className="date-card">
            <div className="date-label">Passing</div>
            <div className="date-label-hindi">निधन</div>
            <div className="date-value">December 4, 2021</div>
          </div>
          <div className="date-card">
            <div className="date-label">Chautha (4th Day)</div>
            <div className="date-label-hindi">चौथा</div>
            <div className="date-value">December 7, 2021</div>
          </div>
          <div className="date-card">
            <div className="date-label">Daswan (10th Day)</div>
            <div className="date-label-hindi">दसवाँ</div>
            <div className="date-value">December 13, 2021</div>
          </div>
          <div className="date-card">
            <div className="date-label">Tehrvi (13th Day)</div>
            <div className="date-label-hindi">तेरहवीं</div>
            <div className="date-value">December 16, 2021</div>
          </div>
          <div className="date-card">
            <div className="date-label">Monthly Shraddh</div>
            <div className="date-label-hindi">मासिक श्राद्ध</div>
            <div className="date-value">4th of each month</div>
          </div>
          <div className="date-card">
            <div className="date-label">Barsi (Anniversary)</div>
            <div className="date-label-hindi">बरसी</div>
            <div className="date-value">December 4 each year</div>
          </div>
        </div>

        <a
          href="https://www.econdolence.com/learning-center/religion-and-culture/hinduism/hinduism-periods-of-mourning"
          target="_blank"
          rel="noopener noreferrer"
          className="dates-link fade-in"
        >
          Learn about Hindu mourning practices
        </a>
      </div>
    </section>
  );
}

function Diya() {
  const [lit, setLit] = useState(false);

  return (
    <div className="diya-container fade-in">
      <button
        className={`diya ${lit ? 'diya-lit' : ''}`}
        onClick={() => setLit(true)}
        aria-label={lit ? 'Diya is lit' : 'Light a diya'}
      >
        {lit && (
          <div className="diya-glow" />
        )}
        <div className="diya-flame-wrap">
          {lit && (
            <>
              <div className="diya-flame" />
              <div className="diya-flame-inner" />
            </>
          )}
          <div className="diya-wick" />
        </div>
        <svg viewBox="0 0 80 40" className="diya-bowl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="8" rx="28" ry="8" fill={lit ? '#C4A35A' : '#a89070'} />
          <path d="M12 8 Q12 36 40 36 Q68 36 68 8 Z" fill={lit ? '#b8943e' : '#96806a'} />
          <ellipse cx="40" cy="8" rx="22" ry="5" fill={lit ? '#e8c96a' : '#b8a890'} opacity="0.6" />
        </svg>
      </button>
      <p className="diya-label">
        {lit ? 'Diya lit in her memory' : 'Press to light a diya in her memory'}
      </p>
      <p className="diya-label-hindi">
        {lit ? 'उनकी याद में दिया जलाया' : 'उनकी याद में दिया जलाने के लिए दबाएँ'}
      </p>
    </div>
  );
}

function Closing() {
  return (
    <section className="closing" id="closing">
      <div className="closing-inner">
        <div className="fade-in">
          <div className="closing-hindi">
            &ldquo;रचनात्मक, स्वागतशील, गर्मजोश &mdash; ये शब्द केवल उस महिला के सार की शुरुआत हैं जिसने दुनिया को सिर्फ़ अपने होने से उज्जवल बनाया।&rdquo;
          </div>
          <p className="closing-english">
            &ldquo;Creative, Welcoming, Warm &mdash; these words only begin to capture the essence
            of a woman who made the world brighter simply by being in it.&rdquo;
          </p>
        </div>

        <Divider />

        <p className="closing-legacy fade-in">
          She didn&rsquo;t just live 81 years. She broke barriers for women in
          education and sports. She built a home that became the heart of a
          community. She raised daughters who became strong, accomplished
          women. She fed everyone who walked through her door. She told stories
          that lit up children&rsquo;s eyes. She gardened with the precision of
          an artist and played badminton with the fire of a champion. Her light
          continues through all of us.
        </p>
        <p className="closing-legacy-hindi fade-in">
          उन्होंने सिर्फ़ 81 साल नहीं जिए। उन्होंने शिक्षा और खेल में महिलाओं
          के लिए बाधाएँ तोड़ीं। एक ऐसा घर बनाया जो समुदाय का दिल बन गया।
          मज़बूत और कुशल बेटियाँ पालीं। हर आने वाले को खिलाया। ऐसी कहानियाँ
          सुनाईं जो बच्चों की आँखों में चमक लाती थीं। बगीचे में कलाकार की
          तरह काम किया और बैडमिंटन में चैंपियन की तरह खेलीं। उनका प्रकाश हम
          सभी में जीवित है।
        </p>

        <Diya />

        <div className="fade-in">
          <p className="closing-om">ॐ शान्ति शान्ति शान्ति</p>
          <p className="closing-shanti">Om Shanti Shanti Shanti</p>
        </div>

        <p className="closing-years fade-in">
          <span>1940</span> &mdash; <span>2021</span>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/lifestory" className="footer-link">Her Life Story</Link>
          <a
            href={`https://wa.me/?text=${encodeURIComponent('In loving memory of Krishna Bhargava (1940–2021). Creative, welcoming, and warm. A life of purpose, strength, and love.\n\nhttps://mananb77.github.io/nani/')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Share on WhatsApp
          </a>
        </div>
        <p className="footer-family">The Bhargava Family</p>
        <p className="footer-family-hindi">भार्गव परिवार</p>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? 'back-to-top-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      &#9650;
    </button>
  );
}

function App() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <Nav />
      <Hero />
      <Bio />
      <FamilyTree />
      <Timeline />
      <Hospitality />
      <Creative />
      <Athlete />
      <Travels />
      <SummerVacations />
      <Gallery />
      <Spiritual />
      <ImportantDates />
      <Closing />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
