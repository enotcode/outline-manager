# 🌐 Outline VPN Manager

A lightweight web-based manager for Outline VPN servers and access keys.

## ✨ Features

- **🔑 Access Key Management**: Create and manage VPN access keys with ease
- **📋 Server Information**: View server details and statistics
- **📱 Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS
- **📋 One-click Sharing**: Copy access URLs to clipboard with a single click
- **🐳 Docker Support**: Easy deployment with Docker

## 🛠️ Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **VPN Integration**: Outline VPN API
- **Deployment**: Docker

## 📋 Prerequisites

Before running this application, you need:

1. **Outline VPN Server**: A running Outline VPN server
2. **API Access**: API URL and fingerprint from your Outline server
3. **Runtime**: Bun (recommended) or Node.js 18+

### Getting Outline Server Credentials

To get your Outline server API URL and fingerprint you can use this command:

```bash
cd opt/outline && cat access.txt
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/enotcode/outline-manager.git
   cd outline-manager
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   OUTLINE_API_URL=https://your-outline-server:port/api
   OUTLINE_FINGERPRINT=your-server-fingerprint
   ```

4. **Run the development server**

   ```bash
   bun dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

1. **Create environment file**

   Create a `.env` file with your Outline server credentials:

   ```env
   OUTLINE_API_URL=https://your-outline-server:port/api
   OUTLINE_FINGERPRINT=your-server-fingerprint
   ```

2. **Deploy with Docker Compose**
   ```bash
   docker-compose up -d
   ```

The application will be available at `http://localhost:3000`

## 🐛 Troubleshooting

### Common Issues

1. **Connection Error**: Verify your `OUTLINE_API_URL` and `OUTLINE_FINGERPRINT`
2. **Build Failures**: Ensure environment variables are set during Docker build
3. **Port Conflicts**: Change the port mapping in docker-compose.yml if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
