# My Portfolio

> A **responsive, modern, and accessible** portfolio website built with **HTML, Tailwind CSS, and vanilla JavaScript**. Showcasing projects, technical skills, services, and professional experience.

---

## 📌 **About the Project**

This repository contains the source code for **[portfolio website](https://uxlabspk.github.io)**. The site is designed to:

- Highlight **projects, skills, and experience** in software engineering.
- Provide a **clean, responsive, and accessible** interface for visitors.
- Showcase **open-source contributions, tools, and architectures** built for scalability and maintainability.

### 🏗️ **Built With**


| Technology       | Purpose                                                     |
| ---------------- | ----------------------------------------------------------- |
| **HTML5**        | Semantic structure and content                              |
| **Tailwind CSS** | Utility-first styling and responsive design                 |
| **JavaScript**   | Light interactivity (e.g., scroll animations, dynamic year) |
| **Google Fonts** | Typography (Inter, JetBrains Mono, Material Symbols)        |


---

## 🛠️ **Getting Started**

### **Prerequisites**

- A modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) [Node.js](https://nodejs.org/) for local development (if using a bundler like Vite or Parcel)

### **Installation**

1. **Clone the repository:**
  ```bash
   git clone https://github.com/uxlabspk/uxlabspk.github.io.git
   cd uxlabspk.github.io
  ```
2. **Open locally:**
  - Simply open `index.html` in your browser.
  - Or use a local server (e.g., `python -m http.server 8000`).

---

## 📂 **Project Structure**

```
uxlabspk.github.io/
├── index.html          # Main HTML file with all sections
├── assests/            # Static assets (images, project screenshots)
│   └── projects/       # Project images (e.g., Codehunts.png, BMI_View1.png)
└── README.md           # Project documentation
```

---

## 🎨 **Design & Customization**

### **Tailwind CSS Configuration**

The project uses a **custom Tailwind CSS configuration** embedded in the `<script>` tag in `index.html`. Key customizations include:

#### **Custom Colors**

- Primary: `#7dc4ff` (Light blue)
- Secondary: `#8ec5ff`
- Tertiary: `#0054cb` (Dark blue)
- Background: `#07111f` (Dark navy)
- Surface: `#091423`
- Text: `#f4f7fb` (Light gray)

#### **Custom Fonts**

- **Inter**: Used for body text, headings, and buttons.
- **JetBrains Mono**: Used for technical labels (e.g., "TypeScript", "C++").
- **Material Symbols Outlined**: Used for icons.

#### **Custom Spacing**

- `gutter`: `24px`
- `section-gap-mobile`: `48px`
- `section-gap-desktop`: `80px`
- `container-max`: `1320px`

#### **Custom Font Sizes**

- `display-lg-mobile`: `32px`
- `display-lg`: `48px`
- `headline-md`: `24px`
- `body-base`: `16px`
- `label-tech`: `14px`

### **Key Design Features**

1. **Dark Theme**: Uses a dark color scheme with custom gradients and glassmorphism effects.
2. **Responsive Design**: Fully responsive with breakpoints for mobile, tablet, and desktop.
3. **Animations**: Smooth scroll, reveal animations, and hover effects.
4. **Accessibility**: Includes skip links, ARIA labels, and reduced motion support.
5. **Custom Components**:
  - **Cards**: Project cards, skill chips, and service cards with hover effects.
  - **Buttons**: Gradient buttons and outlined buttons.
  - **Nav Bar**: Sticky navigation with blur effects.

### **Customizing the Site**

#### **Updating Projects**

1. Add/remove project cards in the `Featured Projects` section of `index.html`.
2. Example project card structure:
  ```html
   <div class="project-card group surface-card rounded-xl overflow-hidden flex flex-col h-full">
     <div class="h-[200px] overflow-hidden relative">
       <img
         alt="Project Name"
         class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         src="./assests/projects/project-image.png"
       />
     </div>
     <div class="p-xl flex flex-col flex-grow space-y-md">
       <div class="flex justify-between items-start">
         <h3 class="font-headline-md text-headline-md text-on-surface">Project Name</h3>
         <span class="font-label-tech text-label-tech text-primary bg-primary-container/10 px-sm py-xs rounded">TypeScript</span>
       </div>
       <p class="font-body-base text-body-base text-on-surface-variant flex-grow">
         Project description.
       </p>
       <a
         class="w-full py-sm border-2 border-outline-variant rounded-lg font-button-text text-button-text text-center hover:bg-on-surface hover:text-white hover:border-on-surface transition-all"
         href="https://github.com/uxlabspk/project-repo"
         target="_blank"
         >View on GitHub</a
       >
     </div>
   </div>
  ```

#### **Adding Skills**

1. Add/remove skill chips in the `Technical Proficiencies` section.
2. Example skill chip:
  ```html
   <div class="surface-card-soft flex flex-col items-center gap-md p-lg rounded-xl hover:border-primary transition-colors group">
     <img
       alt="Skill Name"
       class="w-12 h-12 transition-transform group-hover:scale-110"
       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/skill-icon.svg"
     />
     <span class="font-label-tech text-label-tech text-on-surface">Skill Name</span>
   </div>
  ```

#### **Updating Services**

1. Modify the `Services` section to add/remove service cards.
2. Example service card:
  ```html
   <article class="surface-card-soft p-xl rounded-2xl space-y-md">
     <svg class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
       <!-- SVG icon -->
     </svg>
     <h3 class="font-headline-md text-headline-md text-on-surface">Service Name</h3>
     <p class="text-sm leading-relaxed text-on-surface-variant">Service description.</p>
   </article>
  ```

#### **Updating Experience**

1. Modify the `Experience` section to add/remove experience items.
2. Example experience item:
  ```html
   <div class="surface-card-soft p-lg rounded-2xl flex items-start gap-md">
     <span class="w-3 h-3 rounded-full bg-primary mt-2"></span>
     <div>
       <h3 class="font-headline-md text-headline-md text-on-surface">Job Title</h3>
       <p class="text-sm text-on-surface-variant leading-relaxed">Job description.</p>
     </div>
   </div>
  ```

#### **Updating Contact Links**

1. Modify the `Contact` section to update social media links.
2. Example contact link:
  ```html
   <a
     class="surface-card-soft w-full flex items-center gap-md rounded-2xl p-md hover:border-primary transition-colors"
     href="https://linkedin.com/in/your-profile"
     target="_blank"
   >
     <span class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
       <!-- Icon SVG -->
     </span>
     <span class="font-body-base text-body-base text-white">LinkedIn</span>
   </a>
  ```

---

## 🚀 **Deployment**

### **GitHub Pages**

This repository is **automatically deployed to GitHub Pages** from the `main` branch. To update the live site:

1. Push changes to the `main` branch.
2. GitHub Pages will automatically deploy the updates.

### **Custom Domain (Optional)**

To use a custom domain:

1. Add a `CNAME` file with your domain (e.g., `example.com`).
2. Configure DNS settings to point to GitHub Pages.

---

## 🎯 **Key Features**

### **1. Hero Section**

- **Terminal-style badge** for availability status.
- **Gradient text** for emphasis.
- **Profile image** with hover effects.
- **Call-to-action button** ("Hire Me").

### **2. About Me Section**

- **Introduction** with a brief bio.
- **Skill highlights** (Systems Thinking, Cross-Platform, Team Leadership, Open Source).

### **3. Featured Projects Section**

- **Project cards** with images, titles, descriptions, and links to GitHub.
- **Hover effects** (scale, shadow, and translate).

### **4. Technical Proficiencies Section**

- **Skill chips** with icons and labels.
- **Hover animations** for interactivity.

### **5. Services Section**

- **Service cards** with icons, titles, and descriptions.
- **Three columns** for Architecture, Developer Tooling, and Delivery.

### **6. Experience Section**

- **Timeline-style** experience items.
- **Bullet points** for visual hierarchy.

### **7. Contact Section**

- **Gradient background** with a call-to-action.
- **Social media links** (LinkedIn, GitHub, Medium, Email).

### **8. Footer**

- **Copyright notice** with dynamic year.
- **Social media links** with icons.

---

## 🎨 **Styling & Theming**

### **Custom CSS**

The project includes **custom CSS** for:

- **Gradients**: Radial and linear gradients for backgrounds.
- **Glassmorphism**: Blur effects for cards and navigation.
- **Animations**: Reveal animations, hover effects, and transitions.
- **Accessibility**: Focus rings, reduced motion support, and skip links.

Example of custom CSS:

```css
body {
  background:
    radial-gradient(circle at top left, rgba(125, 196, 255, 0.13), transparent 28%),
    radial-gradient(circle at top right, rgba(0, 90, 182, 0.2), transparent 24%),
    #07111f;
}

.surface-card {
  background: rgba(15, 27, 45, 0.86);
  border: 1px solid rgba(48, 66, 95, 0.85);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(16px);
}
```

### **Dark/Light Mode**

The site currently uses a **dark theme**. To add a light mode:

1. Update the `darkMode` setting in `tailwind.config.js`:
  ```js
   darkMode: "class",
  ```
2. Add a toggle button to switch between themes.

---

## 📱 **Responsive Design**

The site is **fully responsive** with breakpoints for:

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

Example of responsive classes:

```html
<div class="text-sm md:text-lg lg:text-xl">Responsive Text</div>
```

---

## ♿ **Accessibility**

The site follows **accessibility best practices**:

- **Skip to Content**: Skip link for keyboard users.
- **Semantic HTML**: Proper use of headings, landmarks, and ARIA attributes.
- **Focus Rings**: Custom focus styles for interactive elements.
- **Reduced Motion**: Respects `prefers-reduced-motion` media query.
- **Color Contrast**: High contrast for readability.

---

## 🤝 **Contributing**

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## 📞 **Contact**

- **Portfolio:** [https://uxlabspk.github.io](https://uxlabspk.github.io)
- **Email:** [naveed@codehuntspk.com](mailto:naveed@codehuntspk.com)

---