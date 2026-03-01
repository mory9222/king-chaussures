import React, { useState } from 'react'
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, ToggleButtonGroup, ToggleButton, TextField, Chip, Dialog, DialogContent, IconButton, useTheme, useMediaQuery, IconButton as MuiIconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import ViewListIcon from '@mui/icons-material/ViewList'

// images taken from Home.jsx hero and latest arrivals
const products = [
  { id: 1, title: 'Urban Runner', price: '$129', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Luxe Sneaker', price: '$139', img: 'https://49ff03ca-5f8a-4a8f-a490-e235d8afc0b1-00-9r2p6k639q6x.kirk.replit.dev/src/assets/images/shoe-1.png' },
  { id: 3, title: 'Everyday Runner', price: '$99', img: 'https://49ff03ca-5f8a-4a8f-a490-e235d8afc0b1-00-9r2p6k639q6x.kirk.replit.dev/src/assets/images/shoe-2.png' },
  { id: 4, title: 'Classic Loafer', price: '$159', img: 'https://49ff03ca-5f8a-4a8f-a490-e235d8afc0b1-00-9r2p6k639q6x.kirk.replit.dev/src/assets/images/shoe-3.png' },
  { id: 5, title: 'City Runner', price: '$115', img: 'https://49ff03ca-5f8a-4a8f-a490-e235d8afc0b1-00-9r2p6k639q6x.kirk.replit.dev/src/assets/images/shoe-4.png' },
  { id: 6, title: 'Weekend Slip-On', price: '$89', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=80' }
]

export default function Products(){
  const [view, setView] = useState('grid')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const openDetail = (p) => { setSelected(p); setOpen(true); }
  const closeDetail = () => { setOpen(false); setTimeout(()=>setSelected(null), 220) }

  const filtered = products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <Box sx={{ px: { xs: 1, md: 6 }, py: { xs: 3, md: 8 }, mx: 'auto', maxWidth: { xs: '100%', md: 1200 } }} className="products-canvas">
      <div className="fluid-shape" aria-hidden />
      <Box className="products-artist-hero soft-glow" sx={{ mb: 2 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 900 }} className="artist-title">The Gallery</Typography>
          <Typography className="muted-text">A curated edit reimagined with motion and light.</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 3 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>Products</Typography>
          <Typography variant="body2" color="text.secondary">Browse our latest collection — designed for everyday comfort.</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {!isMobile ? (
            <>
              <TextField size="small" placeholder="Search products" value={query} onChange={(e)=>setQuery(e.target.value)} sx={{ minWidth: 200 }} />
              <ToggleButtonGroup size="small" value={view} exclusive onChange={(_,val)=>val && setView(val)}>
                <ToggleButton value="grid">Grid</ToggleButton>
                <ToggleButton value="list">List</ToggleButton>
              </ToggleButtonGroup>
            </>
          ) : (
            <>
              <MuiIconButton size="small" onClick={() => setSearchOpen(true)} sx={{ bgcolor: 'rgba(255,255,255,0.7)' }}><SearchIcon /></MuiIconButton>
              <MuiIconButton size="small" onClick={() => setView(view === 'grid' ? 'list' : 'grid')} sx={{ bgcolor: 'rgba(255,255,255,0.7)' }}>{view === 'grid' ? <ViewListIcon/> : <ViewModuleIcon/>}</MuiIconButton>
            </>
          )}
        </Box>

        {/* Mobile search overlay */}
        {searchOpen && isMobile && (
          <Box sx={{ position: 'fixed', top: { xs: '64px' }, left: 0, right: 0, zIndex: 1400, px: 2, py: 1.5, bgcolor: 'rgba(255,255,255,0.96)', boxShadow: '0 8px 30px rgba(2,6,23,0.08)' }}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <TextField
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') setSearchOpen(false) }}
                size="small"
                autoFocus
                placeholder="Search products..."
                fullWidth
                sx={{ bgcolor: '#fff', borderRadius: 2 }}
                InputProps={{ endAdornment: (
                  <IconButton size="small" onClick={() => setSearchOpen(false)}><CloseIcon/></IconButton>
                ) }}
              />
            </Box>
          </Box>
        )}
      </Box>

      <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
        <Chip label="All" clickable />
        <Chip label="Men" clickable />
        <Chip label="Women" clickable />
        <Chip label="New" clickable color="primary" />
      </Box>

      {view === 'grid' ? (
        <Grid container spacing={{ xs: 1, md: 3 }} justifyContent="center">
          {filtered.map((p, idx) => (
            <Grid key={p.id} item xs={6} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card className="card-3d products-grid-item compact-card card-artist colorful-card smooth-transition" style={{ animationDelay: `${60 * (idx+1)}ms` }} sx={{ width: '100%', maxWidth: { xs: 170, sm: 300, md: 320 }, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia component="img" image={p.img} alt={p.title} sx={{ height: { xs: 110, sm: 160, md: 200 }, objectFit: 'cover', transition: 'transform 420ms cubic-bezier(.2,.9,.2,1)' }} className="img-shimmer compact-media fixed-square" />
                  <Box className="overlay-gradient" />
                  <Box sx={{ position: 'absolute', left: 12, bottom: 12, display: 'flex', flexDirection: 'column', gap: 0.2 }}>
                    <Typography className="title artist-title" sx={{ fontSize: { xs: '12px', sm: '14px', md: '15px' }, opacity: 0.92 }}>{p.title}</Typography>
                    <Typography className="price artist-price" sx={{ fontSize: { xs: '11px', sm: '13px' }, opacity: 0.85 }}>{p.price}</Typography>
                  </Box>
                </Box>
                <CardContent sx={{ flex: 1, py: 0.5, display: { xs: 'none', sm: 'block' } }}>
                  <Typography className="muted-text" sx={{ fontSize: { xs: '12px', sm: '13px' } }}>A refined silhouette crafted for comfort and everyday elegance.</Typography>
                </CardContent>
                <CardActions className="card-actions-compact" sx={{ px: 1, pb: 1 }}>
                  <Button size="small" variant="outlined" onClick={()=>openDetail(p)} sx={{ minWidth: 52, px: 0.4, fontSize: { xs: '11px', sm: '11px' }, color: 'var(--accent-1)', borderColor: 'rgba(17,24,39,0.06)' }} className="button-ghost">View</Button>
                  <Button size="small" variant="contained" sx={{ minWidth: 60, px: 0.4, fontSize: { xs: '11px', sm: '11px' } }} className="button-accent">Add</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box>
          {filtered.map(p => (
            <Card key={p.id} sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
              <CardMedia component="img" image={p.img} alt={p.title} sx={{ width: 160, height: 120, objectFit: 'cover' }} />
              <Box sx={{ flex: 1, px: 2 }}>
                <Typography sx={{ fontWeight: 700 }}>{p.title}</Typography>
                <Typography color="text.secondary">{p.price}</Typography>
              </Box>
              <Box sx={{ pr: 2 }}>
                <Button variant="outlined" size="small" sx={{ mr: 1 }}>View</Button>
                <Button variant="contained" size="small">Add</Button>
              </Box>
            </Card>
          ))}
        </Box>
      )}

        <Dialog open={open} onClose={closeDetail} maxWidth="sm" fullWidth TransitionProps={{ timeout: 360 }}>
          <DialogContent sx={{ p: 0, borderRadius: 2, overflow: 'hidden' }}>
            {selected && (
              <Box sx={{ position: 'relative' }}>
                <IconButton onClick={closeDetail} sx={{ position: 'absolute', right: 12, top: 12, zIndex: 4, bgcolor: 'rgba(255,255,255,0.8)' }}><CloseIcon /></IconButton>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                  <Box sx={{ flex: 1 }}>
                    <Box component="img" src={selected.img} alt={selected.title} sx={{ width: '100%', height: { xs: 260, md: 360 }, objectFit: 'cover' }} />
                  </Box>
                  <Box sx={{ flex: 1, p: 3, bgcolor: 'background.paper' }}>
                    <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>{selected.title}</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2 }}>{selected.price}</Typography>
                    <Typography sx={{ mb: 3 }}>A refined silhouette crafted for comfort and everyday elegance. Lightweight cushioning and premium materials make this a go-to choice.</Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button variant="contained">Add to cart</Button>
                      <Button variant="outlined" onClick={closeDetail}>Close</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </DialogContent>
        </Dialog>

    </Box>
  )
}
