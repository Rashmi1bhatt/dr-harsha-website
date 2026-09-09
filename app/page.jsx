import Image from 'next/image';
import Navbar from '../components/Navbar';

const credentials = [
  ['18+', 'Years of neurosurgical experience'],
  ['FRCS', 'Neurosurgery · Royal College of Surgeons'],
  ['CCT', 'UK specialist certification'],
  ['3,500+', 'Cases in operative experience'],
];

const proofPoints = [
  ['18+', 'Years of neurosurgical experience'],
  ['3,500+', 'Cases in his operative logbook'],
  ['400+', 'Paediatric neurosurgical cases'],
  ['UK', 'Consultant experience in Nottingham & Leeds'],
];

const expertise = [
  ['01', 'Brain Surgery', 'Specialist assessment and surgical care for complex brain conditions, including brain and skull-base tumours.'],
  ['02', 'Spine Surgery', 'Surgical care for complex spinal conditions, deformity, tumours, trauma and selected minimally invasive procedures.'],
  ['03', 'Paediatric Neurosurgery', 'More than 400 paediatric neurosurgical cases, including paediatric tumours, vascular conditions, CSF disorders, intraventricular pathology and spinal dysraphism.'],
  ['04', 'Neuro-Oncology', 'Specialist experience in the surgical management of brain and spinal tumours across both paediatric and adult patients.'],
  ['05', 'CSF Disorders', 'Assessment and treatment of hydrocephalus, Chiari malformation, syringomyelia, dysraphism and other CSF disorders.'],
  ['06', 'Neuro-trauma', 'Assessment and surgical management of complex head and spinal injuries, supported by extensive cranial and spinal trauma experience.'],
];

const appointmentUrl = 'https://www.kauveryhospitalsbangalore.com/book-an-appointment?hospital_ids=1&speciality_ids=4,27,42&doctor_name=Dr.%20Harsha%20Narayanamurthy';
const apolloNeeladriUrl = 'https://www.apolloclinic.com/clinic-locator/india/karnataka/bengaluru/electronic-city';
const apolloAnanthUrl = 'https://www.apolloclinic.com/clinic-locator/india/karnataka/bengaluru/electronic-city-phase-2';
const kauveryPhone = 'tel:+918068016801';
const neeladriPhone = 'tel:+914069063398';
const ananthPhone = 'tel:+919606060874';
const kauveryMap = 'https://www.google.com/maps/dir/?api=1&destination=Kauvery%20Electronic%20City%2C%20%2392%2F1B%2C%20Konappana%20Agrahara%2C%20Electronic%20City%20Phase-1%2C%20Bengaluru%2C%20Karnataka%20560100';
const neeladriMap = 'https://www.google.com/maps/dir/?api=1&destination=Apollo%20Clinic%20Neeladri%20Nagar%2C%20%23323%2F100%2C%20Opp.%20Ajmera%20Infinity%20Apartment%2C%20Neeladri%20Nagar%2C%20Electronic%20City%20Phase-1%2C%20Bengaluru';
const ananthMap = 'https://www.google.com/maps/dir/?api=1&destination=Apollo%20Clinic%20Electronic%20City%20Phase%202%2C%20Site%20No.%201235%2C%201st%20and%202nd%20Floor%2C%20Sai%20Arcade%2C%209th%20Cross%2C%20Sree%20Ananthnagar%20Phase%202%2C%20Electronic%20City%20Phase%202%2C%20Bengaluru';
const mainYoutubeUrl = 'https://www.youtube.com/watch?v=Af7oR9kGyMw';
const mediaItems = [
  {
    title: 'The Importance of Neuro Rehabilitation',
    description: 'Dr. Harsha Narayanamurthy discusses neuro rehabilitation and its role in recovery, function and independence.',
    url: mainYoutubeUrl,
    label: 'VIDEO INTERVIEW · MARCH 2026',
    image: 'https://img.youtube.com/vi/Af7oR9kGyMw/maxresdefault.jpg',
  },
  {
    title: 'Spinal Pain: When to Worry?',
    description: 'A short educational discussion with Dr. Harsha on spinal pain and when it may warrant specialist assessment.',
    url: 'https://youtube.com/shorts/bGkBUSGbnyo?si=rxg3MKQJPvSwyEf0',
    label: 'YOUTUBE SHORT',
    image: 'https://img.youtube.com/vi/bGkBUSGbnyo/hqdefault.jpg',
  },
  {
    title: 'Surgery Truth: The Hidden Reality',
    description: 'Dr. Harsha discusses what patients should understand when considering neurosurgical treatment.',
    url: 'https://youtube.com/shorts/VV1BC1O9mTQ?si=zGix6QNRnEnRXdoy',
    label: 'YOUTUBE SHORT',
    image: 'https://img.youtube.com/vi/VV1BC1O9mTQ/hqdefault.jpg',
  },
];

