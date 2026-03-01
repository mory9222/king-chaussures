import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
	return (
		<Box component="footer" sx={{ backgroundColor: '#000', color: '#fff', py: 6, px: { xs: 4, md: 12 } }}>
			<Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
				<Box>
					<Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '0.06em' }}>
						Kingcs
					</Typography>
					<Typography sx={{ mt: 1, color: 'rgba(255,255,255,0.72)' }}>
						Modern footwear crafted for daily comfort.
					</Typography>
				</Box>

				<Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
					<Box>
						<Typography sx={{ fontWeight: 700, mb: 1 }}>Shop</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
							<Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>Collections</Link>
							<Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>Men</Link>
							<Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>Women</Link>
						</Box>
					</Box>

					<Box>
						<Typography sx={{ fontWeight: 700, mb: 1 }}>Company</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
							<Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>About</Link>
							<Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>Contact</Link>
							<Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>Privacy</Link>
						</Box>
					</Box>
				</Box>

				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
					<Typography sx={{ fontWeight: 700 }}>Follow</Typography>
					<Box sx={{ display: 'flex', gap: 1 }}>
						<IconButton aria-label="twitter" sx={{ color: '#fff' }}>
							<TwitterIcon />
						</IconButton>
						<IconButton aria-label="instagram" sx={{ color: '#fff' }}>
							<InstagramIcon />
						</IconButton>
						<IconButton aria-label="facebook" sx={{ color: '#fff' }}>
							<FacebookIcon />
						</IconButton>
					</Box>
				</Box>
			</Box>

			<Box sx={{ borderTop: '1px solid rgba(255,255,255,0.06)', mt: 4, pt: 3, textAlign: 'center' }}>
				<Typography sx={{ color: 'rgba(255,255,255,0.6)' }}>© {new Date().getFullYear()} Kingcs. All rights reserved.</Typography>
			</Box>
		</Box>
	);
}

export default Footer;
