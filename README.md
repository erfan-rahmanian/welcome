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
   Navigate to [http://localhost:3000](http://localhost:3000)

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
│       ├── Button.tsx     # Button component
│       ├── Button.module.scss
│       ├── Input.tsx      # Input component
│       └── Input.module.scss
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
- Real-time form validation using Zod schemas
- Fetches random user data from API on successful validation
- Stores user data in localStorage and redirects to dashboard

### Dashboard Page (`/dashboard`)
- Displays welcome message with user information
- Shows user avatar, name, email, location, and phone
- Logout functionality
- Automatic redirect to auth if no user data exists

### Reusable Components
- **Input Component**: ForwardRef support, error handling, validation states
- **Button Component**: Multiple variants, loading states, disabled states

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

## 🔒 Security

- Form validation on both client and server side
- Proper error handling for API calls
- Secure localStorage usage for user data
- Type-safe API responses

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 