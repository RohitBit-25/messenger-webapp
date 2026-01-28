# Volo - Premium Messaging Experience

![Volo Banner](public/images/logo.png)

> **Volo** is a next-generation real-time messaging application designed for speed and aesthetic excellence. Featuring a premium dark mode with neon accents and glassmorphism, it redefines how you connect.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## ✨ Unique Features

-   **🎨 Premium UI/UX**: A bespoke **Dark Mode** with **Glassmorphism** and **Neon Accents** (Cyan/Violet) for a futuristic feel.
-   **⚡ Real-time Sync**: Instant message delivery and typing indicators powered by **Pusher**.
-   **🔒 Secure Authentication**: Robust login support (Google, GitHub, Credentials) via **NextAuth.js**.
-   **📸 Media Sharing**: Seamless image uploads and rendering using **Cloudinary**.
-   **👥 Group Chats**: Create unlimited group conversations with real-time administration.
-   **📱 Fully Responsive**: Optimized mobile-first design that behaves like a native app.

## 🛠️ Technology Stack

-   **Frontend**: [Next.js 14](https://nextjs.org/) (App Router), [React 18](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
-   **Backend**: Next.js API Routes, [Prisma ORM](https://www.prisma.io/)
-   **Database**: [MongoDB](https://www.mongodb.com/)
-   **Real-time Engine**: [Pusher Channels](https://pusher.com/)
-   **Authentication**: [NextAuth.js](https://next-auth.js.org/)
-   **Storage**: [Cloudinary](https://cloudinary.com/)

## 🚀 Getting Started

Follow these steps to deploy your own instance of Volo.

### Prerequisites

-   Node.js (v18+)
-   MongoDB Instance (Atlas or Local)
-   Cloudinary Account
-   Pusher Account

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/volo-messenger.git
    cd volo-messenger
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory:
    ```env
    DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/test"
    NEXTAUTH_SECRET="your_super_secret_key"
    NEXTAUTH_URL="http://localhost:3000"

    # Social Providers
    GITHUB_ID="your_github_id"
    GITHUB_SECRET="your_github_secret"
    GOOGLE_CLIENT_ID="your_google_id"
    GOOGLE_CLIENT_SECRET="your_google_secret"

    # Cloudinary
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"

    # Pusher
    NEXT_PUBLIC_PUSHER_APP_KEY="your_pusher_key"
    PUSHER_APP_ID="your_pusher_app_id"
    PUSHER_SECRET="your_pusher_secret"
    NEXT_PUBLIC_PUSHER_CLUSTER="mt1"
    ```

4.  **Database Sync**
    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Run Development Server**
    ```bash
    npm run dev
    ```

6.  **Access the App**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
├── app/
│   ├── (site)/             # Landing & Auth Page
│   ├── conversations/      # Chat Interface & Logic
│   ├── users/              # User List & Profiles
│   ├── components/         # Shared UI Components (Volo Design System)
│   ├── hooks/              # Custom React Hooks
│   └── libs/               # Library Configurations (Pusher, Prisma)
├── prisma/                 # Database Schema
├── public/                 # Static Assets
└── ...
```

## 🤝 Contributing

We welcome contributions! Please fork the repository and submit a pull request for review.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
