# URL Redirect App

A simple Next.js application that redirects to a configured URL. Perfect for creating short links or temporary redirects.

## Features

- Simple and lightweight
- Configurable redirect URL through environment variables
- Clean fallback UI when no redirect is configured
- Built with Next.js and Tailwind CSS

## Deploy Your Own

You can deploy your own version of this app to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FR44VC0RP%2Fredirect-app&env=REDIRECT_URL&envDescription=The%20URL%20to%20redirect%20to%20when%20someone%20visits%20the%20site)

### Required Environment Variables

- `REDIRECT_URL`: The full URL where visitors should be redirected to (e.g., https://example.com)

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```
3. Create a `.env.local` file with your environment variables:
   ```
   REDIRECT_URL=https://your-redirect-url.com
   ```
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

## License

MIT
