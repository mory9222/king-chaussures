import React, { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
    TextField,
    InputAdornment,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/products' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                className="nav-glass"
                style={{
                    background: 'rgba(255,255,255,0.72)',
                    color: 'black',
                    boxShadow: '0 6px 20px rgba(2,6,23,0.06)',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    transition: 'backdrop-filter 240ms ease, background 240ms ease',
                }}
            >
                <Toolbar>
                    {/* Hamburger on small screens */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setOpen(true)}
                        sx={{ mr: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: 700,
                                fontSize: '1.6rem',
                                fontFamily: 'Arial, sans-serif',
                                color: '#222',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                background: 'linear-gradient(90deg,#0b84ff,#7c3aed)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                transform: 'translateY(0)',
                                transition: 'transform 320ms ease',
                                '&:hover': { transform: 'translateY(-3px) scale(1.02)' },
                            }}
                            className="fade-in-up stagger-1"
                        >
                            Kingcs
                        </Typography>

                        {/* Desktop nav */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
                            {navItems.map((item, i) => (
                                <Button
                                    key={item.label}
                                    component={RouterLink}
                                    to={item.path}
                                    disableRipple
                                    sx={{
                                        color: '#1f2937',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        fontSize: '0.875rem',
                                        fontFamily: 'Arial, sans-serif',
                                        px: 1.5,
                                        py: 0.5,
                                        borderRadius: 1,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&:after': {
                                            content: '\"\"',
                                            position: 'absolute',
                                            left: '50%',
                                            bottom: 6,
                                            width: 0,
                                            height: 3,
                                            background: 'linear-gradient(90deg,#06b6d4,#7c3aed)',
                                            transition: 'width 220ms ease, left 220ms ease',
                                            borderRadius: 2,
                                        },
                                        '&:hover:after': { width: '70%', left: '15%' },
                                        '&:hover': { transform: 'translateY(-3px)' },
                                    }}
                                    className={`fade-in-up stagger-${i + 2}`}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    </Box>

                    {/* Right area: search field (toggle) + icons */}
                    <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 1, alignItems: 'center' }}>
                        {searchOpen && !isMobile ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: { xs: '70vw', sm: 320 } }}>
                                <TextField
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') { console.log('search', query); setSearchOpen(false); } }}
                                    size="small"
                                    autoFocus
                                    placeholder="Search products..."
                                    sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: '0 6px 18px rgba(2,6,23,0.08)' }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton size="small" onClick={() => { setSearchOpen(false); setQuery(''); }}>
                                                    <CloseIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                        ) : (
                            <>
                                <IconButton aria-label="search" size="large" sx={{ color: '#0b1220', transition: 'transform 200ms ease', '&:hover': { transform: 'scale(1.06)', color: '#0b84ff' } }} onClick={() => setSearchOpen(true)}>
                                    <SearchIcon />
                                </IconButton>
                                <IconButton aria-label="cart" size="large" sx={{ color: '#0b1220', transition: 'transform 200ms ease', '&:hover': { transform: 'scale(1.06)', color: '#7c3aed' } }}>
                                    <ShoppingCartIcon />
                                </IconButton>
                            </>
                        )}
                    </Box>
                </Toolbar>

                {/* Drawer for mobile menu */}
                        <Drawer anchor="left" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: { xs: '80vw', sm: 320 }, borderRadius: 0 } }}>
                            <Box sx={{ width: { xs: '80vw', sm: 320 }, display: 'flex', flexDirection: 'column', height: '100%', bgcolor: 'rgba(255,255,255,0.88)' }} role="presentation">
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 2, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                                    <Typography sx={{ fontWeight: 800, fontSize: '1.1rem' }}>Kingcs</Typography>
                                    <IconButton onClick={() => setOpen(false)} aria-label="close drawer"><CloseIcon /></IconButton>
                                </Box>

                                <List sx={{ flex: 1, pt: 1 }}>
                                        {navItems.map((item) => (
                                            <ListItem key={item.label} disablePadding sx={{ px: 1 }}>
                                                <ListItemButton component={RouterLink} to={item.path} sx={{ py: 1.2, px: 2, '&:hover': { bgcolor: 'rgba(14,165,233,0.04)' } }} onClick={() => setOpen(false)}>
                                                    <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 700 }} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                </List>

                                <Divider />
                                <Box sx={{ px: 2, py: 2 }}>
                                    <Typography variant="body2" className="muted-text">Use the Search and Cart icons in the navbar.</Typography>
                                </Box>
                            </Box>
                        </Drawer>
                </AppBar>

                {/* Mobile: full-width search overlay under the AppBar */}
                {searchOpen && isMobile && (
                    <Box sx={{ position: 'fixed', top: { xs: '64px', sm: '64px' }, left: 0, right: 0, zIndex: 1300, px: 2, py: 1.5, bgcolor: 'rgba(255,255,255,0.96)', boxShadow: '0 8px 30px rgba(2,6,23,0.08)' }}>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <TextField
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => { if (e.key === 'Enter') { console.log('search', query); setSearchOpen(false); } }}
                                size="small"
                                autoFocus
                                placeholder="Search products..."
                                fullWidth
                                sx={{ bgcolor: '#fff', borderRadius: 2 }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton size="small" onClick={() => { setSearchOpen(false); setQuery(''); }}>
                                                <CloseIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Box>
                )}
        </Box>
    );
}

export default Navbar;