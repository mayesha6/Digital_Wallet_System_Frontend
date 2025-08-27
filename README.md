# Digital Wallet System - Frontend   

## Project Overview  
Digital Wallet System is a web application frontend for managing digital wallets, performing transactions, and viewing user information. This project is built using **React** and integrates with a backend API for authentication, wallet management, and transaction handling.   
The frontend includes role-based navigation, responsive design for mobile and desktop, and a modern UI with light/dark mode support.  

## Live Demo  
[Frontend Live URL](https://digital-wallet-system-frontend-sepia.vercel.app/)  

## Technology Stack  
- **Frontend Framework:** React.js (Vite)  
- **State Management:** Redux Toolkit & RTK Query  
- **UI Components:** Tailwind CSS, shadcn/ui  
- **Routing:** React Router  
- **Notifications:** Sonner  
- **Build & Deployment:** Vite, Vercel  
- **Authentication:** Cookie-based with JWT  
- **Version Control:** Git & GitHub  

## Features  
- Responsive navigation menu for public and role-based users (Admin, User, Agent, Super Admin)  
- Login and logout with JWT token stored in HTTP-only cookies  
- Light/Dark mode toggle  
- Skeleton loader while fetching user info  
- Cross-origin requests with credentials for secure API access  

## Setup Instructions  

1. **Clone the repository**   
  ```bash  
  git clone https://github.com/yourusername/digital-wallet-system-frontend.git  
  cd digital-wallet-system-frontend  
2. **Install dependencies**
  npm install  
  # or  
  yarn install  
  # or  
  pnpm install  
3. **Configure Environment Variables**  
  Create a .env file in the root directory:  
  VITE_API_URL=https://backend-digital-wallet-system.vercel.app  
4. **Start Development Server**  
  npm run dev  
  # or  
  yarn dev  
  # or  
  pnpm dev  
5. **Build for Production**  
  npm run build  
  # or  
  yarn build  
  # or  
  pnpm build  
6. **Preview Production Build**  
  npm run preview  
  # or  
  yarn preview  
  # or  
  pnpm preview  
7. **Deployment**  
  Deploy on Vercel (already configured with vercel.json):  
  vercel   

## Project Structure  
  src/  
  ├─ assets/         # Images, icons  
  ├─ components/     # UI components (Navbar, ModeToggle, Skeleton, etc.)  
  ├─ constants/      # Role constants, other global constants  
  ├─ redux/          # Redux store and RTK Query slices  
  ├─ App.tsx         # Main app entry  
  ├─ main.tsx        # React DOM render  