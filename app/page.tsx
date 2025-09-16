import Hero from './components/Hero'
import Features from './components/Features'
import Preview from './components/Preview'
import Footer from './components/Footer'
import Box from '@mui/material/Box'


export const metadata = {
  title: 'Chronix',
  description: 'Chronix — Bastion tracking, world codex, and session recaps',
}

export default function Page() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundImage: 'linear-gradient(135deg,#fff,#e6e7ea)', color: 'text.secondary' }}>
      <Box component="main" sx={{ maxWidth: 1120, mx: 'auto', px: { xs: 3, lg: 4 } }}>
        <Hero />
        <Features />
        <Preview />
      </Box>
      <Footer />
    </Box>
  )
}
