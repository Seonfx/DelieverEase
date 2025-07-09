# 🚀 04 - The Engine: Driver Flow

The drivers are the lifeblood of this service. Their experience must be focused, efficient, and reliable. No fluff, all function.

**Our Goal:** A driver can see and accept jobs, navigate, and confirm deliveries with proof.

## The Flow 🌊

1.  **The Dashboard (`driver/Dashboard.tsx`):**
    *   This is the driver's home base. It needs to fetch and display key stats: active orders, earnings today, overall rating, etc.
    *   This data comes from aggregating data from the `orders` and `driver_profiles` tables.
    *   The most critical part: a real-time listener for new jobs (both direct assignments and bidding opportunities).

2.  **Order Acquisition:**
    *   **Direct Assignment:** An admin can assign an order to a driver. This creates a record in a `driver_orders` table linking a `driver_id` and `order_id` with a status of 'assigned'. The driver's dashboard, listening in real-time, will immediately show this new job.
    *   **Bidding:** The dashboard also listens for orders marked `is_bidding = true`. A separate section will pop up, leading them to the `Bids.tsx` page. On this page, they can view details and submit a bid, which adds their `driver_id` and `bid_amount` to an `order_bids` table.

3.  **Delivery Execution (`Navigate.tsx`):**
    *   Once an order is 'accepted', this screen becomes the driver's focus.
    *   It's a map-centric view showing the route to the next stop (pickup or delivery).
    *   **The most important background task:** We use the browser's Geolocation API to get the driver's current `lat/lng`. Every few seconds, we publish these coordinates to the `delivery_tracking` channel/table in Supabase, keyed by the `order_id`. This is what the customer sees on their tracking screen.

4.  **Proof of Delivery:**
    *   At the pickup and delivery locations, the UI will prompt the driver to confirm the action.
    *   **Signature Capture:** We'll use a library like `react-signature-canvas` to capture a signature. The output image (Base64 or blob) gets uploaded to Supabase Storage, and the URL is saved against the order.
    *   **Photo Capture:** We'll use the device's camera API (`<input type="file" accept="image/*" capture>`). The photo is also uploaded to Supabase Storage, and the URL is saved.
    *   **Status Updates:** Each action (Arrived at Pickup, Confirmed Pickup, Arrived at Delivery, Confirmed Delivery) is a button that updates the `status` field of the `orders` table.

5.  **Earnings (`Earnings.tsx`):**
    *   This page shows a detailed breakdown of completed orders and earnings.
    *   It includes a "Withdraw" button. This creates a `withdrawal_requests` record in the database for an admin to approve.

## The Build List 🛠️

-   [ ] **Backend:** Create `driver_profiles` and `order_bids` tables.
-   [ ] **Backend:** Set up the Supabase Realtime channels for new orders and location tracking.
-   [ ] **Backend:** Configure Supabase Storage for signature and photo uploads with the correct access policies.
-   [ ] **Frontend:** Build the driver dashboard UI with real-time listeners.
-   [ ] **Frontend:** Implement the background location tracking and publishing in `Navigate.tsx`.
-   [ ] **Frontend:** Integrate a signature capture library.
-   [ ] **Frontend:** Integrate the photo capture functionality.
-   [ ] **Frontend:** Build the UI for the proof-of-delivery flow.
-   [ ] **Frontend:** Create the earnings and withdrawal request page. 