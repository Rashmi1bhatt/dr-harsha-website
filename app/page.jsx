import Image from 'next/image';
import Navbar from '../components/Navbar';

const credentials = [
  ['18+', 'Years of neurosurgical experience'],
  ['FRCS', 'Neurosurgery · Royal College of Surgeons'],
  ['CCT', 'UK specialist certification'],
  ['3,500+', 'Cases in his operative experience'],
];

const expertise = [
  ['01', 'Brain & Cranial Surgery', 'Specialist assessment and surgical care for complex cranial conditions, including brain and skull-base tumours.'],
  ['02', 'Spine Surgery', 'Surgical care for complex spinal conditions, deformity, tumours, trauma and selected minimally invasive procedures.'],
  ['03', 'Paediatric Neurosurgery', 'Neurosurgical care for children with brain, spinal, congenital and cerebrospinal fluid disorders.'],
  ['04', 'Neuro-Oncology', 'Specialist experience in the surgical management of brain and spinal tumours.'],
  ['05', 'CSF Disorders', 'Assessment and treatment of hydrocephalus, Chiari malformation, syringomyelia and other CSF disorders.'],
  ['06', 'Neurotrauma', 'Assessment and surgical management of complex head and spinal injuries and urgent neurosurgical conditions.'],
];

const appointmentUrl = 'https://www.kauveryhospitalsbangalore.com/book-an-appointment?hospital_ids=1&speciality_ids=4,27,42&doctor_name=Dr.%20Harsha%20Narayanamurthy';
const youtubeUrl = 'https://www.youtube.com/watch?v=Af7oR9kGyMw';

export default function Home() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <section className="hero" id="home">
          <div className="hero-orb" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">UK-trained · FRCS (Neurosurgery) · CCT (UK)</p>
              <h1>Dr. Harsha<br /><em>Narayanamurthy</em></h1>
              <div className="hero-rule" />
              <p className="hero-title">Consultant Neurosurgeon</p>
              <p className="hero-lead">Specialist neurosurgical care for complex brain and spine conditions, combining UK training and consultant experience with a personalised approach to every patient.</p>
              <p className="hero-note">Clear communication, careful decision-making and treatment planning tailored to the individual.</p>
              <div className="hero-actions">
                <a className="button primary" href={appointmentUrl} target="_blank" rel="noreferrer">Book an appointment <span>↗</span></a>
                <a className="button secondary" href="#expertise">Explore expertise <span>↓</span></a>
              </div>
              <p className="qualifications">MBBS · MRCSEd · FRCS (Neurosurgery) · CCT (UK)</p>
            </div>
            <div className="hero-visual">
              <div className="portrait-backdrop" />
              <div className="portrait-frame">
                <Image src="/images/harsha.jpg" alt="Dr. Harsha Narayanamurthy" width={587} height={578} priority sizes="(max-width: 900px) 80vw, 46vw" />
              </div>
              <div className="experience-card"><strong>18+</strong><span>years of<br />neurosurgical experience</span></div>
              <div className="hero-caption">Bengaluru · India</div>
            </div>
          </div>
        </section>

        <section className="credential-bar" aria-label="Professional credentials">
          <div className="container credential-grid">{credentials.map(([v, l]) => <div className="credential" key={v}><strong>{v}</strong><span>{l}</span></div>)}</div>
        </section>

        <section className="section about" id="about">
          <div className="container two-col">
            <div>
              <p className="eyebrow">About Dr. Harsha</p>
              <h2>International training.<br /><em>Personalised care.</em></h2>
              <p className="intro">A neurosurgical practice built around specialist training, careful decision-making and communication that helps patients understand their options.</p>
              <a className="text-link" href="#expertise">Discover his areas of expertise <span>↗</span></a>
            </div>
            <div className="about-panel">
              <div className="monogram">HN</div>
              <div>
                <p>Dr. Harsha Narayanamurthy is a Consultant Neurosurgeon with specialist experience across India and the United Kingdom.</p>
                <p>His UK career included consultant experience at Queen&apos;s Medical Centre in Nottingham and Leeds General Infirmary, alongside specialist fellowships in spinal surgery and neurosurgical oncology.</p>
                <p>His clinical interests include complex cranial and spinal surgery, neuro-oncology, paediatric neurosurgery, spinal deformity, trauma and cerebrospinal fluid disorders.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section expertise" id="expertise">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">Areas of expertise</p><h2>Specialist care across<br /><em>brain, spine & nervous system</em></h2></div>
              <p>Clear, specialist information will sit behind each area as we expand the website into a patient education resource.</p>
            </div>
            <div className="expertise-grid">{expertise.map(([n, t, d]) => <article className="expertise-card" key={n}><span className="number">{n}</span><h3>{t}</h3><p>{d}</p><span className="arrow">↗</span></article>)}</div>
          </div>
        </section>

        <section className="section media" id="media">
          <div className="container">
            <div className="section-heading media-heading"><div><p className="eyebrow">Media & talks</p><h2>Hear from <em>Dr. Harsha</em></h2></div><p>Interviews, educational discussions, podcasts and professional talks will form a growing library of his public work.</p></div>
            <a className="media-card" href={youtubeUrl} target="_blank" rel="noreferrer">
              <div className="video-art"><div className="play">▶</div><span>VIDEO INTERVIEW · MARCH 2026</span></div>
              <div className="media-copy"><h3>The Importance of Neuro Rehabilitation</h3><p>Dr. Harsha Narayanamurthy discusses neuro rehabilitation and its role in recovery, function and independence.</p><span className="text-link">Watch on YouTube <b>↗</b></span></div>
            </a>
          </div>
        </section>

        <section className="section academic">
          <div className="container two-col academic-grid">
            <div><p className="eyebrow">Academic & professional</p><h2>Beyond the<br /><em>operating room.</em></h2></div>
            <div><p className="intro">Research, medical education and professional teaching are important parts of Dr. Harsha&apos;s career. We will build a structured library of publications, presentations and teaching contributions, linking to original sources wherever available.</p><div className="pills"><span>Research & publications</span><span>Medical education</span><span>Professional talks</span></div></div>
          </div>
        </section>

        <section className="section appointments" id="contact">
          <div className="container appointment-panel">
            <div><p className="eyebrow">Appointments</p><h2>Choose where you would like to <em>consult.</em></h2><p>Appointment links will point to the relevant hospital or clinic so patients can access current availability.</p></div>
            <div className="location-grid">
              <a className="location" href={appointmentUrl} target="_blank" rel="noreferrer"><small>KAUVERY HOSPITAL</small><strong>Electronic City</strong><span>Book appointment ↗</span></a>
              <a className="location" href="https://www.apolloclinic.com/find-a-doctor/best-neuro-surgeon-in-bengaluru-karnataka/dr-harsha-narayanamurthy" target="_blank" rel="noreferrer"><small>APOLLO CLINIC</small><strong>Electronic City</strong><span>View profile ↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="container footer"><div><strong>DR. HARSHA NARAYANAMURTHY</strong><span>Consultant Neurosurgeon · Bengaluru</span></div><div className="footer-links"><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#media">Media</a><a href="#contact">Appointments</a></div></div><div className="container copyright">© {new Date().getFullYear()} Dr. Harsha Narayanamurthy. All rights reserved.</div></footer>
    </div>
  );
}
