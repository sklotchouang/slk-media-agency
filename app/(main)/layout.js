import SiteBehaviors from '../../components/SiteBehaviors';
import MotionLayer from '../../components/MotionLayer';
import { fontClassNames } from '../../components/fonts';

export const metadata = {
  metadataBase: new URL('https://slkmediaagency.com'),
  applicationName: 'SLK Media Agency',
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/favicon/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'SLK Media Agency',
    statusBarStyle: 'black',
  },
  other: {
    'msapplication-TileColor': '#0a0a0b',
    'msapplication-config': '/favicon/browserconfig.xml',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
};

export default function MainLayout({ children }) {
  return (
    <html lang="en" className={fontClassNames}>
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/premium.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        {children}
        <SiteBehaviors />
        <MotionLayer />
      </body>
    </html>
  );
}