const career = [
  ['Nov 2025 – present', 'Senior Consultant Neurosurgeon', 'Kauvery Multispecialty Hospital · Electronic City, Bengaluru'],
  ['Mar 2023 – Aug 2025', 'Consultant Neurosurgeon', 'Queen’s Medical Centre · Nottingham · Paediatric & adult neurosurgery, neuro-oncology, spinal dysraphism, spinal intradural, degenerative spine and CSF pathologies'],
  ['Sep 2021 – Feb 2023', 'Consultant Neurosurgeon', 'Leeds General Infirmary · Leeds · CSF, neuro-oncology and complex spine'],
  ['May 2021 – Sep 2021', 'Senior Fellowship in Spinal Surgery', 'Leeds General Infirmary · Leeds'],
  ['Aug 2020 – May 2021', 'Senior Fellowship in Spinal Surgery', 'University Hospital of Wales · Cardiff'],
  ['Aug 2019 – Jul 2020', 'Senior Fellowship in Neurosurgical Oncology', 'Leeds General Infirmary · RCS approved'],
  ['Aug 2012 – Jul 2019', 'Specialty Registrar / Senior Resident in Neurosurgery', 'Southmead Hospital · Bristol Children’s Hospital · Derriford Hospital'],
  ['Feb 2011 – Jul 2012', 'Registrar in Neurosurgery', 'King’s College Hospital · London'],
  ['Aug 2010 – Jan 2011', 'Registrar in Neurosurgery', 'Royal Free University Hospital · London'],
  ['Sep 2009 – Jul 2010', 'Registrar in Neurosurgery', 'St. George’s University Hospital · London'],
];

