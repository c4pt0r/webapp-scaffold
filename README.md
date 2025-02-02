## Create from scratch

1. **Create a New Next.js App with TypeScript, Tailwind CSS, and ESLint**
   ```bash
   npx create-next-app@latest myapp --typescript --tailwind --eslint
   ```
   - **npx create-next-app@latest myapp**: Uses the latest version of the Next.js app generator to create a new project named `myapp`.
   - **--typescript**: Configures the project to use TypeScript.
   - **--tailwind**: Sets up Tailwind CSS for styling.
   - **--eslint**: Integrates ESLint for linting the code.

2. **Install Additional Dependencies**
   ```bash
   npm install @radix-ui/react-dropdown-menu @radix-ui/react-avatar lucide-react
   ```
   - **@radix-ui/react-dropdown-menu**: Installs the Radix UI component for accessible dropdown menus.
   - **@radix-ui/react-avatar**: Installs the Radix UI component for creating avatar elements.
   - **lucide-react**: Installs the Lucide icon library for React, which provides a set of customizable icons.

3. **Initialize Shadcn UI**
   ```bash
   npx shadcn@latest init
   npx shadcn@latest add button
   npx shadcn@latest add avatar
   npx shadcn@latest add dropdown-menu
   ```

7. **Start the Development Server**
   ```bash
   npm run dev
   ```
   - Runs the `dev` script defined in your `package.json`, which typically starts the Next.js development server. This allows you to view and test your application locally during development.
  

## Use this code base

```
pnpm install
npm run dev
```

