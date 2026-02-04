# Portfolio Website

A modern, professional personal portfolio website built with HTML, CSS, and JavaScript. Features a clean, minimalist design that's fully responsive and easy to customize.

## Features

- **Modern Design**: Clean, minimalist aesthetic with a neutral color palette
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling and mobile-friendly menu
- **Project Showcase**: Dynamic project cards with GitHub links
- **Easy to Customize**: Simple placeholder data that's easy to update
- **Well-Commented Code**: Clear documentation throughout

## Structure

```
portfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Sections

1. **Hero Section**: Eye-catching introduction with name and tagline
2. **About Me**: Personal introduction and background
3. **Skills & Technologies**: Organized skill categories with tags
4. **Featured Projects**: Project cards with descriptions, tech stack, and links
5. **Contact**: Social links and contact information
6. **Footer**: Copyright and credits

## Customization Guide

### 1. Personal Information (index.html)

Replace the following placeholders:
- `Your Name` - Your actual name
- `your.email@example.com` - Your email address
- `yourusername` - Your GitHub username
- `yourprofile` - Your LinkedIn profile

### 2. About Section (index.html)

Update the paragraphs in the "About Me" section with your own story and background.

### 3. Skills (index.html)

Modify the skill tags in each category to match your expertise. Add or remove categories as needed.

### 4. Projects (script.js)

Edit the `projects` array in `script.js` to add your own projects:

```javascript
const projects = [
    {
        title: "Project Name",
        description: "Project description...",
        technologies: ["Tech1", "Tech2", "Tech3"],
        github: "https://github.com/username/project",
        demo: "https://project-demo.com" // or null if no demo
    },
    // Add more projects...
];
```

### 5. Colors (styles.css)

Customize the color scheme by editing CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... more colors ... */
}
```

## Usage

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/esm33/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local server:
```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

### Deployment

You can deploy this website to any static hosting service:

- **GitHub Pages**: Push to a `gh-pages` branch
- **Netlify**: Drag and drop the folder or connect your repo
- **Vercel**: Import your GitHub repository
- **Cloudflare Pages**: Connect your repository

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive features
- **No frameworks or libraries**: Pure vanilla code for simplicity

## License

Feel free to use this template for your own portfolio. No attribution required.

## Credits

Built with ❤️ using HTML, CSS, and JavaScript
