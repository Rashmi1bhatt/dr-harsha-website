import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

export default function HarshaWebsite() {
  const kauveryLink = "https://www.kauveryhospitalsbangalore.com/doctors/dr-harsha-narayanamurthy";
  const apolloLink = "https://www.apolloclinic.com/find-a-doctor/best-neuro-surgeon-in-bengaluru-karnataka/dr-harsha-narayanamurthy";

  const handleClick = (hospital) => {
    if (window.gtag) {
      window.gtag("event", "book_appointment_click", {
        hospital: hospital,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-lg">Dr Harsha</h1>
          <div className="space-x-4 text-sm">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-16">

        {/* LANDING / HOME */}
        <section id="home" className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
          >
            Dr. Harsha Narayanamurthy
          </motion.h1>
          <p className="text-lg text-gray-600">
            Consultant Neurosurgeon | Brain & Spine Specialist in Bangalore
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button
              onClick={() => {
                handleClick("kauvery");
                window.location.href = kauveryLink;
              }}
            >
              Book at Kauvery Hospital
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleClick("apollo");
                window.location.href = apolloLink;
              }}
            >
              Book at Apollo Clinic
            </Button>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">About Dr. Harsha</h2>
              <p>
                Dr. Harsha Narayanamurthy is a highly experienced neurosurgeon
                specializing in brain and spine conditions. He is associated with
                leading hospitals in Bangalore including Kauvery Hospital and
                Apollo Clinic.
              </p>
              <p>
                His expertise includes advanced neurosurgical procedures,
                minimally invasive spine surgery, and management of complex
                neurological disorders.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* SERVICES */}
        <section id="services">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Services & Conditions</h2>
              <ul className="grid md:grid-cols-2 gap-2 list-disc pl-5">
                <li>Brain Tumor Surgery</li>
                <li>Spine Surgery</li>
                <li>Slip Disc / Sciatica Treatment</li>
                <li>Head Injury & Trauma</li>
                <li>Stroke & Neuro Care</li>
                <li>Minimally Invasive Surgery</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Contact</h2>

              <div className="flex items-center gap-2">
                <Phone />
                <span>Appointments via Kauvery Hospital & Apollo Clinic</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin />
                <span>Bangalore, India</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail />
                <span>Optional: add email/contact form here</span>
              </div>

              <div className="pt-4 flex flex-col md:flex-row gap-4">
                <Button
                  className="w-full"
                  onClick={() => {
                    handleClick("kauvery");
                    window.location.href = kauveryLink;
                  }}
                >
                  Book via Kauvery
                </Button>

                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    handleClick("apollo");
                    window.location.href = apolloLink;
                  }}
                >
                  Book via Apollo
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      {/* FOOTER */}
      <div className="bg-gray-900 text-white text-center p-4 mt-10">
        <p>© {new Date().getFullYear()} Dr Harsha Narayanamurthy</p>
      </div>
    </div>
  );
}
