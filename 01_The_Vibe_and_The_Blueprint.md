# 🚀 01 - The Vibe & The Blueprint

This is where it all begins. Before a single line of code, we define the vibe. Our north star.

## The Vibe ✨

**Modern, Clean, and Intuitive.**

Think gradients that flow, shadows that give depth, and animations that feel natural. The user shouldn't *think*; they should *glide* through the interface. Every interaction should feel responsive and satisfying.

-   **Fully Responsive:** The entire application, from the public site to the admin panel, must provide a seamless and optimized experience on all screen sizes, from mobile phones to high-resolution desktops.
-   **Customer App:** Hopeful, simple, and reliable. Light themes, clear calls-to-action. The feeling of "my package is in good hands."
-   **Driver App:** Efficient, clear, and empowering. Dark mode first. High contrast for readability in any light. Focus on the mission: get from A to B.
-   **Admin Panel:** Powerful, data-rich, and organized. A command center. Dense information presented beautifully.

## The Tech Stack 🛠️

-   **Frontend:** Next.js with TypeScript (for that clean, scalable structure).
-   **Styling:** Tailwind CSS (for rapid, utility-first styling that just works).
-   **UI Components:** Shadcn/UI (beautifully designed, accessible, and unopinionated components to build upon).
-   **Backend:** Supabase (Postgres database, Auth, Storage, and Realtime all in one. It's the ultimate vibe-coder backend).
-   **Mapping:** Google Maps API for the web.

## The Public Website 🌐

This is the marketing front-door. It's what convinces potential customers and recruits drivers. It should be visually appealing, fast-loading, and clearly communicate the value proposition.

-   **Home (`/`):** Hero section with a clear headline, a sub-headline explaining the service, and primary calls-to-action (e.g., "Send a Package," "Drive With Us").
-   **About Us (`/about`):** The story behind the company, the mission, and the team.
-   **Services (`/services`):** A detailed breakdown of what can be delivered (parcels, documents, etc.), the types of vehicles available, and the areas served.
-   **Pricing (`/pricing`):** A transparent overview of the pricing model. This could be a simple rate card or an interactive calculator.
-   **Contact (`/contact`):** A simple form for inquiries and customer support, along with business contact information.

## PWA (Progressive Web App) Enablement 🚀

To give users a native-app-like experience, we will build the site as a PWA. This allows users to "install" the app on their mobile device's home screen for quick access.

-   **Service Worker:** Implement a service worker (`service-worker.js`) to manage caching and enable offline functionality. Initially, this will cache the main application shell and static assets.
-   **Web App Manifest:** Create a `manifest.json` file. This file will define the app's name (`DeliverEase`), icons, start URL, display mode (`standalone`), and theme colors. This is what enables the "Add to Home Screen" prompt on mobile browsers.
-   **Offline Support:** While full offline functionality for creating orders isn't feasible, the service worker will allow users to open the app, view cached pages (like their dashboard or past orders), and see a clear "You are currently offline" message.

## The Skeleton Pages 💀 (Phase 1: UI Only)

First, we build the shell. No logic, just pure, beautiful UI. This is our scaffolding. We need to see the space before we can fill it.

### 🌎 Shared Pages
- `HomePage.tsx`: Our beautiful front door, serving as the main page of the public website.
- `LoginPage.tsx`: Simple, clean login/signup form.
- `ForgotPasswordPage.tsx`: The rescue hatch.
- `PricingPage.tsx`: Where we show the value.

### 🧑‍💻 Customer Flow Pages
- `customer/Dashboard.tsx`: Main hub. A summary of active orders and a big "Create New Delivery" button.
- `customer/CreateOrder.tsx`: The multi-step wizard. We'll build the UI for all 5 steps.
- `customer/Orders.tsx`: A list of all past and active orders.
- `customer/OrderDetails.tsx`: A detailed view of a single order.
- `customer/TrackOrder.tsx`: The map view for real-time tracking.
- `customer/Profile.tsx`: User profile and settings.
- `customer/Wallet.tsx`: Wallet view.
- `customer/Support.tsx`: Help and support page.

### 🚚 Driver Flow Pages
- `driver/Dashboard.tsx`: The driver's mission control. Grid of KPIs.
- `driver/Orders.tsx`: The detailed, filterable list of all assigned orders.
- `driver/Bids.tsx`: List of jobs available for bidding.
- `driver/Navigate.tsx`: The active delivery map view.
- `driver/Earnings.tsx`: Earnings history and withdrawal screen.
- `driver/Profile.tsx`: Driver-specific profile and vehicle management.

### 👑 Admin Panel Pages
- `admin/Dashboard.tsx`: The god-view. Analytics and system overview.
- `admin/Orders.tsx`: Table of all orders in the system.
- `admin/Users.tsx`: Table of all customers.
- `admin/Drivers.tsx`: Table of all drivers, with a sub-page for verification.
- `admin/Financials.tsx`: Manage withdrawals, view transactions.
- `admin/Settings.tsx`: The master control panel for the entire app.

This is our build list. Let's get it. 