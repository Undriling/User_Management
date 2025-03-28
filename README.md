# Live link:- https://userglobalgroupwaremanash.netlify.app
## Login - 
- Email :- eve.holt@reqres.in
- Password :- cityslicka

# Steps to run the project 
## installation of vite+react -
- npm create vite@latest
- npm install

## Setup Tailwind -
- npm install tailwindcss @tailwindcss/vite
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- Add this in vite.config.js - 
plugins: [
        tailwindcss(),
    ],
- Add this in your index.css -
    @import "tailwindcss"
- Add jsconfig.app.json -
    {
    "compilerOptions": {
      // ...
      "baseUrl": ".",
      "paths": {
        "@/*": [
          "./src/*"
        ]
      }
      // ...
    }
  }
- Add jsconfig.json -
    {
    "files": [],
    "references": [],
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }

## Run the Project -
- npm run dev

## Used dependencies -
- react-router
- @reduxjs/toolkit
- react-redux
- axios
- react-icons
- Use shadcn/ui for Button and Popover. To setup goto shadcn/ui site and follow the steps 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
