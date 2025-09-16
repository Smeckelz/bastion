import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

export default function Preview() {
  return (
    <Box component="section" id="preview" sx={{ pt: 6, pb: 6 }}>
      <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary' }}>Bastion Tracker Preview</Typography>
      <Typography sx={{ mt: 1, color: 'text.secondary', maxWidth: '42rem' }}>A quick look at rooms, hirelings, and tools you’d use during a session.</Typography>

      <Box sx={{ display: 'grid', gap: 2, mt: 3, gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' } }}>
        <Paper sx={{ p: 2 }} elevation={1}>
          <Typography sx={{ fontWeight: 600, color: 'text.primary' }}>Rooms &amp; Hirelings</Typography>
          <Box component="ul" sx={{ mt: 1, color: 'text.secondary', pl: 2 }}>
            <li>The Fallen Keep — Occupied (3 NPCs)</li>
            <li>Sable Market — Busy (traders)</li>
            <li>Gloom Cavern — Hazards reported</li>
          </Box>
        </Paper>

        <Paper sx={{ p: 2 }} elevation={1}>
          <Typography sx={{ fontWeight: 600, color: 'text.primary' }}>Bastion Tools</Typography>
          <Box component="ul" sx={{ mt: 1, color: 'text.secondary', pl: 2 }}>
            <li>Timeline — Jump to events</li>
            <li>Map pins — Quick teleport</li>
            <li>NPC notes — Private / shared</li>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}
