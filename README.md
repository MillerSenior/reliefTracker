# Tornado Relief Directory-STL

A comprehensive dashboard application for tracking and managing St. Louis tornado relief efforts, resources, and live updates. Built with Next.js, TypeScript, and modern web technologies.

## 🌪 About

The Tornado Relief Directory-STL is a centralized platform designed to help coordinate and communicate relief efforts following the 2025 St. Louis tornado. It provides real-time updates, resource mapping, and community coordination tools.

## 🚀 Features

- **Live Updates Feed**: Real-time news and updates from official sources
- **Interactive Resource Map**: Google Maps integration showing locations of shelters, distribution centers, and services
- **Resource Directory**: Comprehensive listing of available resources and services
- **Donation Directory**: Information about donation centers and needs
- **Community Input Form**: Allow community members to submit information and updates
- **Mobile Responsive**: Fully responsive design for all device sizes

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Maps**: Google Maps API
- **Analytics**: Built-in analytics support
- **Deployment**: Firebase App Hosting ready

## 📦 Project Structure

```
src/
├── app/                 # Next.js app router pages and layouts
├── components/         # React components
│   ├── forms/         # Form components
│   ├── layout/        # Layout components (Header, Footer)
│   ├── map/          # Map-related components
│   ├── news/         # News feed components
│   ├── resource/     # Resource directory components
│   ├── shared/       # Shared/common components
│   └── ui/           # UI components (shadcn/ui)
├── config/            # Configuration files
├── data/             # Static data and content
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and libraries
├── types/            # TypeScript type definitions
└── i18n/             # Internationalization files
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd reliefTracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the application**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

- `src/config/site.ts`: Main site configuration
- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `components.json`: shadcn/ui configuration

## 📱 Features Breakdown

### News Sources
The application aggregates news from multiple sources:
- STL Recovers (City of St. Louis)
- St. Louis Public Radio (STLPR)
- KSDK News
- St. Louis Magazine

### Resource Types
Available resource categories:
- Shelters
- Distribution Centers
- Food Services
- Support Services
- Community Hubs

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support or questions, please open an issue in the repository or contact the maintainers.

## 🙏 Acknowledgments

- St. Louis Emergency Management
- Local news partners
- Community contributors
- Open source community

---

Built with ❤️ for the St. Louis community
