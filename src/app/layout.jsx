import '../styles/globals.css'
import { ThemeProvider } from '../lib/ThemeContext'

export const metadata = {
  title: 'Hazel Marqueses — Project Manager & QA Specialist',
  description:
    'Portfolio of Hazel Marqueses — IT professional specializing in project management, QA testing, and software delivery. Based in Sorsogon, Philippines.',
  keywords: [
    'Project Manager', 'QA Specialist', 'Quality Assurance',
    'Software Testing', 'Agile', 'Scrum', 'Information Technology',
    'Philippines', 'Hazel Marqueses',
  ],
  openGraph: {
    title: 'Hazel Anne B. Marqueses — Project Manager & QA Specialist',
    description: 'IT professional bridging technical execution and project clarity.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Prevent flash of invisible content on navigation */}
        <style dangerouslySetInnerHTML={{ __html: `
          body { opacity: 1 !important; visibility: visible !important; }
        ` }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}