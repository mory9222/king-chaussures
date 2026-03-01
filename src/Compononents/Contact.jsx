import React, { useState } from 'react'
import { Box, Typography, TextField, Button, Grid, Snackbar, Alert, IconButton, Checkbox, FormControlLabel } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [subscribe, setSubscribe] = useState(true)
  const [fileName, setFileName] = useState('')
  const [snack, setSnack] = useState({ open: false, severity: 'success', message: '' })

  const validate = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSnack({ open: true, severity: 'error', message: 'Please fill name, email and message.' })
      return false
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setSnack({ open: true, severity: 'error', message: 'Please enter a valid email.' })
      return false
    }
    return true
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSnack({ open: true, severity: 'success', message: 'Merci — message envoyé !' })
    setName(''); setEmail(''); setSubject(''); setMessage(''); setFileName(''); setSubscribe(false)
  }

  return (
    <Box 
      sx={{ 
        px: { xs: 2, md: 8 }, 
        py: { xs: 6, md: 12 }, 
        minHeight: '72vh',
        bgcolor: '#F3F6FC' // 🌤️ Fond clair mais moderne
      }}
    >

      <Grid container spacing={4}>
        
        {/* LEFT */}
        <Grid item xs={12} md={6}>
          <Box sx={{ color: '#1E293B' }}>

            <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, color: '#3B82F6' }}>
              Let's make something loud.
            </Typography>

            <Typography sx={{ mb: 3, color: '#475569' }}>
              I love hearing about new projects, collaborations or just a hello. Send me a message and I’ll get back quickly.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ color: '#3B82F6' }} />
              <Typography sx={{ color: '#1E293B' }}>tmory519@gmail.com</Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 4 }}>
              <LocationOnIcon sx={{ color: '#3B82F6' }} />
              <Typography sx={{ color: '#1E293B' }}>Bamako • Sirakoro</Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <IconButton sx={{ color: '#3B82F6', bgcolor: '#E2E8F0', '&:hover': { bgcolor: '#CBD5E1' } }}>
                <InstagramIcon/>
              </IconButton>

              <IconButton sx={{ color: '#3B82F6', bgcolor: '#E2E8F0', '&:hover': { bgcolor: '#CBD5E1' } }}>
                <TwitterIcon/>
              </IconButton>

              <IconButton sx={{ color: '#3B82F6', bgcolor: '#E2E8F0', '&:hover': { bgcolor: '#CBD5E1' } }}>
                <FacebookIcon/>
              </IconButton>
            </Box>

          </Box>
        </Grid>

        {/* FORM */}
        <Grid item xs={12} md={6}>
          <Box 
            component="form" 
            onSubmit={onSubmit}
            sx={{ 
              bgcolor: 'white',
              p: { xs: 3, md: 4 }, 
              borderRadius: 2,
              boxShadow: '0px 8px 24px rgba(0,0,0,0.06)' // ✨ effet carte moderne
            }}
          >

            <TextField 
              fullWidth 
              variant="filled"
              value={name} 
              onChange={(e)=>setName(e.target.value)} 
              label="Name"
              sx={{
                mb: 2,
                bgcolor: '#EEF2FF',
                borderRadius: 1
              }}
            />

            <TextField 
              fullWidth 
              variant="filled"
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              label="Email"
              sx={{
                mb: 2,
                bgcolor: '#EEF2FF',
                borderRadius: 1
              }}
            />

            <TextField 
              fullWidth 
              variant="filled"
              value={subject} 
              onChange={(e)=>setSubject(e.target.value)} 
              label="Subject"
              sx={{
                mb: 2,
                bgcolor: '#EEF2FF',
                borderRadius: 1
              }}
            />

            <TextField 
              fullWidth 
              multiline 
              rows={5}
              variant="filled"
              value={message} 
              onChange={(e)=>setMessage(e.target.value)} 
              label="Message"
              sx={{
                mb: 2,
                bgcolor: '#EEF2FF',
                borderRadius: 1
              }}
            />

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Button 
                variant="contained" 
                component="label"
                sx={{
                  bgcolor: '#3B82F6',
                  '&:hover': { bgcolor: '#2563EB' }
                }}
              >
                Upload file
                <input hidden type="file" onChange={(e)=>setFileName(e.target.files?.[0]?.name || '')} />
              </Button>

              <Typography sx={{ color: '#475569' }}>
                {fileName || 'No file chosen'}
              </Typography>
            </Box>

            <FormControlLabel 
              control={
                <Checkbox 
                  checked={subscribe} 
                  onChange={(e)=>setSubscribe(e.target.checked)} 
                  sx={{ color: '#3B82F6' }}
                />
              } 
              label={<Typography sx={{ color: '#1E293B' }}>Subscribe to newsletter</Typography>} 
            />

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button 
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: '#3B82F6',
                  '&:hover': { bgcolor: '#2563EB' }
                }}
              >
                Send Message
              </Button>

              <Button 
                variant="outlined"
                sx={{
                  borderColor: '#3B82F6',
                  color: '#3B82F6',
                  '&:hover': { 
                    borderColor: '#2563EB',
                    color: '#2563EB'
                  }
                }}
                onClick={() => { setName(''); setEmail(''); setSubject(''); setMessage(''); setFileName(''); setSubscribe(false) }}
              >
                Reset
              </Button>
            </Box>

          </Box>
        </Grid>

      </Grid>

      <Snackbar open={snack.open} autoHideDuration={3500} onClose={()=>setSnack({...snack,open:false})}>
        <Alert severity={snack.severity}>{snack.message}</Alert>
      </Snackbar>
    </Box>
  )
}