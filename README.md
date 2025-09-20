# Online Ticket Booking System

## 🎯 Business Requirement

An online ticket booking system for concerts, allowing users to easily search, select, and book tickets online.

## 1. Objective

- Enable users to search, select, and book tickets online quickly and conveniently.

## 2. Scope

- The system supports booking tickets for concerts.

## 3. Main Actors

- **Customer**: Searches for and books tickets.
- **Admin**: Manages ticket data and reviews bookings.

## 4. Main Functions (CRUD)

### Customer

- Register a user account
- Book new tickets (select date, time, etc.; seat selection is optional)
- Search for available tickets (view price, date, time, and details)
- View booking history

### Admin

- **Create**: Add new events/shows, manage ticket quantities (seat selection optional)
- **Read**: View all bookings, view ticket sales reports
- **Update**: Edit event details (price, time, venue, ticket quantity)
- **Delete**: Delete events, delete user accounts (with proper permissions)

## 5. Tech Stack

### Frontend

- Next.js
- Tailwind CSS
- TypeScript
- Shadcn / tweakcn
- TanStack / React Query

### Testing Tools

- Jest
- Testing Library

### Backend

- Gin-gonic

### Database

- PostgreSQL
