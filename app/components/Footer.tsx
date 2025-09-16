import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 6, borderTop: '1px solid #e5e7eb', background: 'linear-gradient(0deg,#e9eaef,transparent)' }}>
      <Box sx={{ maxWidth: 1120, mx: 'auto', px: 3, py: 2 }}>
        <Typography sx={{ fontSize: '.875rem', color: 'text.secondary' }}>© {new Date().getFullYear()} Chronix — Built with care.</Typography>
      </Box>
    </Box>
  )
}
