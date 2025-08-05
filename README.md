# Auth Dashboard App

A modern authentication and dashboard application built with Next.js, TypeScript, and SCSS Modules.

## 🚀 Features

- **Authentication Flow**: Simple login with phone number validation
- **Responsive Design**: Modern UI that works on all devices
- **Type Safety**: Full TypeScript support with proper interfaces
- **Form Validation**: Schema-based validation using Zod
- **State Management**: React Context API with localStorage persistence
- **Reusable Components**: Modular UI components with SCSS Modules
- **API Integration**: Fetches user data from randomuser.me API
- **Enhanced UX**: Toast notifications, loading overlays, and smooth transitions
- **Real-time Feedback**: Instant validation and user feedback
- **Professional UI**: Modern design with animations and micro-interactions

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules with nesting support
- **Validation**: Zod schema validation
- **State Management**: React Context API
- **API**: Random User API (randomuser.me)

## 📋 Requirements

- Node.js 18+ 
- npm or yarn

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) or [http://localhost:3001](http://localhost:3001) if port 3000 is in use

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication page
│   ├── dashboard/         # Dashboard page
│   ├── globals.scss       # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page (redirects)
├── components/            # Reusable UI components
│   └── ui/
│       ├── Button.tsx     # Button component with loading states
│       ├── Button.module.scss
│       ├── Input.tsx      # Input component with validation
│       ├── Input.module.scss
│       ├── Toast.tsx      # Toast notification component
│       ├── Toast.module.scss
│       ├── LoadingOverlay.tsx  # Loading overlay component
│       └── LoadingOverlay.module.scss
├── contexts/              # React Context providers
│   └── AuthContext.tsx    # Authentication context
├── lib/                   # Utility libraries
│   └── validation.ts      # Zod validation schemas
├── services/              # API services
│   └── authService.ts     # Authentication API calls
└── types/                 # TypeScript type definitions
    └── index.ts           # Application types
```

## 🎯 Features Overview

### Authentication Page (`/auth`)
- Phone number input with Iranian mobile validation (11 digits starting with "09")
- Real-time form validation using Zod schemas with instant feedback
- Fetches random user data from API on successful validation
- Stores user data in localStorage and redirects to dashboard
- **Enhanced UX Features**:
  - Toast notifications for success/error feedback
  - Loading overlay during authentication process
  - Smooth transitions and animations
  - Real-time validation with error clearing

### Dashboard Page (`/dashboard`)
- Displays welcome message with user information
- Shows user avatar, name, email, location, and phone
- Logout functionality with confirmation feedback
- Automatic redirect to auth if no user data exists
- **Enhanced UX Features**:
  - Toast notifications for logout confirmation
  - Loading overlay during logout process
  - Responsive design for all screen sizes

### Reusable Components
- **Input Component**: ForwardRef support, error handling, validation states, real-time feedback
- **Button Component**: Multiple variants, loading states, disabled states, spinner animations
- **Toast Component**: Success, error, and info notifications with auto-dismiss and manual close
- **LoadingOverlay Component**: Full-screen loading overlay with blur effect and custom messages

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript strict mode enabled
- SCSS Modules for component styling
- Proper folder structure and naming conventions
- Reusable components with proper TypeScript interfaces

## 🎨 Styling

The application uses SCSS Modules with:
- Modern CSS features and nesting
- Responsive design with mobile-first approach
- Consistent color scheme and typography
- Smooth transitions and hover effects
- **Advanced Animations**:
  - Fade-in/out transitions for Toast notifications
  - Slide animations for loading overlays
  - Spinner animations for loading states
  - Hover effects and micro-interactions

## 🔒 Security

- Form validation on both client and server side
- Proper error handling for API calls
- Secure localStorage usage for user data
- Type-safe API responses
- **Enhanced Security Features**:
  - Real-time validation with immediate feedback
  - Graceful error handling with user-friendly messages
  - Input sanitization and validation
  - Secure state management with Context API

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

**Responsive Features**:
- Mobile-first design approach
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements
- Optimized loading states for mobile devices

## 🎯 User Experience (UX) Features

### Enhanced Feedback System
- **Toast Notifications**: Real-time feedback for all user actions
  - Success messages for successful operations
  - Error messages with helpful guidance
  - Info messages for status updates
- **Loading States**: Visual feedback during async operations
  - Button loading spinners
  - Full-screen loading overlays
  - Smooth transitions between states

### Form Validation & Interaction
- **Real-time Validation**: Instant feedback as users type
- **Error Clearing**: Automatic error removal when user starts typing
- **Visual Feedback**: Clear indication of form status
- **Accessibility**: Proper focus management and keyboard navigation

### Smooth Transitions
- **Page Transitions**: Smooth navigation between pages
- **Component Animations**: Fade-in/out effects for better UX
- **Loading Animations**: Professional spinner and loading indicators
- **Micro-interactions**: Hover effects and button states

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 