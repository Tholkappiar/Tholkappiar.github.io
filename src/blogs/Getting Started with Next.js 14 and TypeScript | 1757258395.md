---
title: "Getting Started with Next.js 14 and TypeScript"
date: "2024-12-15"
description: "A comprehensive guide to building modern web applications with Next.js 14, TypeScript, and the latest React features including Server Components and App Router."
author: "Your Name"
tags: ["nextjs", "typescript", "react", "web-development", "server-components"]
category: "Tutorial"
published: true
featured: false
image: "/images/blog/nextjs-typescript-guide.jpg"
imageAlt: "Next.js and TypeScript logos with code in the background"
readTime: 8
difficulty: "intermediate"
lastModified: "2024-12-15"
series: "Modern Web Development"
seriesOrder: 1
seo:
  keywords: ["Next.js 14", "TypeScript", "React Server Components", "App Router", "Modern Web Development"]
  canonical: "https://yourdomain.com/blog/nextjs-14-typescript-guide"
social:
  twitter: "Learn how to build amazing web apps with Next.js 14 and TypeScript! 🚀"
  facebook: "Complete guide to Next.js 14 with TypeScript - perfect for modern web development"
---

# Getting Started with Next.js 14 and TypeScript

Next.js 14 has revolutionized the way we build React applications. With its powerful App Router, Server Components, and enhanced TypeScript support, it's easier than ever to create fast, scalable web applications.

## What's New in Next.js 14?

Next.js 14 introduces several groundbreaking features:

### 1. Turbopack (Beta)
The new bundler that's **up to 700x faster** than Webpack for local development.

```bash
# Enable Turbopack in development
npm run dev -- --turbo
```

### 2. Server Actions (Stable)
Server Actions allow you to run server-side code directly from your components:

```typescript
// app/actions.ts
'use server'

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  
  // Database operations
  await db.user.create({
    data: { name, email }
  })
}
```

```tsx
// app/form.tsx
import { createUser } from './actions'

export default function UserForm() {
  return (
    <form action={createUser}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit">Create User</button>
    </form>
  )
}
```

### 3. Enhanced TypeScript Support

Next.js 14 provides better TypeScript integration with:

- **Improved type inference** for Server Components
- **Better error messages** during development
- **Automatic type generation** for API routes

## Setting Up Your Project

Let's create a new Next.js 14 project with TypeScript:

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app
npm run dev
```

This command creates a project with:
- ✅ TypeScript configuration
- ✅ Tailwind CSS for styling
- ✅ ESLint for code quality
- ✅ App Router (default in Next.js 14)

## Project Structure

Your project structure should look like this:

```
my-app/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── loading.tsx
├── components/
│   └── ui/
├── lib/
│   └── utils.ts
├── public/
└── package.json
```

## Key Features to Explore

### Server Components by Default

In the App Router, components are **Server Components** by default:

```tsx
// app/blog/page.tsx
interface Post {
  id: string
  title: string
  content: string
}

async function getPosts(): Promise<Post[]> {
  // This runs on the server
  const res = await fetch('https://api.example.com/posts')
  return res.json()
}

export default async function BlogPage() {
  const posts = await getPosts()
  
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  )
}
```

### Client Components When Needed

Use the `'use client'` directive for interactive components:

```tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

## Best Practices

### 1. Component Organization

```typescript
// components/ui/button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className,
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

### 2. Type-Safe API Routes

```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'

interface User {
  id: string
  name: string
  email: string
}

export async function GET(request: NextRequest) {
  const users: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' }
  ]
  
  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  // Validate and create user
  const newUser: User = {
    id: Date.now().toString(),
    name: body.name,
    email: body.email
  }
  
  return NextResponse.json(newUser, { status: 201 })
}
```

### 3. Environment Variables

```typescript
// lib/env.ts
export const env = {
  DATABASE_URL: process.env.DATABASE_URL!,
  API_KEY: process.env.API_KEY!,
  NODE_ENV: process.env.NODE_ENV as 'development' | 'production' | 'test'
}
```

## Performance Optimization

### Image Optimization

```tsx
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-96">
      <Image
        src="/hero-image.jpg"
        alt="Hero image"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
```

### Font Optimization

```tsx
// app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

## Conclusion

Next.js 14 with TypeScript offers an incredible developer experience with powerful features like:

- 🚀 **Turbopack** for lightning-fast development
- 🔒 **Server Actions** for secure server-side operations
- 🎯 **Enhanced TypeScript** support
- ⚡ **Server Components** by default
- 🎨 **Built-in optimizations** for images, fonts, and more

The combination of Next.js 14's performance improvements and TypeScript's type safety makes it the perfect choice for modern web applications.

## What's Next?

In the next post of this series, we'll dive deeper into:
- Database integration with Prisma
- Authentication with NextAuth.js
- Building a complete CRUD application
- Deployment strategies

---

*Have questions about Next.js 14 or TypeScript? Feel free to reach out on [Twitter](https://twitter.com/yourhandle) or leave a comment below!*

## Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Server Components](https://react.dev/reference/react/use-server)
- [Tailwind CSS](https://tailwindcss.com/docs)


```js
console.log('something')
```