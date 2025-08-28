# PMG Transport Services - UI Framework

## Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Animations](#animations)
7. [Responsive Design](#responsive-design)
8. [Accessibility](#accessibility)
9. [Usage Guidelines](#usage-guidelines)

---

## Design Philosophy

### Brand Identity
- **Professional & Trustworthy**: Clean, modern design that conveys reliability
- **Transport-Focused**: Blue color scheme representing trust and professionalism
- **Glassmorphism**: Modern glass-like effects with backdrop blur
- **Gradient Accents**: Subtle gradients for visual interest and depth

### Design Principles
- **Clarity**: Clear hierarchy and readable typography
- **Consistency**: Unified design language across all components
- **Accessibility**: WCAG compliant color contrast and interactions
- **Performance**: Optimized animations and transitions

---

## Color Palette

### Primary Colors
```css
/* PMG Brand Colors */
pmgBlue: "#2C5B90"      /* Primary brand color */
pmgBlueLight: "#3A6BA8" /* Lighter variant for gradients */
pmgBlueDark: "#1E4A7A"  /* Darker variant for hover states */
```

### Neutral Colors
```css
/* Neutral Scale */
neutral-50: "#fafafa"   /* Light backgrounds */
neutral-100: "#f5f5f5"  /* Subtle backgrounds */
neutral-200: "#e5e5e5"  /* Borders */
neutral-300: "#d4d4d4"  /* Disabled states */
neutral-400: "#a3a3a3"  /* Placeholder text */
neutral-500: "#737373"  /* Secondary text */
neutral-600: "#525252"  /* Body text */
neutral-700: "#404040"  /* Headings */
neutral-800: "#262626"  /* Strong headings */
neutral-900: "#171717"  /* Primary headings */
```

### Usage Guidelines
- **Primary Actions**: Use `pmgBlue` for main CTAs
- **Secondary Actions**: Use `pmgBlueLight` for secondary buttons
- **Hover States**: Use `pmgBlueDark` for hover effects
- **Text**: Use neutral scale for text hierarchy
- **Backgrounds**: Use white with transparency for glassmorphism

---

## Typography

### Font Families
```css
/* Primary Fonts */
font-sans: "Inter"           /* System UI fallback */
font-poppins: "Poppins"      /* Body text and UI elements */
font-oswald: "Oswald"        /* Headings and display text */
font-serif: "Playfair"       /* Accent text */
```

### Type Scale
```css
/* Heading Scale */
text-8xl: "6rem"    /* Hero headings */
text-7xl: "4.5rem"  /* Large headings */
text-6xl: "3.75rem" /* Section headings */
text-5xl: "3rem"    /* Subsection headings */
text-4xl: "2.25rem" /* Card headings */
text-3xl: "1.875rem" /* Small headings */
text-2xl: "1.5rem"  /* Component headings */
text-xl: "1.25rem"  /* Large body text */
text-lg: "1.125rem" /* Body text */
text-base: "1rem"   /* Default text */
text-sm: "0.875rem" /* Small text */
```

### Font Usage
- **Headings**: `font-oswald` for all headings
- **Body Text**: `font-poppins` for paragraphs and UI text
- **Buttons**: `font-poppins` with `font-semibold`
- **Navigation**: `font-poppins` with `font-medium`

---

## Spacing & Layout

### Container System
```css
/* Container Classes */
container mx-auto px-4 md:px-6 lg:px-8
max-w-7xl mx-auto          /* Large sections */
max-w-6xl mx-auto          /* Medium sections */
max-w-4xl mx-auto          /* Small sections */
max-w-2xl mx-auto          /* Content sections */
```

### Spacing Scale
```css
/* Vertical Spacing */
py-12 md:py-20 lg:py-24 xl:py-28  /* Hero sections */
py-16 md:py-24 lg:py-32           /* Main sections */
py-8 md:py-12 lg:py-16            /* Sub sections */
py-4 md:py-8                      /* Small sections */

/* Horizontal Spacing */
px-4 md:px-6 lg:px-8              /* Container padding */
space-x-8                          /* Component spacing */
space-y-6                          /* Vertical spacing */
gap-8 lg:gap-12                   /* Grid spacing */
```

### Grid System
```css
/* Responsive Grid */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3  /* Service cards */
grid-cols-1 lg:grid-cols-2                 /* Content sections */
flex flex-col lg:flex-row                   /* Hero layout */
```

---

## Components

### Buttons

#### Primary Button
```jsx
<Button className="bg-gradient-to-r from-pmgBlue to-pmgBlueLight hover:from-pmgBlueDark hover:to-pmgBlue text-white font-poppins font-semibold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
  Primary Action
</Button>
```

#### Secondary Button
```jsx
<Button variant="outline" className="border-2 border-pmgBlue text-pmgBlue hover:bg-pmgBlue hover:text-white font-poppins font-bold px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl">
  Secondary Action
</Button>
```

### Cards

#### Service Card
```jsx
<Card className="flex flex-col items-center p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
  <div className="w-16 h-16 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-2xl flex items-center justify-center mb-6 shadow-lg">
    <Icon className="h-8 w-8 text-white" />
  </div>
  <CardTitle className="text-2xl font-bold mb-4 font-oswald text-neutral-900">
    Service Title
  </CardTitle>
  <CardDescription className="font-poppins text-neutral-600 leading-relaxed">
    Service description
  </CardDescription>
</Card>
```

#### Feature Card
```jsx
<div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <span className="font-poppins font-semibold text-neutral-800 text-lg">
      Feature Name
    </span>
  </div>
</div>
```

### Header Component
```jsx
<header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
  <div className="container mx-auto px-4 lg:px-6">
    <div className="flex h-24 items-center justify-between">
      {/* Logo */}
      <Link className="flex items-center space-x-5 group" href="#">
        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
          <Truck className="h-8 w-8 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-pmgBlue font-oswald tracking-wide">
            PMG TRANSPORT
          </span>
          <span className="text-base text-neutral-500 font-poppins font-medium">
            Fast & Reliable
          </span>
        </div>
      </Link>
      
      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-12">
        {/* Navigation links */}
      </nav>
    </div>
  </div>
</header>
```

### Hero Section
```jsx
<section className="relative w-full py-12 md:py-20 lg:py-24 xl:py-28 overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100"></div>
  
  {/* Decorative Elements */}
  <div className="absolute top-20 left-10 w-20 h-20 bg-pmgBlue/10 rounded-full blur-xl"></div>
  <div className="absolute bottom-20 right-10 w-32 h-32 bg-pmgBlueLight/10 rounded-full blur-xl"></div>
  
  <div className="container mx-auto px-4 md:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-16 lg:gap-32 xl:gap-40">
      {/* Content */}
    </div>
  </div>
</section>
```

---

## Animations

### Keyframe Animations
```css
/* Fade In */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

/* Float */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### Animation Classes
```css
/* Animation Utilities */
animate-fade-in: 'fadeIn 0.5s ease-in-out'
animate-slide-up: 'slideUp 0.5s ease-out'
animate-float: 'float 3s ease-in-out infinite'
```

### Transition Classes
```css
/* Common Transitions */
transition-all duration-300
transform hover:scale-105
transform hover:-translate-y-2
hover:shadow-xl
```

---

## Responsive Design

### Breakpoints
```css
/* Tailwind Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Responsive Patterns
```jsx
// Responsive Typography
className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl"

// Responsive Spacing
className="py-12 md:py-20 lg:py-24 xl:py-28"

// Responsive Layout
className="flex flex-col lg:flex-row"

// Responsive Grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

---

## Accessibility

### Color Contrast
- **Primary Text**: Meets WCAG AA standards
- **Secondary Text**: Sufficient contrast ratios
- **Interactive Elements**: Clear hover and focus states

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus indicators are visible
- Logical tab order

### Screen Reader Support
- Semantic HTML structure
- Proper ARIA labels
- Alt text for images

---

## Usage Guidelines

### Do's
✅ Use the established color palette consistently
✅ Follow the typography hierarchy
✅ Implement responsive design patterns
✅ Use glassmorphism effects sparingly
✅ Maintain consistent spacing
✅ Test accessibility compliance

### Don'ts
❌ Don't use colors outside the defined palette
❌ Don't mix font families inconsistently
❌ Don't skip responsive breakpoints
❌ Don't overuse animations
❌ Don't ignore accessibility guidelines
❌ Don't break the established grid system

### Component Best Practices
1. **Reusability**: Create components that can be reused
2. **Consistency**: Use established patterns and styles
3. **Performance**: Optimize animations and transitions
4. **Maintainability**: Keep components simple and well-documented
5. **Accessibility**: Always consider accessibility first

---

## File Structure
```
components/
├── ui/                    # Base UI components (shadcn/ui)
├── header.tsx            # Header component
├── faq-section.tsx       # FAQ section
├── contact-section.tsx   # Contact section
└── theme-provider.tsx    # Theme configuration

styles/
└── globals.css          # Global styles

app/
├── page.tsx             # Main page
└── layout.tsx           # Root layout
```

---

## Implementation Notes

### Technology Stack
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Oswald, Inter)

### Custom Properties
```css
/* CSS Variables */
--radius: 0.5rem
--font-inter: Inter
--font-poppins: Poppins
--font-oswald: Oswald
--font-playfair: Playfair Display
```

This UI framework provides a solid foundation for maintaining consistency and scalability across the PMG Transport Services website.

