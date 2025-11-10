# 00-restful-apis.md

## Status

Accepted

## Deciders

Passakorn Tharnwanitchakarn

## Date

2025-09-20

## Context and Problem Statement

The Online Ticket Booking System must provide a robust, scalable, and maintainable RESTful API for booking concert tickets. The system must support multiple ticket types per event, general admission (no seat), and allow for efficient queries and updates. Data consistency and clarity for both customers and admins are required.

## Decision Drivers

- Support for multiple ticket types per event (e.g., VIP, Regular)
- General admission (no seat numbers)
- Data consistency between ticket availability and bookings
- Performance for event listing and details
- Maintainability and extensibility

## Considered Options

1. Store available_quantity in the tickets table and update on every booking/cancellation
2. Calculate available_quantity dynamically from bookings (recommended)
3. Use a hybrid approach (cache available_quantity, recalculate periodically)

## Decision Outcome

Chosen option: **2. Calculate available_quantity dynamically from bookings**

### Positive Consequences

- No risk of desynchronization between tickets and bookings
- Supports multiple ticket types and general admission
- Simple and robust logic for both booking and cancellation

### Negative Consequences

- Slightly more complex queries for available tickets
- Potential performance impact for very large events (can be optimized with indexes or caching if needed)

## Pros and Cons of the Options

### [Option 1] Store available_quantity in tickets table

**Pros:**

- Fast queries for available tickets
- Simple to implement

**Cons:**

- Risk of data inconsistency if updates fail or are not atomic
- More complex logic for booking/cancellation

### [Option 2] Calculate available_quantity dynamically (chosen)

**Pros:**

- Always consistent with bookings
- No risk of stale data
- Easy to support multiple ticket types

**Cons:**

- Slightly more complex queries

### [Option 3] Hybrid (cache and recalculate)

**Pros:**

- Can optimize for very high-traffic events

**Cons:**

- Adds complexity
- Still needs periodic reconciliation

## Main RESTful API Endpoints

### Auth

- `POST /register` — Register new user
- `POST /login` — Login, returns JWT

### Venues

- `GET /venues` — List all venues
- `GET /venues/:id` — Get venue details
- `POST /venues` — (Admin) Create venue
- `PUT /venues/:id` — (Admin) Update venue
- `DELETE /venues/:id` — (Admin) Delete venue

### Events

- `GET /events` — List all events
- `GET /events/:id` — Get event details
- `POST /events` — (Admin) Create event
- `PUT /events/:id` — (Admin) Update event
- `DELETE /events/:id` — (Admin) Delete event

### Tickets

- `GET /events/:id/tickets` — List ticket types for event (with available quantity)
- `POST /events/:id/tickets` — (Admin) Add ticket types

### Bookings

- `GET /users/:id/bookings` — List user’s bookings
- `POST /bookings` — Book tickets (specify ticket_id and quantity)
- `GET /bookings/:id` — Booking details
- `DELETE /bookings/:id` — Cancel booking

### Admin

- `GET /bookings` — All bookings
- `GET /reports` — Sales reports
- `DELETE /users/:id` — Delete user

## Additional Links

- [README.md](../../README.md)
