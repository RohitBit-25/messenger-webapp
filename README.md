# Messenger Web App

A real-time messaging application with support for direct messages, group chats, and media sharing. Built for a seamless and responsive communication experience.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![Pusher](https://img.shields.io/badge/Pusher-Realtime-orange)

## 🚀 Key Features

*   **Real-time Messaging**: Instant message delivery using **Pusher**.
*   **Authentication**: Secure login with credential (email/password), Google, and Github via **NextAuth.js**.
*   **Group Chats**: Create and manage group conversations with multiple users.
*   **Media Sharing**: Upload and send images using **Cloudinary**.
*   **Read Receipts**: See who has read your messages in real-time.
*   **User Presence**: Online/Offline status indicators.
*   **Responsive Design**: Fully responsive interface built with **Tailwind CSS**.
*   **Profile Management**: Update your user profile and settings.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Database**: [MongoDB](https://www.mongodb.com/) using [Prisma ORM](https://www.prisma.io/)
*   **Auth**: [NextAuth.js](https://next-auth.js.org/)
*   **Real-time**: [Pusher](https://pusher.com/)
*   **Storage**: [Cloudinary](https://cloudinary.com/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Headless UI](https://headlessui.com/)
*   **Forms**: [React Hook Form](https://react-hook-form.com/)
*   **State**: [Zustand](https://github.com/pmndrs/zustand)

## ⚙️ Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later)
*   [MongoDB](https://www.mongodb.com/) Database URL

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/messenger-webapp.git
cd messenger-webapp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and populate it with the following keys:

```env
DATABASE_URL=mongodb+srv://...

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

# Social Auth Providers (Optional if only using Credentials)
GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Cloudinary (for image uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

# Pusher (for real-time updates)
NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=
NEXT_PUBLIC_PUSHER_CLUSTER=
```

### 4. Setup Database

Generate the Prisma Client and push your schema to the database.

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to start messaging!

## 📂 Project Structure

*   `/app`: Next.js App Router pages, API routes, and layouts.
*   `/components`: Reusable UI components (inputs, modals, buttons).
*   `/prisma`: Database schema definition.
*   `/actions`: Server actions for data mutation.
*   `/hooks`: Custom React hooks (useRoutes, useConversation, etc.).
*   `/libs`: Configuration for Pusher, Prisma, etc.
*   `/context`: React Context providers (AuthContext, ToasterContext).

## 🤝 Contributing

Contributions are welcome! Pull requests are encouraged.

## 📄 License

This project is licensed under the MIT License.
