import './globals.css';

export const metadata = {
  metadataBase: new URL('https://drharshanarayanamurthy.com'),
  title: 'Dr. Harsha Narayanamurthy | Senior Consultant Neurosurgeon',
  description: 'Dr. Harsha Narayanamurthy is a UK-trained Senior Consultant Neurosurgeon specialising in brain, spine and paediatric neurosurgery in Bengaluru.',
  alternates: { canonical: 'https://drharshanarayanamurthy.com' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Dr. Harsha Narayanamurthy | Senior Consultant Neurosurgeon',
    description: 'Brain, spine and paediatric neurosurgery with specialist UK training and senior consultant experience.',
    type: 'website',
    url: 'https://drharshanarayanamurthy.com',
    siteName: 'Dr. Harsha Narayanamurthy',
    images: [{ url: '/images/harsha.jpg', width: 587, height: 578, alt: 'Dr. Harsha Narayanamurthy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Harsha Narayanamurthy | Senior Consultant Neurosurgeon',
    description: 'UK-trained neurosurgical care for brain, spine and paediatric conditions in Bengaluru.',
    images: ['/images/harsha.jpg'],
  },
};

export default function RootLayout({ children }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Harsha Narayanamurthy',
    medicalSpecialty: 'Neurosurgery',
    jobTitle: 'Senior Consultant Neurosurgeon',
    url: 'https://drharshanarayanamurthy.com',
    image: 'https://drharshanarayanamurthy.com/images/harsha.jpg',
    description: 'Senior Consultant Neurosurgeon in Bengaluru with specialist UK training and consultant experience in brain, spine and paediatric neurosurgery.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressCountry: 'IN',
    },
    worksFor: {
      '@type': 'Hospital',
      name: 'Kauvery Multispeciality Hospital',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#92/1B, Konappana Agrahara, Electronic City Phase-1',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560100',
        addressCountry: 'IN',
      },
    },
    sameAs: ['https://www.kauveryhospitalsbangalore.com/doctors/dr-harsha-narayanamurthy'],
    knowsAbout: ['Brain Surgery', 'Spine Surgery', 'Paediatric Neurosurgery', 'Neuro-Oncology', 'CSF Disorders', 'Neuro-trauma'],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'FRCS (Neurosurgery)',
        credentialCategory: 'professional certification',
        dateCreated: '2018-10',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Certificate of Completion of Specialist Training (CCT) in Neurosurgery',
        credentialCategory: 'professional certification',
        dateCreated: '2019-09',
      },
    ],
  };
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}

