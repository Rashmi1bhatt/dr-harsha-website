'use client';

import { useState } from 'react';

const links = [
  ['about', 'About'],
  ['expertise', 'Expertise'],
  ['media', 'Media'],
  ['contact', 'Appointments'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
          <img src="/images/logo.png" alt="Dr. Harsha Narayanamurthy" />
          <span>DR. HARSHA<br /><b>NARAYANAMURTHY</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <i /><i /><i />
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a href="https://www.kauveryhospitalsbangalore.com/book-an-appointment?hospital_ids=1&speciality_ids=4,27,42&doctor_name=Dr.%20Harsha%20Narayanamurthy" target="_blank" rel="noreferrer">Book an appointment <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}
