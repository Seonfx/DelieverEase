# 🚀 05 - The Control Tower: Admin Panel

The Admin Panel is the brain of the operation. It's where the business is managed, and the magic is controlled. It needs to be a powerhouse of data and functionality, presented with clarity.

**Our Goal:** An admin can manage all aspects of the platform, from users and orders to finances and system settings.

## The Flow 🌊

This entire section is about building a comprehensive CRUD (Create, Read, Update, Delete) interface on top of our database tables. We'll use a component library like the Material UI data grid or AG Grid to handle the complex tables, sorting, and filtering.

1.  **The Dashboard (`admin/Dashboard.tsx`):**
    *   The 10,000-foot view. This page will display key analytics and charts.
    *   We'll need to create several PostgreSQL `VIEW`s or RPC functions in Supabase to aggregate data efficiently (e.g., revenue over time, new users per day, active orders).
    *   This is a read-only view of the health of the business.

2.  **Order Management (`admin/Orders.tsx`):**
    *   A powerful table displaying all orders.
    *   Features: Search by order ID, filter by status, sort by date.
    *   Actions: View order details, and—most importantly—**manually assign** an order to a driver by selecting a driver from a dropdown.

3.  **User & Driver Management (`admin/Users.tsx`, `admin/Drivers.tsx`):**
    *   Two separate tables for customers and drivers.
    *   Admin can view user details, and edit certain fields.
    *   **Driver Verification Flow:** The Drivers table will have a special "Verification" view. Admin can view submitted documents (links to Supabase Storage files) and with a single click, approve or reject a driver's application, which updates their `verification_status`.

4.  **Financials (`admin/Financials.tsx`):**
    *   A table of all `withdrawal_requests` from drivers.
    *   Admin can approve or deny requests. An approval would trigger a backend function to update the status and (in a real-world scenario) integrate with a payment service to send the money. For our build, we'll just update the status.
    *   A view of all transactions and platform revenue.

5.  **The Master Settings Panel (`admin/Settings.tsx`):**
    *   This is the most powerful page. It's a form that directly edits a `settings` table in our database.
    *   **Pricing:** Set base fares, per-mile/km rates.
    *   **Features:** Toggles (boolean flags) to enable/disable "Bidding" or "Insurance" platform-wide.
    *   **Localization:** Set the default currency, distance unit, etc.
    *   **Payment Gateway Keys:** Securely input and update API keys for Stripe.

## The Build List 🛠️

-   [ ] **Backend:** Create the necessary database tables: `settings`, `withdrawal_requests`.
-   [ ] **Backend:** Write the SQL views or RPC functions needed for the analytics dashboard.
-   [ ] **Backend:** Secure all admin-related API endpoints to ensure only users with the 'admin' role can access them. This can be done using Row Level Security (RLS) policies in Supabase.
-   [ ] **Frontend:** Choose and integrate a powerful data grid/table library.
-   [ ] **Frontend:** Build the UI for the analytics dashboard, connecting it to the backend views.
-   [ ] **Frontend:** Build the full CRUD UI for Orders, Users, and Drivers.
-   [ ] **Frontend:** Implement the driver verification workflow UI.
-   [ ] **Frontend:** Build the financial management pages.
-   [ ] **Frontend:** Create the master settings form that reads from and writes to the `settings` table. 