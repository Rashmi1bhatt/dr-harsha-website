import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "70px" }}>
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
    </>
  );
}

export default App;

export default function App() {
  const kauveryLink =
    "https://www.kauveryhospitalsbangalore.com/book-an-appointment?hospital_ids=1&speciality_ids=4,27,42&doctor_name=Dr.%20Harsha%20Narayanamurthy";
  const apolloLink =
    "https://www.apolloclinic.com/find-a-doctor/best-neuro-surgeon-in-bengaluru-karnataka/dr-harsha-narayanamurthy";

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      
      {/* NAVBAR */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
        <h2>Dr Harsha</h2>
        <div>
          <a href="#home" style={{ marginRight: "15px" }}>Home</a>
          <a href="#about" style={{ marginRight: "15px" }}>About</a>
          <a href="#services" style={{ marginRight: "15px" }}>Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* HOME */}
      <section id="home" style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Dr. Harsha Narayanamurthy</h1>
        <p>Consultant Neurosurgeon | Brain & Spine Specialist</p>

        <div style={{ marginTop: "20px" }}>
          <button
            style={{ marginRight: "10px", padding: "10px", background: "black", color: "white", borderRadius: "8px" }}
            onClick={() => {
                            window.gtag && window.gtag('event', 'conversion', {
                              send_to: 'AW-XXXXXXXXX/abc123'
                            });
                            window.location.href = kauveryLink;
                          }}
          >
            Book at Kauvery Hospital
          </button>

          <button
            style={{ padding: "10px", background: "gray", color: "white", borderRadius: "8px" }}
            onClick={() => {
              window.gtag && window.gtag('event', 'conversion', {
                send_to: 'AW-XXXXXXXXX/abc123'
              });
              window.location.href = apolloLink;
            }}
          >
            Book at Apollo Clinic
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ marginBottom: "40px" }}>
        <h2>About</h2>
        <p>
          Dr. Harsha Narayanamurthy is a leading neurosurgeon in Bangalore,
          specializing in brain and spine conditions. He is associated with
          Kauvery Hospital and Apollo Clinic.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ marginBottom: "40px" }}>
        <h2>Services</h2>
        <ul>
          <li>Brain Tumor Surgery</li>
          <li>Spine Surgery</li>
          <li>Slip Disc Treatment</li>
          <li>Head Injury & Trauma</li>
          <li>Stroke Management</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ marginBottom: "40px" }}>
        <h2>Contact</h2>
        <p>Bangalore, India</p>

        <button
          style={{ marginRight: "10px", padding: "10px", background: "black", color: "white", borderRadius: "8px" }}
          onClick={() => (window.location.href = kauveryLink)}
        >
          Book via Kauvery
        </button>

        <button
          style={{ padding: "10px", background: "gray", color: "white", borderRadius: "8px" }}
          onClick={() => (window.location.href = apolloLink)}
        >
          Book via Apollo
        </button>
      </section>

      {/* FOOTER */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>© {new Date().getFullYear()} Dr Harsha Narayanamurthy</p>
      </div>

    </div>
  );
}
