# ✨ Design Instructions for DeliverEase

This document provides specific design and user experience (UX) guidelines for each page of the DeliverEase application, based on the principles defined in `01_The_Vibe_and_The_Blueprint.md`.

**Core Principles:**
- **Overall:** Modern, Clean, Intuitive. Use flowing gradients, soft shadows, and natural animations.
- **Responsiveness:** All pages must be fully responsive and tested for usability on mobile, tablet, and desktop screens.
- **Customer:** Light theme. Hopeful, simple, reliable.
- **Driver:** Dark theme. Efficient, clear, high-contrast.
- **Admin:** Professional theme. Powerful, data-rich, organized.

---

## 🌎 Shared Pages (Light Theme)

### `HomePage.tsx`
- **Goal:** Convert visitors to users (Customers or Drivers).
- **Layout:** Hero section with a powerful headline (e.g., "Your City, Delivered Instantly"), a clear sub-headline, and two primary buttons: "Send a Package" and "Drive With Us".
- **Visuals:** Use a high-quality, professional background video or image showing a friendly delivery interaction.
- **Sections:** Include "How it Works," "Why Choose Us," and testimonials.

### `LoginPage.tsx`
- **Goal:** Effortless login or signup.
- **Layout:** A single, centered card on a clean background.
- **Components:** Minimalist form with fields for Email/Password. Include options for SSO (Google, etc.). A clear toggle or link to switch between Login and Sign Up.

### `ForgotPasswordPage.tsx`
- **Goal:** Simple password recovery.
- **Layout:** Similar to the login page—a centered card with a single input field for the user's email address.
- **Feedback:** Provide clear, reassuring confirmation messages (e.g., "If an account exists for this email, a recovery link has been sent.").

### `PricingPage.tsx`
- **Goal:** Transparently communicate value.
- **Layout:** Clean, easy-to-read pricing tiers or a simple rate card.
- **Interactivity:** Consider an interactive calculator where users can get a price estimate by entering pickup/delivery zones and parcel size.

---

## 🧑‍💻 Customer Flow Pages (Light Theme)

### `customer/Dashboard.tsx`
- **Goal:** Provide a quick summary and access to the primary action.
- **Layout:** A prominent, friendly greeting (e.g., "Hello, [User]!").
- **Components:** A large, inviting "Create New Delivery" button. A card-based list showing 2-3 active orders with their current status. A summary of wallet balance.

### `customer/CreateOrder.tsx`
- **Goal:** A seamless, step-by-step order creation process.
- **Layout:** A multi-step wizard interface with a clear progress bar at the top (Step 1 of 5).
- **Steps:** Each step should be a clean form on a single card. The map interface for pickup/delivery should be large and easy to use with clear "drop a pin" functionality.
- **Review Step:** The final step must clearly itemize the cost (base fare, distance, fees) before the "Confirm & Pay" button.

### `customer/Orders.tsx` & `customer/OrderDetails.tsx`
- **Goal:** Easy tracking of past and present orders.
- **Layout:** A clean, sortable table or list of orders with key info (Order ID, Status, Date, Price).
- **Details Page:** Clicking an order should lead to a detailed view with a map showing the full route, timeline of status updates, and driver information.

### `customer/TrackOrder.tsx`
- **Goal:** A live, reassuring tracking experience.
- **Layout:** A full-screen map dominating the view.
- **Visuals:** An animated marker for the driver's location that moves smoothly. The route polyline should be clearly visible. A small, non-intrusive card at the bottom can show ETA and driver details.

### `customer/Profile.tsx` & `customer/Wallet.tsx`
- **Goal:** Simple account and payment management.
- **Layout:** Standard settings layout with a sidebar for navigation (Profile, Security, Payment Methods).
- **Wallet:** Display balance clearly. Show a history of transactions (top-ups and order payments). A clear "Add Funds" button linked to the payment gateway.

---

## 🚚 Driver Flow Pages (Dark Theme, High Contrast)

### `driver/Dashboard.tsx`
- **Goal:** Mission control for the driver.
- **Layout:** A grid of bold, easy-to-read Key Performance Indicators (KPIs) at the top: Earnings Today, Active Jobs, Rating.
- **Real-Time:** A prominent section for "New Job Alerts" that updates in real-time with a clear "Accept" or "View Bid" button.

### `driver/Orders.tsx` & `driver/Bids.tsx`
- **Goal:** Quickly assess and manage jobs.
- **Layout:** A high-contrast list of jobs. Use color-coding for status (e.g., green for pickup, blue for in-transit).
- **Information:** Each list item must clearly show pickup/delivery locations, estimated payout, and distance.

### `driver/Navigate.tsx`
- **Goal:** Focused navigation and action.
- **Layout:** Map-centric. The route should be the hero.
- **HUD:** A simple "Head-Up Display" overlay at the bottom with the next turn instruction and distance. Big, touch-friendly buttons for "Arrived at Pickup," "Confirm Pickup," etc.

### `driver/Earnings.tsx`
- **Goal:** Clear and motivating earnings summary.
- **Layout:** A graph showing earnings over time (week/month). A detailed list of completed trips with individual payouts.
- **Action:** A prominent "Withdraw" button with a clear display of the available balance.

### `driver/Profile.tsx`
- **Goal:** Manage personal and vehicle info.
- **Layout:** Simple forms for editing profile details, contact info, and vehicle information. A section to view performance ratings and feedback.

---

## 👑 Admin Panel Pages (Professional Theme)

### `admin/Dashboard.tsx`
- **Goal:** The "god-view" of the entire system.
- **Layout:** A dense, data-rich dashboard with charts and graphs.
- **Widgets:** Key metrics like "Ongoing Deliveries," "Revenue Today," "New Users," "Available Drivers." A live map showing all active drivers.

### `admin/Orders.tsx`, `admin/Users.tsx`, `admin/Drivers.tsx`
- **Goal:** Efficient management of core data.
- **Layout:** Powerful data tables (e.g., using a library like TanStack Table).
- **Functionality:** Must have robust search, filter, and sort capabilities. Actions (e.g., "Verify Driver," "Cancel Order," "Ban User") should be available in each row.

### `admin/Financials.tsx`
- **Goal:** Securely manage financial operations.
- **Layout:** A data table for withdrawal requests with "Approve/Deny" actions. A separate table for all transactions in the system.
- **Security:** This page should have an extra layer of confirmation for sensitive actions.

### `admin/Settings.tsx`
- **Goal:** Master control panel for the application.
- **Layout:** A well-organized settings page with sections for "Pricing Rules," "Vehicle Types," "System Fees," etc. Use clear forms and toggles. 