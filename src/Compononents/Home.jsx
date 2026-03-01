import React, { useState } from 'react';
import { Box, Button, Typography, Grid, Card, CardMedia, CardContent, CardActions, Dialog, DialogContent, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

const heroImage = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D';
const productImages = [
  { img: 'https://49ff03ca-5f8a-4a8f-a490-e235d8afc0b1-00-9r2p6k639q6x.kirk.replit.dev/src/assets/images/shoe-1.png', title: 'Luxe Sneaker', price: '$139' },
  { img: 'https://49ff03ca-5f8a-4a8f-a490-e235d8afc0b1-00-9r2p6k639q6x.kirk.replit.dev/src/assets/images/shoe-2.png', title: 'Everyday Runner', price: '$99' },
  { img: 'https://49ff03ca-5f8a-4a8f-a490-e235d8afc0b1-00-9r2p6k639q6x.kirk.replit.dev/src/assets/images/shoe-3.png', title: 'Classic Loafer', price: '$159' },
  { img: 'https://49ff03ca-5f8a-4a8f-a490-e235d8afc0b1-00-9r2p6k639q6x.kirk.replit.dev/src/assets/images/shoe-4.png', title: 'City Runner', price: '$115' },
];

function Home() {
  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)
  const openDetail = (p) => { setSelected(p); setOpen(true); }
  const closeDetail = () => { setOpen(false); setTimeout(()=>setSelected(null), 220) }

  return (
<Box className="products-canvas home-dark" 
     sx={{ 
       px: { xs: 1, md: 12 }, 
       py: { xs: 6, md: 18 }, 
       mt: { xs: '72px', md: '80px' },
       backgroundColor: '#F3F6FC'   // 👈 CLAIR, propre, moderne
     }}>      {/* HERO - vivid redesign */}
      <Box className="home-vivid-hero" sx={{ mb: 8, p: { xs: 3, md: 6 }, borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
        <div className="vivid-blob left" aria-hidden />
        <div className="vivid-blob right" aria-hidden />
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Button className="button-ghost" variant="outlined" size="small" sx={{ borderRadius: 6, px: { xs: 2, md: 2.5 }, py: { xs: 0.45, md: 0.6 }, mb: 3, textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em' }}>New Drops</Button>

            <Typography variant="h1" component="h1" className="artist-title hero-gradient-anim fade-in-up stagger-1" sx={{ fontWeight: 900, fontSize: { xs: '1.9rem', md: '3.8rem' }, mb: 2, lineHeight: 1.02 }}>Colorful comfort, crafted for you.</Typography>

            <Typography className="fade-in-up stagger-2" sx={{ mb: 4, lineHeight: 1.6, fontSize: { xs: '1rem', md: '1.125rem' } }}>
              Bright palettes, polished silhouettes — footwear that stands out in the city lights.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button className="button-accent pulse-hover fade-in-up stagger-3" sx={{ px: { xs: 3, md: 4 }, py: { xs: 1, md: 1.4 }, borderRadius: 3 }}>Explore Collection</Button>
              <Button className="button-ghost fade-in-up stagger-4" sx={{ px: { xs: 3, md: 4 }, py: { xs: 1, md: 1.4 }, borderRadius: 3 }}>See Lookbook</Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ position: 'relative', width: { xs: '86%', md: 520 }, borderRadius: 4 }}>
              <Box component="img" src={heroImage} alt="Shoes collection" className="fade-in-up stagger-3 float-slow soft-glow" sx={{ width: '100%', height: 'auto', borderRadius: 4, boxShadow: '0 22px 60px rgba(15,23,42,0.08)', transformOrigin: 'center' }} />
              <div className="mini-blobs" aria-hidden />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* LATEST ARRIVALS */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: { xs: '1.25rem', md: '1.6rem' } }} className="artist-title">Latest Arrivals</Typography>
            <Typography sx={{ color: 'var(--muted)' }}>Curated for the modern wardrobe.</Typography>
          </Box>

          <Button endIcon={<ArrowForwardIosIcon />} variant="text" sx={{ textTransform: 'none', color: '#0f1720' }}>
            View All
          </Button>
        </Box>

        <Grid container spacing={1} sx={{ alignItems: 'stretch' }}>
          {productImages.map((p, idx) => (
            <Grid item xs={6} sm={6} md={3} key={idx} sx={{ display: 'flex', px: 0.5, justifyContent: 'center' }}>
              <Card className={`card-3d products-grid-item compact-card card-artist fade-in-up stagger-${(idx % 4) + 1}`} style={{ animationDelay: `${(idx+1)*80}ms` }} sx={{ width: '100%', maxWidth: { xs: 170, sm: 300, md: 320 }, display: 'flex', flexDirection: 'column', borderRadius: 3, overflow: 'hidden' }}>
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia className="img-shimmer compact-media fixed-square" component="img" image={p.img} alt={p.title} sx={{ height: { xs: 110, sm: 160, md: 200 }, objectFit: 'cover', width: '100%' }} />
                  <Box className="overlay-gradient" />
                  <Box sx={{ position: 'absolute', left: 12, bottom: 12, display: 'flex', flexDirection: 'column', gap: 0.2 }}>
                    <Typography className="title artist-title" sx={{ fontSize: { xs: '12px', sm: '14px' } }}>{p.title}</Typography>
                    <Typography className="price artist-price" sx={{ fontSize: { xs: '11px', sm: '13px' } }}>{p.price}</Typography>
                  </Box>
                </Box>
                <CardContent sx={{ py: 0.5, display: { xs: 'none', sm: 'block' } }}>
                  <Typography className="muted-text">Curated for city comfort — bold yet minimal.</Typography>
                </CardContent>
                <CardActions className="card-actions-compact" sx={{ px: 1, pb: 1 }}>
                  <Button size="small" variant="outlined" onClick={()=>openDetail(p)} sx={{ minWidth: 52, px: 0.4, fontSize: { xs: '11px', sm: '11px' }, color: 'var(--accent-1)', borderColor: 'rgba(17,24,39,0.06)' }} className="button-ghost">View</Button>
                  <Button size="small" variant="contained" sx={{ minWidth: 60, px: 0.4, fontSize: { xs: '11px', sm: '11px' } }} className="button-accent">Add</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* STORY BLOCK */}
      <Box sx={{ mt: 10, backgroundColor: 'var(--bg-2)', color: 'var(--muted)', py: { xs: 6, md: 12 }, px: { xs: 4, md: 12 }, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
          <Box sx={{ maxWidth: { xs: '100%', md: '68%' } }}>
            <Typography sx={{ fontWeight: 900, fontSize: { xs: '1.4rem', md: '2.25rem' } }} className="artist-title">Our Story</Typography>
            <Typography sx={{ color: 'var(--muted)', mt: 1.25, lineHeight: 1.7, fontSize: { xs: '1rem', md: '1.125rem' } }}>
              From idea to sole — craftsmanship and purpose guide everything we do. Read how we build comfortable, modern footwear designed to last.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
            <Button variant="contained" className="button-ghost" sx={{ px: 4, py: 1.2, borderRadius: 3, textTransform: 'none', fontWeight: 700 }}>
              Read our story
            </Button>
          </Box>
        </Box>
      </Box>

      <Dialog open={open} onClose={closeDetail} maxWidth="sm" fullWidth TransitionProps={{ timeout: 360 }}>
        <DialogContent sx={{ p: 0, borderRadius: 2, overflow: 'hidden' }}>
          {selected && (
            <Box sx={{ position: 'relative' }}>
              <IconButton onClick={closeDetail} sx={{ position: 'absolute', right: 12, top: 12, zIndex: 4, bgcolor: 'rgba(255,255,255,0.9)' }}><CloseIcon /></IconButton>
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
  );
}

export default Home;