# 🚀 03 - The Heartbeat: Customer Flow

The customer is why we're here. This flow needs to be buttery smooth. From "I need to send something" to "It's delivered!" in as few clicks as possible.

**Our Goal:** A logged-in customer can create a multi-step order, pay for it, and track it in real-time.

## The Flow 🌊

1.  **The Order Creation Wizard (`CreateOrder.tsx`):**
    *   This is a multi-step form. We'll use a state management library like Zustand or Jotai to manage the form state across all steps. It's lightweight and fits the vibe.
    *   **Step 1 (Details):** Connect to the backend to fetch available `vehicle_types` and `parcel_types` to populate dropdowns.
    *   **Step 2 & 3 (Pickup/Delivery):** Integrate the mapping API (Mapbox/Google Maps). We need an autocomplete search for addresses and the ability to drop a pin.
    *   **Step 4 (Route):** Use the mapping API to draw the polyline on the map between the two points and get the distance.
    *   **Step 5 (Review):** Calculate the price based on distance, vehicle type, weight, and any admin-defined fees. This happens on the backend for security. The frontend sends the core order details, and the backend returns the calculated price.

2.  **Database Tables (`orders`, `addresses`):**
    *   `orders`: The main table to store all order details (status, user_id, pickup_address_id, delivery_address_id, price, etc.).
    *   `addresses`: A table to store address details, linked to the order.

3.  **Payment Integration (WiPay):**
    *   Our chosen processor is **WiPay**, a leading Caribbean gateway that directly processes charges in TTD for Mastercard and Visa.
    *   When the user confirms the order, we'll hit a backend endpoint (a Supabase Edge Function).
    *   This function will make a secure, server-to-server call to the WiPay API with the transaction details.
    *   We'll handle the response from the WiPay API to confirm the payment and update the order status in our database to 'paid' or 'active'.

4.  **Real-Time Tracking (`TrackOrder.tsx`):**
    *   This is where Supabase's Realtime shines.
    *   The driver's app will be publishing their location coordinates to a `delivery_tracking` table or channel in Supabase.
    *   The `TrackOrder.tsx` page will subscribe to updates for that specific order's driver.
    *   As new coordinates come in, we'll smoothly animate the driver's marker on the map. No need for polling or manual refreshing. Just pure, real-time magic.

## The Build List 🛠️

-   [ ] **Backend:** Create `orders` and `addresses` tables in Supabase.
-   [ ] **Backend:** Create tables for `vehicle_types`, `parcel_types` if they need to be dynamic.
-   [ ] **Backend:** Write a Supabase Edge Function to calculate order price.
-   [ ] **Frontend:** Build the multi-step form UI in `CreateOrder.tsx` and manage its state.
-   [ ] **Frontend:** Integrate the mapping API for address search and route display.
-   [ ] **Frontend:** Connect the "Confirm Order" button to the backend to initiate payment.
-   [ ] **Frontend:** Set up the Supabase Realtime subscription on the `TrackOrder.tsx` page to listen for driver location updates.
-   [ ] **Frontend:** Animate the marker on the map as new location data arrives. 