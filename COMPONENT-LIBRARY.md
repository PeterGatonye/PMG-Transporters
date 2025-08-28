# PMG Transport Services - Component Library

## Table of Contents
1. [Overview](#overview)
2. [Base Components](#base-components)
3. [Layout Components](#layout-components)
4. [Content Components](#content-components)
5. [Interactive Components](#interactive-components)
6. [Form Components](#form-components)
7. [Navigation Components](#navigation-components)
8. [Utility Components](#utility-components)

---

## Overview

This component library provides a comprehensive set of reusable components for the PMG Transport Services website. All components follow the established design system and are built with accessibility and performance in mind.

### Technology Stack
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Library**: Shadcn/ui + Radix UI primitives
- **Icons**: Lucide React
- **Animations**: CSS keyframes and Tailwind animations

---

## Base Components

### Button Component
The primary interactive element used throughout the application.

#### Variants
```tsx
// Primary Button
<Button className="bg-gradient-to-r from-pmgBlue to-pmgBlueLight hover:from-pmgBlueDark hover:to-pmgBlue text-white font-poppins font-semibold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
  Primary Action
</Button>

// Secondary Button
<Button variant="outline" className="border-2 border-pmgBlue text-pmgBlue hover:bg-pmgBlue hover:text-white font-poppins font-bold px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl">
  Secondary Action
</Button>

// Ghost Button
<Button variant="ghost" className="text-neutral-700 hover:text-pmgBlue font-poppins">
  Ghost Button
</Button>
```

#### Props
- `variant`: "default" | "outline" | "ghost"
- `size`: "sm" | "md" | "lg"
- `asChild`: boolean (for Next.js Link integration)
- `className`: string (custom styling)

### Card Component
Container component for displaying content in structured layouts.

```tsx
// Service Card
<Card className="flex flex-col items-center p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
  <div className="w-16 h-16 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-2xl flex items-center justify-center mb-6 shadow-lg">
    <Truck className="h-8 w-8 text-white" />
  </div>
  <CardTitle className="text-2xl font-bold mb-4 font-oswald text-neutral-900">
    Service Title
  </CardTitle>
  <CardDescription className="font-poppins text-neutral-600 leading-relaxed">
    Service description
  </CardDescription>
</Card>

// Info Card
<Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
  <CardContent className="p-6">
    <h3 className="text-xl font-bold text-neutral-900 font-oswald mb-2">Info Title</h3>
    <p className="text-sm text-neutral-600 font-poppins">Information content</p>
  </CardContent>
</Card>
```

#### Sub-components
- `CardTitle`: For card headings
- `CardDescription`: For card descriptions
- `CardContent`: For card body content
- `CardHeader`: For card headers
- `CardFooter`: For card footers

---

## Layout Components

### Header Component
The main navigation component used across all pages.

```tsx
import { Header } from "@/components/header"

// Usage
<Header />
```

#### Features
- **Sticky positioning** with backdrop blur
- **Responsive navigation** with mobile menu
- **Logo with branding** and contact information
- **Smooth hover effects** and transitions
- **Accessible navigation** with proper ARIA labels

#### Structure
```tsx
<header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
  <div className="container mx-auto px-4 lg:px-6">
    <div className="flex h-24 items-center justify-between">
      {/* Logo Section */}
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

### Hero Section Component
The main landing section with call-to-action elements.

```tsx
// Hero Section Structure
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

#### Features
- **Responsive layout** with flexbox
- **Gradient backgrounds** and decorative elements
- **Animated content** with fade-in effects
- **Call-to-action buttons** with hover effects
- **Contact information** display

---

## Content Components

### Service Card Component
Displays individual service offerings with icons and descriptions.

```tsx
// Service Card
<Card className="flex flex-col items-center p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
  <div className="w-16 h-16 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-2xl flex items-center justify-center mb-6 shadow-lg">
    <Truck className="h-8 w-8 text-white" />
  </div>
  <CardTitle className="text-2xl font-bold mb-4 font-oswald text-neutral-900">
    Goods Transport
  </CardTitle>
  <CardDescription className="font-poppins text-neutral-600 leading-relaxed">
    Reliable and secure transportation of various goods, from small parcels to large cargo with professional handling.
  </CardDescription>
</Card>
```

#### Props
- `icon`: Lucide React icon component
- `title`: string - Service title
- `description`: string - Service description
- `className`: string - Additional styling

### Feature Card Component
Horizontal layout for highlighting key features.

```tsx
// Feature Card
<div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-gradient-to-br from-pmgBlue to-pmgBlueLight rounded-lg flex items-center justify-center">
      <Home className="h-6 w-6 text-white" />
    </div>
    <span className="font-poppins font-semibold text-neutral-800 text-lg">
      House Moving
    </span>
  </div>
</div>
```

### Contact Info Component
Displays contact information with icons.

```tsx
// Contact Info
<div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl px-8 py-5 shadow-lg border border-white/50">
  <Phone className="h-6 w-6 text-pmgBlue" />
  <span className="font-poppins font-bold text-neutral-800 text-lg">0768067480</span>
</div>
```

---

## Interactive Components

### FAQ Section Component
Accordion-style FAQ display with smooth animations.

```tsx
import { FAQSection } from "@/components/faq-section"

// Usage
<FAQSection />
```

#### Features
- **Accordion functionality** with Radix UI
- **Smooth animations** and transitions
- **Accessible keyboard navigation**
- **Responsive design** for all screen sizes

### Contact Section Component
Contact form with validation and submission handling.

```tsx
import { ContactSection } from "@/components/contact-section"

// Usage
<ContactSection />
```

#### Features
- **Form validation** with React Hook Form
- **Accessible form controls** with proper labels
- **Error handling** and success states
- **Responsive layout** with proper spacing

---

## Form Components

### Input Component
Styled input fields with validation states.

```tsx
// Text Input
<input
  type="text"
  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-pmgBlue focus:border-transparent font-poppins"
  placeholder="Enter your name"
/>

// Email Input
<input
  type="email"
  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-pmgBlue focus:border-transparent font-poppins"
  placeholder="Enter your email"
/>

// Textarea
<textarea
  className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-pmgBlue focus:border-transparent font-poppins resize-none"
  rows={4}
  placeholder="Enter your message"
/>
```

### Form Validation
```tsx
// Error State
<div className="space-y-2">
  <input
    type="text"
    className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-poppins"
    placeholder="Enter your name"
  />
  <p className="text-sm text-red-600 font-poppins">This field is required</p>
</div>
```

---

## Navigation Components

### Navigation Menu
Main site navigation with hover effects.

```tsx
// Navigation Links
<nav className="hidden md:flex items-center space-x-12">
  <Link
    className="text-lg font-medium text-neutral-700 hover:text-pmgBlue transition-colors duration-200 font-poppins relative group"
    href="#services"
  >
    Services
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pmgBlue transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link 
    className="text-lg font-medium text-neutral-700 hover:text-pmgBlue transition-colors duration-200 font-poppins relative group" 
    href="#faq"
  >
    FAQ
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pmgBlue transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link
    className="text-lg font-medium text-neutral-700 hover:text-pmgBlue transition-colors duration-200 font-poppins relative group"
    href="#contact"
  >
    Contact
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pmgBlue transition-all duration-300 group-hover:w-full"></span>
  </Link>
</nav>
```

### Mobile Menu
Responsive mobile navigation with hamburger menu.

```tsx
// Mobile Menu Button
<Button
  variant="ghost"
  size="sm"
  className="md:hidden p-2"
  aria-label="Toggle menu"
>
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</Button>
```

---

## Utility Components

### Loading Spinner
Animated loading indicator.

```tsx
// Loading Spinner
<div className="flex items-center justify-center">
  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pmgBlue"></div>
</div>
```

### Badge Component
Small status indicators and labels.

```tsx
// Badge
<div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pmgBlue to-pmgBlueLight text-white px-8 py-4 rounded-full font-poppins font-semibold text-base shadow-lg">
  <Star className="h-5 w-5" />
  <span>PREMIUM TRANSPORT SERVICES</span>
</div>
```

### Divider Component
Visual separation between sections.

```tsx
// Divider
<div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-8"></div>
```

---

## Component Best Practices

### 1. Accessibility
- Always include proper ARIA labels
- Ensure keyboard navigation works
- Maintain sufficient color contrast
- Use semantic HTML elements

### 2. Performance
- Use React.memo for expensive components
- Optimize images and assets
- Implement lazy loading where appropriate
- Minimize re-renders with proper state management

### 3. Responsive Design
- Test on multiple screen sizes
- Use responsive utility classes
- Ensure touch targets are adequate
- Maintain readability on mobile

### 4. Consistency
- Follow the established design system
- Use consistent spacing and typography
- Maintain color palette adherence
- Apply consistent animations

### 5. Reusability
- Create generic, reusable components
- Accept props for customization
- Provide sensible defaults
- Document component APIs

---

## File Structure

```
components/
├── ui/                    # Base UI components (shadcn/ui)
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...
├── header.tsx            # Header component
├── faq-section.tsx       # FAQ section
├── contact-section.tsx   # Contact section
├── style-guide.tsx       # Style guide component
└── theme-provider.tsx    # Theme configuration
```

---

## Usage Examples

### Creating a New Page
```tsx
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function NewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <Header />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-neutral-900 font-oswald mb-8">
          Page Title
        </h1>
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <CardTitle className="text-2xl font-bold text-neutral-900 font-oswald mb-4">
              Card Title
            </CardTitle>
            <p className="font-poppins text-neutral-600">
              Content goes here
            </p>
            <Button className="mt-4 bg-gradient-to-r from-pmgBlue to-pmgBlueLight hover:from-pmgBlueDark hover:to-pmgBlue text-white font-poppins font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Action Button
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
```

### Adding a New Component
```tsx
// components/new-component.tsx
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface NewComponentProps {
  title: string
  description: string
  onAction?: () => void
}

export function NewComponent({ title, description, onAction }: NewComponentProps) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <CardTitle className="text-2xl font-bold text-neutral-900 font-oswald mb-4">
          {title}
        </CardTitle>
        <p className="font-poppins text-neutral-600 mb-4">
          {description}
        </p>
        {onAction && (
          <Button 
            onClick={onAction}
            className="bg-gradient-to-r from-pmgBlue to-pmgBlueLight hover:from-pmgBlueDark hover:to-pmgBlue text-white font-poppins font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Action
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
```

This component library provides a solid foundation for building consistent, accessible, and performant user interfaces for the PMG Transport Services website.
