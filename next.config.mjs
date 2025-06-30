import dotenv from 'dotenv';
import process from 'process'; // Explicitly import process for compatibility
dotenv.config();

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            '127.0.0.1',
            "images.unsplash.com",
            "unsplash.com",
            "plus.unsplash.com",
            "firebasestorage.googleapis.com",
            "img.clerk.com"
        ],
    },
    env: {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    },
};

console.log("Clerk Key from Config:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY); // Debugging

export default nextConfig;
