# Project Handover Document
## Think Arq Studio - Frontend Application

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Configuration](#configuration)
6. [Environment Variables](#environment-variables)
7. [Key Features & Pages](#key-features--pages)
8. [Component Architecture](#component-architecture)
9. [Constants & Data Management](#constants--data-management)
10. [Styling & Design System](#styling--design-system)
11. [Build & Deployment](#build--deployment)
12. [Development Guidelines](#development-guidelines)
13. [Important Notes](#important-notes)

---

## 1. Project Overview

**Project Name:** Think Arq Studio - Frontend  
**Framework:** Next.js 15.5.2  
**Rendering Strategy:** Static Site Generation (SSG)  
**Language:** TypeScript  
**Package Manager:** pnpm  

This is a corporate website for Think Arq Studio, a software and website development company. The website showcases services, team information, testimonials, and provides contact forms. The project uses Static Site Generation (SSG) as the primary rendering strategy since the website contains minimal dynamic content.

---

## 2. Technology Stack

### Core Dependencies
- **Next.js:** 15.5.2 (React framework with SSG support)
- **React:** 19.1.0
- **React DOM:** 19.1.0
- **TypeScript:** ^5

### UI & Styling
- **Tailwind CSS:** ^4 (Utility-first CSS framework)
- **@tailwindcss/postcss:** ^4 (PostCSS plugin)

### Animation & Media
- **@lottiefiles/dotlottie-react:** ^0.15.2 (Lottie animations)
- **swiper:** ^11.2.10 (Touch slider component)

### Form Handling & Validation
- **axios:** ^1.11.0 (HTTP client)
- **validator:** ^13.15.20 (String validation)
- **cleave.js:** ^1.6.0 (Input formatting)

### Utilities
- **clsx:** ^2.1.1 (Conditional class names)
- **tailwind-merge:** ^3.3.1 (Merge Tailwind classes)
- **react-icons:** ^5.5.0 (Icon library)
- **react-window:** 1.8.11 (Virtualized lists)

### Development Tools
- **eslint:** ^9 (Code linting)
- **eslint-config-next:** 15.5.2 (Next.js ESLint config)
- **husky:** ^9.1.7 (Git hooks)
- **@commitlint/cli:** ^19.8.1 (Commit message linting)
- **@commitlint/config-conventional:** ^19.8.1 (Conventional commits)
- **dotenv:** ^17.2.3 (Environment variables)

---

## 3. Project Structure

```
ThinkArq-Studio-FrontEnd/
├── app/                          # Main application directory
│   ├── (pages)/                  # Route group for pages
│   │   ├── [hire]/              # Dynamic hire page route
│   │   │   └── page.tsx
│   │   ├── about-us/            # About Us page
│   │   │   └── page.tsx
│   │   ├── contact/             # Contact page
│   │   │   └── page.tsx
│   │   ├── privacy-policy/      # Privacy Policy page
│   │   │   └── page.tsx
│   │   └── services/            # Services pages
│   │       └── [service-slug]/  # Dynamic service page route
│   │           └── page.tsx
│   ├── Assets/                  # Static assets
│   │   ├── Fonts/               # Custom fonts (DMSans, SpaceGrotesk)
│   │   └── Images/              # Image assets
│   ├── Components/              # React components
│   │   ├── Common/              # Shared/reusable components
│   │   │   ├── AssociateCompanySlider.tsx
│   │   │   ├── CommanHeroSection.tsx
│   │   │   ├── CommanSectionHeader.tsx
│   │   │   ├── DropDown.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── LetsConnect.tsx
│   │   │   ├── RenderFaq.tsx
│   │   │   ├── RenderNavbarDropDown.tsx
│   │   │   ├── SearchDrop.tsx
│   │   │   ├── TeamCommonCard.tsx
│   │   │   ├── TestimonialsCard.tsx
│   │   │   └── TextArea.tsx
│   │   ├── Navbar/              # Navigation component
│   │   │   └── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── GetProposalCard.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── OurCoreValue.tsx
│   │   ├── OurImpact.tsx
│   │   ├── OurServices.tsx
│   │   ├── OurTeamIntro.tsx
│   │   ├── OurWorkingProcess.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ThinkArqContactForm.tsx
│   │   └── WhyChooseUs.tsx
│   ├── Constant/                # Constant data files
│   │   ├── AboutUsConstant.ts
│   │   ├── CotactUsInfo.ts
│   │   ├── DataEngineeringService.ts
│   │   ├── DigitalMarketingServices.ts
│   │   ├── HirePagesArray.ts
│   │   ├── NavbarConstant.ts
│   │   ├── NumberFormate.ts
│   │   ├── OurTeamIntro.ts
│   │   ├── PrivacyPolicy.ts
│   │   ├── SocialMediaConstant.tsx
│   │   └── WorkingProcessArray.ts
│   ├── css/                     # Global CSS files
│   │   ├── Font.css             # Font face declarations
│   │   └── variables.css        # CSS custom properties
│   ├── data/                    # JSON data files
│   │   └── country-info.json    # Country information for forms
│   ├── Helper/                  # Helper functions
│   │   └── Helper.tsx           # Utility functions
│   ├── interface/               # TypeScript type definitions
│   │   └── interface.ts        # All TypeScript interfaces
│   ├── favicon.ico
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   ├── not-found.tsx            # 404 page
│   └── page.tsx                 # Home page
├── public/                      # Public static files
│   ├── associates-logos/        # Partner/associate logos
│   ├── Lottie/                  # Lottie animation files
│   ├── meta-images/             # Open Graph images
│   └── team/                    # Team member images
├── .git/                        # Git repository
├── commitlint.config.cjs        # Commit linting configuration
├── eslint.config.mjs            # ESLint configuration
├── global.d.ts                  # Global type definitions
├── next.config.ts               # Next.js configuration
├── next-env.d.ts                # Next.js environment types
├── package.json                 # Project dependencies
├── pnpm-lock.yaml               # pnpm lock file
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project README
```

---

## 4. Getting Started

### Prerequisites
- **Node.js:** Version 20 or higher
- **pnpm:** Package manager (install via `npm install -g pnpm`)

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd ThinkArq-Studio-FrontEnd
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   - Create a `.env.local` file in the root directory
   - Add required environment variables (see [Environment Variables](#environment-variables) section)

4. **Run development server**
   ```bash
   pnpm dev
   ```
   The application will be available at `http://localhost:3000`

### Available Scripts

- **`pnpm dev`** - Start development server with Turbopack
- **`pnpm build`** - Build production bundle with Turbopack
- **`pnpm start`** - Start production server
- **`pnpm lint`** - Run ESLint
- **`pnpm prepare`** - Set up Husky git hooks

---

## 5. Configuration

### Next.js Configuration (`next.config.ts`)

The Next.js configuration includes:
- **Webpack configuration** for `.lottie` file handling
- Lottie files are treated as asset resources

### TypeScript Configuration (`tsconfig.json`)

- **Target:** ES2017
- **Module:** ESNext
- **JSX:** Preserve (handled by Next.js)
- **Path aliases:** `@/*` maps to project root
- **Strict mode:** Enabled

### PostCSS Configuration (`postcss.config.mjs`)

- Uses `@tailwindcss/postcss` plugin for Tailwind CSS processing

### ESLint Configuration (`eslint.config.mjs`)

- Uses Next.js ESLint configuration
- Follows Next.js best practices

### Commitlint Configuration (`commitlint.config.cjs`)

- Uses conventional commit format
- Enforced via Husky git hooks

---

## 6. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Base URL for the application
NEXT_PUBLIC_BASE_URL=https://thinkarq.com

# Orbit Contact Form API Configuration
NEXT_PUBLIC_ORBIT_CONTACT_FORM_BASE_URL=<orbit-api-base-url>
NEXT_PUBLIC_ORBIT_API_KEY=<orbit-api-key>
NEXT_PUBLIC_ORBIT_API_SECRETE=<orbit-api-secret>
NEXT_PUBLIC_ORBIT_SAY_HI_FORM_ID=<say-hi-form-id>
NEXT_PUBLIC_ORBIT_GET_QUOTE_FORM_ID=<get-quote-form-id>
```

**Note:** All environment variables must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser.

---

## 7. Key Features & Pages

### Home Page (`app/page.tsx`)
- Hero section with animation
- Services showcase
- Get Proposal card
- Working process
- Team introduction
- Testimonials
- Contact form

### About Us Page (`app/(pages)/about-us/page.tsx`)
- Company introduction
- Impact metrics
- Core values
- Team information

### Contact Page (`app/(pages)/contact/page.tsx`)
- Contact form (integrated with Orbit API)
- Form validation
- Country code selection

### Services Pages (`app/(pages)/services/[service-slug]/page.tsx`)
- Dynamic service pages generated via SSG
- Service-specific content
- "How We Work" section
- Related services
- "Why Choose Us" section (if applicable)
- "Let's Connect" CTA

### Hire Pages (`app/(pages)/[hire]/page.tsx`)
- Dynamic hire pages for different roles/positions

### Privacy Policy Page (`app/(pages)/privacy-policy/page.tsx`)
- Privacy policy content

### 404 Page (`app/not-found.tsx`)
- Custom 404 error page

---

## 8. Component Architecture

### Layout Components

#### `Navbar` (`app/Components/Navbar/Navbar.tsx`)
- Main navigation bar
- Responsive mobile menu
- Dropdown navigation support
- Links configured via `NavbarConstant.ts`

#### `Footer` (`app/Components/Footer.tsx`)
- Site footer
- Social media links
- Contact information
- Navigation links

### Page-Specific Components

#### `HeroSection` (`app/Components/HeroSection.tsx`)
- Home page hero section
- Animated content

#### `CommanHeroSection` (`app/Components/Common/CommanHeroSection.tsx`)
- Reusable hero section for other pages
- Supports Lottie animations
- Customizable title and descriptions

#### `OurServices` (`app/Components/OurServices.tsx`)
- Service cards display
- Grid layout
- Service filtering

#### `HowWeWork` (`app/Components/HowWeWork.tsx`)
- Process/workflow display
- Used in service pages

#### `WhyChooseUs` (`app/Components/WhyChooseUs.tsx`)
- Benefits/advantages section
- Supports paragraph and points layout

#### `OurWorkingProcess` (`app/Components/OurWorkingProcess.tsx`)
- Company working process display
- FAQ-style accordion

#### `OurTeamIntro` (`app/Components/OurTeamIntro.tsx`)
- Team member showcase
- Uses `TeamCommonCard` component

#### `Testimonials` (`app/Components/Testimonials.tsx`)
- Customer testimonials slider
- Uses Swiper for carousel

#### `ThinkArqContactForm` (`app/Components/ThinkArqContactForm.tsx`)
- Contact form component
- Integrated with Orbit API
- Phone number validation
- Country code selection
- Email validation

#### `GetProposalCard` (`app/Components/GetProposalCard.tsx`)
- CTA card for getting proposals

#### `OurImpact` (`app/Components/OurImpact.tsx`)
- Impact metrics display

#### `OurCoreValue` (`app/Components/OurCoreValue.tsx`)
- Company core values display

### Common/Shared Components

#### `Input` (`app/Components/Common/Input.tsx`)
- Reusable input component
- Form validation support

#### `TextArea` (`app/Components/Common/TextArea.tsx`)
- Reusable textarea component

#### `SearchDrop` (`app/Components/Common/SearchDrop.tsx`)
- Searchable dropdown component
- Supports single and multi-select
- Virtualized list support

#### `DropDown` (`app/Components/Common/DropDown.tsx`)
- Dropdown component

#### `RenderNavbarDropDown` (`app/Components/Common/RenderNavbarDropDown.tsx`)
- Navigation dropdown renderer

#### `LetsConnect` (`app/Components/Common/LetsConnect.tsx`)
- "Let's Connect" CTA section
- Service-specific configuration

#### `RenderFaq` (`app/Components/Common/RenderFaq.tsx`)
- FAQ accordion renderer

#### `TeamCommonCard` (`app/Components/Common/TeamCommonCard.tsx`)
- Team member card component

#### `TestimonialsCard` (`app/Components/Common/TestimonialsCard.tsx`)
- Testimonial card component

#### `CommanSectionHeader` (`app/Components/Common/CommanSectionHeader.tsx`)
- Reusable section header component

#### `AssociateCompanySlider` (`app/Components/Common/AssociateCompanySlider.tsx`)
- Partner/associate company logo slider

---

## 9. Constants & Data Management

### Service Data

#### `DigitalMarketingServices.ts`
- Contains all digital marketing service definitions
- Includes SEO, Social Media Marketing, PPC, Email Marketing, UI/UX Design services
- Each service includes:
  - Metadata (title, description, keywords, OG image)
  - Service details
  - "How We Work" steps
  - "Why Choose Us" section
  - "Let's Connect" CTA data

#### `DataEngineeringService.ts`
- Contains data engineering service definitions
- Includes Data Analytics, Data Science services
- Same structure as Digital Marketing Services

### Navigation

#### `NavbarConstant.ts`
- Defines all navigation links
- Includes dropdown menus for Services and Hire sections
- Dynamically populated from service arrays

#### `HirePagesArray.ts`
- Defines hire page routes and data

### Other Constants

#### `AboutUsConstant.ts`
- About Us page content

#### `CotactUsInfo.ts`
- Contact information display data

#### `OurTeamIntro.ts`
- Team member information

#### `WorkingProcessArray.ts`
- Working process/FAQ data

#### `PrivacyPolicy.ts`
- Privacy policy content

#### `SocialMediaConstant.tsx`
- Social media links and icons

#### `NumberFormate.ts`
- Phone number formatting rules by country code

---

## 10. Styling & Design System

### CSS Architecture

#### Global Styles (`app/globals.css`)
- Tailwind CSS imports
- Custom CSS variables import
- Font imports
- Smooth scroll behavior
- Marquee animation
- Scrollbar hiding utilities

#### CSS Variables (`app/css/variables.css`)
- Color scheme:
  - `--white-color`: #ffffff
  - `--highlight-color`: #b9ff66
  - `--main-bg-color`: #f3f3f3
  - `--theme-black-color`: #191a23
- Container class: `.think-arq-container`
  - Responsive max-width container
  - Padding adjustments for mobile/desktop
- Responsive utilities
- Mobile navbar styles

#### Fonts (`app/css/Font.css`)
- **DMSans:** Multiple weights (Regular, Medium, Bold, etc.)
- **SpaceGrotesk:** Multiple weights (Light, Regular, Medium, SemiBold, Bold)
- Font files located in `app/Assets/Fonts/`

### Tailwind CSS
- Primary styling framework
- Custom configuration via PostCSS
- Utility-first approach
- Responsive breakpoints

### Design Patterns
- Consistent spacing system (pt-10, lg:pt-12, xl:pt-24)
- Container-based layout
- Mobile-first responsive design
- Consistent color scheme

---

## 11. Build & Deployment

### Static Site Generation (SSG)

The project uses Next.js Static Site Generation:

1. **Service Pages:** Generated at build time via `generateStaticParams()`
   - All service pages are pre-rendered
   - Located in `app/(pages)/services/[service-slug]/page.tsx`

2. **Build Process:**
   ```bash
   pnpm build
   ```
   - Generates static HTML for all pages
   - Optimizes assets
   - Creates production-ready bundle

3. **Production Server:**
   ```bash
   pnpm start
   ```
   - Serves the pre-built static site

### Deployment Considerations

- **Static Export:** The site can be deployed to any static hosting service
- **Recommended Platforms:**
  - Vercel (optimized for Next.js)
  - Netlify
  - AWS S3 + CloudFront
  - GitHub Pages (with static export)

### Environment Variables in Production
- Ensure all `NEXT_PUBLIC_*` variables are set in your hosting platform
- Never commit `.env.local` to version control

---

## 12. Development Guidelines

### TypeScript
- All components and functions should be typed
- Interfaces are defined in `app/interface/interface.ts`
- Use strict TypeScript settings

### Component Structure
- Use functional components with TypeScript
- Prefer named exports for components
- Keep components focused and reusable

### Code Organization
- **Pages:** Located in `app/(pages)/`
- **Components:** Located in `app/Components/`
- **Shared Components:** Located in `app/Components/Common/`
- **Constants:** Located in `app/Constant/`
- **Helpers:** Located in `app/Helper/`
- **Types:** Located in `app/interface/`

### Naming Conventions
- **Components:** PascalCase (e.g., `HeroSection.tsx`)
- **Files:** PascalCase for components, camelCase for utilities
- **Constants:** PascalCase (e.g., `NavbarConstant.ts`)
- **Interfaces:** PascalCase with "Interface" suffix (e.g., `NavbarLinksInterface`)

### Git Workflow
- Uses Husky for pre-commit hooks
- Commitlint enforces conventional commit messages
- Format: `type(scope): description`
  - Types: feat, fix, docs, style, refactor, test, chore

### Helper Functions (`app/Helper/Helper.tsx`)

Key utility functions:
- **`classNames()`** - Conditional class name utility
- **`IsOdd()`** - Check if number is odd
- **`getServiceBg()`** - Determine service card background pattern
- **`isValidEmail()`** - Email validation using validator library
- **`formateAndVerifyPhoneNumber()`** - Format phone numbers by country code
- **`verifyPhoneNumberLength()`** - Validate phone number length

---

## 13. Important Notes

### Static Site Generation
- The project uses SSG, so all pages are pre-rendered at build time
- Dynamic routes (like `[service-slug]`) use `generateStaticParams()` to pre-generate all pages
- No server-side API routes are used

### Lottie Animations
- Lottie files are stored in `public/Lottie/`
- Webpack is configured to handle `.lottie` files
- Use `@lottiefiles/dotlottie-react` for rendering

### Form Handling
- Contact forms use Orbit API integration
- Phone number formatting uses Cleave.js
- Country code selection uses `country-info.json` data

### Image Optimization
- Next.js Image component should be used for optimized images
- Images are stored in `public/` directory
- Meta images for Open Graph are in `public/meta-images/`

### Font Loading
- Custom fonts (DMSans, SpaceGrotesk) are loaded via CSS
- Font files are in `app/Assets/Fonts/`
- Fonts are declared in `app/css/Font.css`

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (576px), md (768px), lg (992px), xl (1199px)
- Navbar transforms to mobile menu below 768px

### Performance Considerations
- Static generation ensures fast page loads
- Lottie animations are optimized
- Images should be optimized before adding to `public/`
- Consider lazy loading for below-the-fold content

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2017 target ensures compatibility

### Future Enhancements
- Consider adding error boundaries
- Implement loading states for async operations
- Add analytics integration if needed
- Consider adding sitemap generation
- Add robots.txt for SEO

---

## 14. Troubleshooting

### Common Issues

1. **Build Errors:**
   - Ensure all environment variables are set
   - Check TypeScript errors: `pnpm lint`
   - Verify all imports are correct

2. **Lottie Files Not Loading:**
   - Verify webpack configuration in `next.config.ts`
   - Check file paths in components
   - Ensure files exist in `public/Lottie/`

3. **Styling Issues:**
   - Clear `.next` cache: `rm -rf .next`
   - Rebuild: `pnpm build`
   - Check Tailwind CSS configuration

4. **Form Submission Errors:**
   - Verify Orbit API credentials in environment variables
   - Check network requests in browser DevTools
   - Verify form validation logic

---

## 15. Contact & Support

For questions or issues related to this project:
- Review the codebase structure
- Check component documentation in code comments
- Refer to Next.js 15.5.2 documentation
- Review TypeScript interfaces for type definitions

---

## Document Version
**Version:** 1.0  
**Last Updated:** 2024  
**Prepared By:** VS Group Development Team

---

**End of Handover Document**


