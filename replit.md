# Overview

This is a full-stack web application built with React, Express, and PostgreSQL featuring a modern UI for what appears to be a fragrance/perfume e-commerce landing page. The application uses a monorepo structure with TypeScript throughout, combining a React frontend with an Express backend and PostgreSQL database managed through Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development/build tooling
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming and custom design system
- **Component Structure**: Modular component architecture with reusable UI components like CountdownTimer, GlowButton, ReviewCard, etc.

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Architecture Pattern**: Simple REST API structure with modular route registration
- **Storage Interface**: Abstracted storage layer with both in-memory and database implementations
- **Development**: Hot reloading with Vite integration for full-stack development

## Database Design
- **Database**: PostgreSQL with Neon serverless hosting
- **Schema Management**: Drizzle Kit for migrations and schema management
- **User Schema**: Basic user table with UUID primary keys, username, and password fields
- **Type Safety**: Full TypeScript integration with inferred types from database schema

## Development Workflow
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Development Server**: Integrated Vite dev server with Express API proxy
- **Hot Reloading**: Both frontend and backend support hot reloading during development
- **Type Checking**: Shared TypeScript configuration across client, server, and shared code

## Design System
- **Theme**: Dark mode design with purple/pink accent colors and glassmorphism effects
- **Typography**: Multiple font families (Inter, Playfair Display, Fira Code) for different use cases
- **Component Library**: Comprehensive UI component library with consistent styling patterns
- **Responsive Design**: Mobile-first approach with responsive breakpoints

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM for PostgreSQL database operations
- **@tanstack/react-query**: Server state management and data fetching
- **wouter**: Lightweight routing library for React

## UI Component Libraries
- **@radix-ui/***: Comprehensive collection of unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built component library built on Radix UI
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Type-safe variant management for components

## Development Tools
- **vite**: Frontend build tool and development server
- **tsx**: TypeScript execution engine for Node.js
- **drizzle-kit**: Database migration and introspection tool
- **@replit/vite-plugin-runtime-error-modal**: Replit-specific development enhancements

## Additional Libraries
- **react-hook-form**: Form management with validation
- **zod**: Runtime type validation and schema parsing
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel/slider component functionality
- **cmdk**: Command palette and search functionality