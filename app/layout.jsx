import './globals.css';

export const metadata = {
  metadataBase: new URL('https://drharshanarayanamurthy.com'),
  title: 'Dr. Harsha Narayanamurthy | Consultant Neurosurgeon',
  description: 'Dr. Harsha Narayanamurthy is a UK-trained Consultant Neurosurgeon specialising in brain, spine and paediatric neurosurgery in Bengaluru.',
  openGraph: {
    title: 'Dr. Harsha Narayanamurthy | Consultant Neurosurgeon',
    description: 'Brain, spine and paediatric neurosurgery with specialist UK training and consultant experience.',
    type: 'website',
    url: 'https://drharshanarayanamurthy.com',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
