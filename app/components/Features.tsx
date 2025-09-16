import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

export default function Features() {
  const items = [
    { title: 'Bastion Tracking', desc: 'Monitor rooms, hirelings, and events with a lightweight map-driven UI.' },
    { title: 'World Codex', desc: 'Centralized lore, NPCs, and artifact entries with rich-text support.' },
    { title: 'Session Recaps', desc: 'Auto-generate session notes and highlights for quick sharing and review.' },
  ]

  return (
    <Box component="section" sx={{ pt: 6, pb: 6 }}>
      <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary' }}>Features</Typography>
      <Typography sx={{ mt: 1, color: 'text.secondary', maxWidth: '42rem' }}>Tools to help you run cleaner sessions and preserve your world’s history.</Typography>

      <Box sx={{ mt: 2, display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' } }}>
        {items.map((it) => (
          <Paper key={it.title} sx={{ p: 2, transition: 'box-shadow .15s' }} elevation={1}>
            <Typography sx={{ fontSize: '1.125rem', fontWeight: 600, color: 'text.primary' }}>{it.title}</Typography>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>{it.desc}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}
