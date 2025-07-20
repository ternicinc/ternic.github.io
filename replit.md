# Ternic RISC-V Company Website

## Overview

This repository contains a static website for Ternic, a company that develops RISC-V processors and server solutions. The website showcases the company's products, development progress, and technical capabilities through a modern, responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript
- **Design Pattern**: Multi-page static website with shared navigation and styling
- **Responsive Design**: Mobile-first approach using CSS Grid and Flexbox
- **Styling Framework**: Custom CSS with CSS custom properties (variables) for theming

### Page Structure
- **index.html**: Homepage with hero section and company overview
- **server.html**: Server solutions and product lineup
- **modules.html**: Server modules and modular architecture details
- **cpu-progress.html**: RISC-V CPU development timeline and progress
- **styles.css**: Centralized stylesheet with modern CSS features
- **script.js**: Shared JavaScript functionality across all pages

## Key Components

### Navigation System
- Responsive navigation bar with hamburger menu for mobile devices
- Active state management for current page highlighting
- Smooth scrolling and header effects on scroll
- Click-outside functionality to close mobile menu

### Visual Design System
- Dark theme with purple/blue color scheme
- Custom CSS properties for consistent theming
- Gradient backgrounds and modern shadow effects
- Typography using Inter font family from Google Fonts
- Font Awesome icons for visual enhancements

### Interactive Elements
- Navigation toggle functionality
- Scroll-based header transparency effects
- Progress bar animations (referenced in script.js)
- Performance counter animations
- Chart visualization capabilities

### Content Architecture
- Company branding focused on RISC-V technology
- Product showcase sections for servers and modules
- Development timeline for CPU progress
- Technical specifications and feature highlights

## Data Flow

### Static Content Flow
1. HTML pages serve as content containers
2. Shared CSS provides consistent styling across all pages
3. Common JavaScript handles interactive behaviors
4. Navigation state management maintains active page highlighting

### User Interaction Flow
1. User navigates between pages via navigation menu
2. JavaScript initializes page-specific functionality on DOM load
3. Responsive design adapts to different screen sizes
4. Interactive elements provide immediate visual feedback

## External Dependencies

### CDN Resources
- **Google Fonts**: Inter font family for typography
- **Font Awesome 6.0.0**: Icon library for visual elements
- **External hosting**: All dependencies loaded via CDN links

### Browser Compatibility
- Modern browser features: CSS custom properties, Grid, Flexbox
- ES6+ JavaScript features for enhanced functionality
- Responsive design for mobile and desktop devices

## Deployment Strategy

### Static Hosting
- **Architecture**: Client-side only, no server-side processing required
- **Hosting Options**: Compatible with any static hosting service (GitHub Pages, Netlify, Vercel, etc.)
- **Build Process**: No build step required - direct file serving
- **Performance**: Optimized for fast loading with minimal dependencies

### Development Workflow
- Direct file editing and browser refresh for development
- CSS and JavaScript changes reflect immediately
- No compilation or bundling process needed
- Simple file structure for easy maintenance

### Scalability Considerations
- Modular CSS architecture allows for easy theme updates
- Shared JavaScript functions reduce code duplication
- Component-based HTML structure supports future enhancements
- External dependencies via CDN ensure fast global delivery

## Technical Decisions

### Pure Vanilla Approach
- **Rationale**: Lightweight, fast-loading website without framework overhead
- **Benefits**: Better performance, easier maintenance, no build complexity
- **Trade-offs**: Manual DOM manipulation, no component reusability

### Dark Theme Design
- **Purpose**: Aligns with technology/hardware industry aesthetics
- **Implementation**: CSS custom properties for easy theme switching
- **User Experience**: Modern, professional appearance suitable for B2B audience

### Mobile-First Responsive Design
- **Approach**: Progressive enhancement from mobile to desktop
- **Benefits**: Better mobile performance, future-proof design
- **Implementation**: CSS Grid and Flexbox for flexible layouts