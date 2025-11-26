# Privacy Policy & Terms of Service

Animated HTML pages for the Casiguran Translation and Text-to-Speech System (CTTS).

## Features

### Design & Animations
- **Gradient backgrounds** with animated patterns
- **Smooth scroll animations** for sections
- **Interactive hover effects** on cards and lists
- **Bounce animations** on section icons
- **Ripple effects** on clickable elements
- **Progress indicator** showing scroll position
- **Responsive design** for mobile and desktop

### Functionality
- **Back to top button** with smooth scroll
- **Keyboard shortcuts** (T = top, B = bottom)
- **Section animations** on scroll into view
- **Interactive list items** with staggered animations
- **Cookie consent banner** (optional, commented out)

### Content
Both pages are specifically tailored for CTTS with:
- Data collection limited to: **Name**, **Email**, and **Cookies**
- Focus on translation and text-to-speech services
- Clear explanations of cookie usage for storing translation results
- Comprehensive terms and privacy information

## Files

- `privacy-policy.html` - Privacy Policy page
- `terms-of-service.html` - Terms of Service page
- `styles.css` - Shared styles and animations
- `script.js` - Interactive functionality and animations

## Usage

1. Open either HTML file in a web browser
2. Navigate between pages using footer links
3. Scroll to see animations
4. Use the back-to-top button for quick navigation

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... */
}
```

### Enable Cookie Consent Banner
Uncomment the last line in `script.js`:
```javascript
showCookieConsent();
```

### Animation Speed
Adjust timing in CSS and JavaScript:
- CSS: Change animation durations and delays
- JS: Modify `setTimeout` values in `initAnimations()`

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Integration with CTTS

To integrate these pages into your CTTS application:

1. Place files in your `public` directory
2. Update footer links with actual support URLs
3. Add navigation links from your main application
4. Customize content as needed for your specific implementation

## License

These files are created for the Casiguran Translation and Text-to-Speech System (CTTS).

© 2025 CTTS. All rights reserved.
