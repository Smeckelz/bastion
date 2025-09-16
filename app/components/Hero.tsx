"use client"
import { signIn } from 'next-auth/react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Image from 'next/image'

export default function Hero() {
  return (
    <Box component="section" sx={{ pt: 8, pb: 6 }}>
      <Box sx={{ display: 'grid', gap: 3, alignItems: 'center', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' } }}>
        <Box>
          <Typography variant="h1" component="h1" sx={{ fontSize: '2.25rem', fontWeight: 800, color: 'text.primary' }}>
            Chronix
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary', maxWidth: '36rem' }}>
            Track Bastions, browse the World Codex, and generate session recaps — all in one place. Built for storytellers and keepers of lore.
          </Typography>

          <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button variant="contained" color="primary" onClick={() => signIn('discord')}>Sign in with Discord</Button>
            <Link href="#preview" underline="none" color="text.secondary">See preview</Link>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-end' } }}>
          <Box sx={{ width: 160, height: 160, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 3, bgcolor: 'background.paper' }}>
            <Image src="/logo.svg" alt="Chronix logo" width={160} height={160} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
