# iOrderAI Voice AI

AI-powered voice ordering system for restaurants.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build & Deploy

### Build for Production

```bash
npm run build
```

This will generate a static export in the `out/` directory.

### Deploy to Firebase Hosting

1. **Install Firebase CLI** (if not already installed):

```bash
npm install -g firebase-tools
```

2. **Login to Firebase**:

```bash
firebase login
```

3. **Initialize Firebase** (first time only):

```bash
firebase init hosting
```

- Select your Firebase project
- Set public directory to `out`
- Configure as single-page app: Yes
- Don't overwrite `index.html`

4. **Update `.firebaserc`**:

Edit `.firebaserc` and replace `your-firebase-project-id` with your actual Firebase project ID.

5. **Build and Deploy**:

```bash
npm run build && firebase deploy --only hosting
```

### One-liner for Build & Deploy

```bash
npm run build && firebase deploy --only hosting
```

## Project Structure

```
web/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   └── lib/           # Utility functions
├── public/            # Static assets
├── firebase.json      # Firebase hosting config
└── next.config.ts     # Next.js configuration
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
