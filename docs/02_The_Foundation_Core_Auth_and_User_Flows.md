# 🚀 02 - The Foundation: Core Auth & User Flows

With the skeleton in place, it's time to give it a soul. Authentication is the backbone of any SaaS app. Let's make it seamless.

**Our Goal:** A user can sign up, log in, and see a page that knows who they are. We'll handle Customers, Drivers, and Admins from the get-go.

## The Flow 🌊

1.  **Supabase Setup:**
    *   Initialize our Supabase project.
    *   Enable Email/Password Auth, and Google/Apple social logins. We need that `users` table and the auth functions ready to go.
    *   Create a `profiles` table that has a one-to-one relationship with the `auth.users` table. This is where we'll store our app-specific user data.

2.  **The `profiles` Table:**
    *   `id` (foreign key to `auth.users.id`)
    *   `user_type` (enum: 'customer', 'driver', 'admin') - This is the magic field for role-based access.
    *   `full_name`
    *   `avatar_url`
    *   `phone_number`
    *   ... any other shared data.

3.  **The Sign-Up Magic:**
    *   Wire up the `LoginPage.tsx` UI to Supabase Auth.
    *   When a new user signs up, we need a **Supabase Function (Database Trigger)** that automatically creates a corresponding entry in our `profiles` table.
    *   By default, new sign-ups are 'customer'. Admins and Drivers will be assigned their roles manually in the Admin Panel later.

4.  **The Login Flow:**
    *   User logs in via email/pass or social.
    *   Supabase handles the session. Our Next.js app will use the Supabase client to be aware of the user's session state on both the client and server.
    *   We'll create a global context or hook (`useUser`) that provides the user's session and their profile data across the app.

5.  **Role-Based Access (The Bouncer):**
    *   Create a Higher-Order Component (HOC) or a middleware function in Next.js.
    *   This "bouncer" will wrap our pages (`/customer/*`, `/driver/*`, `/admin/*`).
    *   It checks the `user_type` from the user's profile.
    *   If a 'customer' tries to access `/driver/dashboard`, they get redirected. Simple. Clean. Secure.

## The Build List 🛠️

-   [ ] **Backend:** Set up Supabase Auth and create the `profiles` table.
-   [ ] **Backend:** Write the SQL trigger function to create a profile on new user signup.
-   [ ] **Frontend:** Wire up the `LoginPage.tsx` to handle `signUp`, `signInWithPassword`, and `signInWithOAuth`.
-   [ ] **Frontend:** Implement the callback/redirect logic after login.
-   [ ] **Frontend:** Create the `useUser` hook to easily access user data.
-   [ ] **Frontend:** Build the "bouncer" logic (middleware or HOC) to protect routes based on `user_type`.
-   [ ] **Frontend:** Create a simple `LogoutButton` that calls `supabase.auth.signOut()`.
-   [ ] **Frontend:** Update the main navigation/layout to show different links based on the user's role. 