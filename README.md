# Roast & Ritual - Coffee Shop Website

This is a modern, responsive multi-page website for a coffee shop called "Roast & Ritual." The site is built using plain HTML, JavaScript, and Tailwind CSS classes applied directly in the HTML. It uses fluid, full-width layouts (w-full / max-w-none) to ensure the content fills the full width of the viewport on all devices.

Files
- index.html — Home page with hero, menu, filtering, and modal item viewer.
- about.html — About page with story, team, process, and gallery images.
- contact.html — Contact page with contact form and map placeholder.
- js/main.js — Main JavaScript for interactions (mobile navigation, menu filtering, modal logic, contact form validation and pseudo-submit).

Design notes
- Tailwind CSS is used via CDN. A small tailwind config script at the top of each HTML file extends the color palette with a coffee color.
- Google Font: Poppins is used. Each HTML file includes the comment format required by the generator: <!-- {{font: Poppins}} --> at the top.
- Images are inserted as placeholders in the format: {{image: description}}. The system that consumes these files should replace those placeholders with actual images from sources like Unsplash, Pexels, or Pixabay.
- The site intentionally uses w-full and max-w-none on main content wrappers to ensure full-width layouts.

Interactive features
- Mobile navigation toggle for small screens.
- Menu filter buttons (All / Espresso / Cold Brew / Pastries) to show/hide menu items.
- Modal viewer when clicking "View" on menu items, including an "Add to Order" button that triggers a toast.
- Contact form with basic client-side validation and simulated submission feedback.

How to use
1. Open index.html in a browser. The Tailwind CDN will load and styles will apply.
2. Click around the menu to filter items or view item details. Use the Contact page to submit a message (it simulates submission).

Notes for deployment
- The image placeholders must be replaced with actual URLs or left for the automated image fetcher to populate.
- This project does not include a server — the contact form is simulated on the client side. For production, integrate a backend or form service to accept submissions.

Customization
- To change the font, update the Google Fonts link in each HTML file and change the comment at the top to reflect the new font name.
- To add menu items, copy a .menuCard in index.html and update its data attributes and content.
- To expand color palette, adjust the tailwindConfig script in the HTML head tags.

If you want additional pages (shop, blog, events), e-commerce/cart integration, or a backend for the contact form, tell me what you'd like and I can extend the project.