import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Yayasan Bakti 45 Sejahtera',
        short_name: 'Bakti 45',
        description: 'Aplikasi Resmi Yayasan Bakti 45 Sejahtera - Panti Asuhan Bandung',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0ea5e9',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/icon-192.png', // User needs to provide this or I can use a placeholder
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png', // User needs to provide this or I can use a placeholder
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