const qualifications = [
  ['2019', 'Certificate of Completion of Specialist Training (CCT)', 'Neurosurgery · United Kingdom'],
  ['2018', 'Fellow of the Royal College of Surgeons of England (FRCS)', 'Neurosurgery'],
  ['2006', 'Member of the Royal College of Surgeons of Edinburgh (MRCSEd)', 'Surgery'],
  ['2003', 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', 'M.S. Ramaiah Medical College · Rajiv Gandhi University of Health Sciences'],
];

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
              <p className="hero-title">Senior Consultant Neurosurgeon</p>
              <p className="hero-lead">Specialist neurosurgical care for complex brain and spine conditions, with particular expertise in paediatric neurosurgery, neuro-oncology, spinal surgery and CSF disorders.</p>
              <p className="hero-note">18+ years of neurosurgical experience, more than 3,500 cases in his operative logbook, and senior consultant experience in the UK and India.</p>
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
              <h2>International training.<br /><em>Paediatric expertise.</em></h2>
              <p className="intro">A senior neurosurgical practice built around specialist UK training, extensive operative experience and careful communication with patients and families.</p>
              <a className="text-link" href="#expertise">Discover his areas of expertise <span>↗</span></a>
            </div>
            <div className="about-panel">
              <div className="about-logo"><Image src="/images/logo.png" alt="Dr. Harsha Narayanamurthy logo" width={80} height={80} /></div>
              <div>
                <p>Dr. Harsha Narayanamurthy is a <strong>Senior Consultant Neurosurgeon</strong> with 18+ years of neurosurgical experience across India and the United Kingdom and more than 3,500 cases in his operative logbook.</p>
                <div className="paediatric-highlight">
                  <span>PAEDIATRIC NEUROSURGERY</span>
                  <strong>More than 400 paediatric neurosurgical cases</strong>
                  <p>His experience includes paediatric neuro-oncology, vascular pathologies, CSF disorders, intraventricular pathology and spinal dysraphism, developed through senior training and consultant practice.</p>
                </div>
                <p>His UK career included consultant experience at Queen’s Medical Centre in Nottingham and Leeds General Infirmary, alongside specialist fellowships in spinal surgery and neurosurgical oncology.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-section" aria-label="Experience and expertise highlights">
          <div className="container">
            <div className="proof-grid">
              {proofPoints.map(([value, label]) => <div className="proof-card" key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
        </section>

        <section className="section expertise" id="expertise">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">Areas of expertise</p><h2>Specialist care across<br /><em>brain, spine & nervous system</em></h2></div>
              <p>Dr. Harsha’s practice spans adult and paediatric neurosurgery, with particular experience in complex brain and spine conditions, neuro-oncology and CSF disorders.</p>
            </div>
            <div className="expertise-grid">{expertise.map(([n, t, d]) => <article className="expertise-card" key={n}><span className="number">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
          </div>
        </section>

        <section className="section media" id="media">
          <div className="container">
            <div className="section-heading media-heading"><div><p className="eyebrow">Media & talks</p><h2>Hear from <em>Dr. Harsha</em></h2></div><p>Selected interviews and educational videos featuring Dr. Harsha, with more public work to be added over time.</p></div>
            <div className="media-grid">
              {mediaItems.map((item, index) => (
                <a className={`media-card ${index === 0 ? 'featured-media' : ''}`} href={item.url} target="_blank" rel="noreferrer" key={item.url}>
                  <div className="video-art" style={{ backgroundImage: `linear-gradient(90deg,rgba(7,27,42,.74),rgba(7,27,42,.18)),url('${item.image}')` }}><div className="play">▶</div><span>{item.label}</span></div>
                  <div className="media-copy"><h3>{item.title}</h3><p>{item.description}</p><span className="text-link">Watch on YouTube <b>↗</b></span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section academic" id="academic">
          <div className="container">
            <div className="section-heading academic-heading"><div><p className="eyebrow">Academic & professional</p><h2>A career shaped by<br /><em>specialist training.</em></h2></div><p>Qualifications, consultant appointments, specialist fellowships, clinical experience and academic contributions from Dr. Harsha’s career in India and the UK.</p></div>

            <div className="academic-feature-grid">
              <div className="academic-block">
                <h3>Qualifications</h3>
                <div className="academic-list">{qualifications.map(([year, title, detail]) => <div key={title}><span>{year}</span><div><strong>{title}</strong><p>{detail}</p></div></div>)}</div>
              </div>
              <div className="academic-block clinical-summary">
                <h3>Clinical experience</h3>
                <div className="stat-pair"><strong>3,500+</strong><span>cases in operative logbook</span></div>
                <div className="stat-pair"><strong>750+</strong><span>brain and spinal tumour excisions</span></div>
                <div className="stat-pair"><strong>600+</strong><span>CSF-related procedures</span></div>
                <div className="stat-pair"><strong>400+</strong><span>paediatric neurosurgical cases</span></div>
              </div>
            </div>

            <div className="career-section">
              <h3>Consultant appointments & specialist training</h3>
              <div className="career-timeline">{career.map(([date, role, place]) => <div className="career-item" key={`${date}-${role}`}><span className="career-date">{date}</span><div><strong>{role}</strong><p>{place}</p></div></div>)}</div>
            </div>

            <div className="academic-bottom-grid">
              <div className="academic-block">
                <h3>Teaching & education</h3>
                <p>Active involvement in medical education through lectures, interactive teaching, bedside instruction and online learning. Teaching roles and faculty contributions include King’s College Hospital, Leeds Medical School and the University of Nottingham Medical School.</p>
                <p>He has also served as a clinical examiner, an instructor for Royal College of Surgeons Advanced Trauma Life Support courses and faculty on multiple neurosurgical courses in the UK.</p>
              </div>
              <div className="academic-block">
                <h3>Selected publications</h3>
                <ul className="publication-list">
                  <li><strong>Surgical management of Low Grade Gliomas</strong> · eBrain online book chapter, 2020</li>
                  <li><strong>The 2016 WHO Classification of paediatric CNS Tumours – the essentials</strong> · ACNR, 2018</li>
                  <li><strong>Impact of Anti-angiogenic therapy on Radiographic assessment of Brain Tumours</strong> · World Neurosurgery, 2017</li>
                  <li><strong>MRI of the cervical spine with neck extension: is it useful?</strong> · British Journal of Radiology, 2012</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section appointments" id="contact">
          <div className="container appointment-panel">
            <div><p className="eyebrow">Appointments</p><h2>Choose where you would like to <em>see Dr. Harsha.</em></h2><p>Dr. Harsha currently sees patients at Kauvery Multispeciality Hospital and Apollo Clinic locations in and around Electronic City, Bengaluru.</p></div>
            <div className="location-grid">
              <div className="location">
                <small>KAUVERY MULTISPECIALITY HOSPITAL</small>
                <strong>Electronic City</strong>
                <p className="location-address">#92/1B, Konappana Agrahara, Electronic City Phase-1, Bengaluru, Karnataka 560100</p>
                <div className="location-actions"><a href={appointmentUrl} target="_blank" rel="noreferrer">Book appointment ↗</a><a href={kauveryPhone}>Call 080 6801 6801</a><a href={kauveryMap} target="_blank" rel="noreferrer">Get directions ↗</a></div>
              </div>
              <div className="location">
                <small>APOLLO CLINIC</small>
                <strong>Neeladri Nagar</strong>
                <p className="location-address">#323/100, Opp. Ajmera Infinity Apartment, Neeladri Nagar, Electronic City Phase-1, Bengaluru</p>
                <div className="location-actions"><a href={apolloNeeladriUrl} target="_blank" rel="noreferrer">View clinic ↗</a><a href={neeladriPhone}>Call 040 6906 3398</a><a href={neeladriMap} target="_blank" rel="noreferrer">Get directions ↗</a></div>
              </div>
              <div className="location">
                <small>APOLLO CLINIC</small>
                <strong>Anant Nagar · Electronic City Phase 2</strong>
                <p className="location-address">Site No. 1235, 1st &amp; 2nd Floor, Sai Arcade, 9th Cross, Sree Ananthnagar Phase 2, Electronic City Phase 2, Bengaluru</p>
                <div className="location-actions"><a href={apolloAnanthUrl} target="_blank" rel="noreferrer">View clinic ↗</a><a href={ananthPhone}>Call 96060 60874</a><a href={ananthMap} target="_blank" rel="noreferrer">Get directions ↗</a></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer">
          <div className="footer-brand">
            <strong>DR. HARSHA NARAYANAMURTHY</strong>
            <span>Senior Consultant Neurosurgeon · Bengaluru</span>
            <small>Brain Surgery · Spine Surgery · Paediatric Neurosurgery</small>
          </div>
          <div className="footer-links"><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#media">Media & Talks</a><a href="#academic">Academic</a><a href="#contact">Appointments</a></div>
        </div>
        <div className="container footer-disclaimer">The information on this website is provided for general informational purposes and is not a substitute for professional medical advice, diagnosis or treatment.</div>
        <div className="container copyright">© {new Date().getFullYear()} Dr. Harsha Narayanamurthy. All rights reserved.</div>
      </footer>
    </div>
  );
}
