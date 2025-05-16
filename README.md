# Traveler Website

A full-stack web application for travel enthusiasts, built with **Next.js 15 (App Router, TypeScript Strict Mode)** on the frontend and **Django** on the backend. It leverages **Tailwind CSS v4**, **Shadcn-ui** for UI components, **PostgreSQL** as the database, and **Prisma ORM** for schema management. Authentication uses **Argon2** for password hashing and **JWT** for session security.

---

## Table of Contents

1. [Project Structure Setup](#project-structure-setup)  
2. [Frontend Implementation (Next.js 15, App Router)](#frontend-implementation-nextjs-15-app-router)  
3. [Backend Implementation (Django)](#backend-implementation-django)  
   - [Database Models (Prisma)](#database-models-using-prisma)  
   - [Authentication (Argon2 & JWT)](#authentication-with-argon2-and-jwt)  
4. [API Integration](#api-integration)  
5. [Responsive Design with Tailwind CSS](#responsive-design-with-tailwind-css)  
6. [SEO Optimization](#seo-optimization)  
7. [Deployment Considerations](#deployment-considerations)  
8. [Running the Application](#running-the-application)  

---

## Project Structure Setup

```plaintext
traveler-website/
│
├── frontend/                # Next.js 15 + Tailwind CSS + Shadcn-ui
│   ├── app/                 # App Router, pages, layouts
│   ├── components/          # Reusable React components
│   ├── styles/              # Tailwind / global styles
│   ├── shadcn-ui.json       # Shadcn-ui config
│   ├── tsconfig.json        # TypeScript config (strict mode)
│   └── ...
│
├── backend/                 # Django REST API + Prisma ORM
│   ├── core/                # Django app(s)
│   ├── prisma/              # Prisma schema & migrations
│   ├── manage.py
│   └── ...
│
├── .env                     # Environment variables (example in .env.example)
├── docker-compose.yml       # (Optional) For containerization
└── README.md
```

---

## Frontend Implementation (Next.js 15, App Router)

### 1. **Setup Next.js 15 with TypeScript Strict Mode**

```bash
cd frontend
npx create-next-app@latest . --typescript
# Enable strict mode in tsconfig.json
# Add or ensure:
# "strict": true,
# "noImplicitAny": true,
# "strictNullChecks": true,
# etc.
```

### 2. **Enable App Router**

By default, Next.js 15 (`app/` directory) uses App Router.

### 3. **Install Tailwind CSS v4**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Update `tailwind.config.js` for content paths:
```js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { extend: {} },
  plugins: [],
};
```
Add Tailwind directives to `styles/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. **Install Shadcn-ui**

```bash
npx shadcn-ui@latest init
```
Follow prompts to set up Shadcn-ui components.

---

## Backend Implementation (Django)

### 1. **Setup Django Project**

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install django djangorestframework psycopg2-binary django-cors-headers
django-admin startproject core .
```

### 2. **Set Up PostgreSQL**

Install PostgreSQL and create a database:
```bash
sudo -u postgres createdb traveler_db
sudo -u postgres createuser traveler_user -P
# Grant privileges as needed
```
Configure `settings.py`:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'traveler_db',
        'USER': 'traveler_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```
Enable CORS for API calls from frontend:
```python
INSTALLED_APPS = [
    ...
    'corsheaders',
]
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]
```

---

### Database Models (using Prisma)

Install Prisma CLI and dependencies in `backend/prisma`:
```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```
Configure `prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-py"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int    @id @default(autoincrement())
  email     String @unique
  password  String
  createdAt DateTime @default(now())
  ...
}
```
Generate client:
```bash
npx prisma generate
npx prisma migrate dev --name init
```
You can use [prisma-client-py](https://github.com/RobertCraigie/prisma-client-py) in Django for querying.

---

### Authentication with Argon2 and JWT

**Argon2:**
```bash
pip install django[argon2]
```
In `settings.py`:
```python
PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.Argon2PasswordHasher',
    ...
]
```
**JWT:**
```bash
pip install djangorestframework-simplejwt
```
Add to `settings.py`:
```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
```
Create login/register API endpoints to issue JWT tokens.

---

## API Integration

- Use Django REST Framework to expose API endpoints.
- Connect frontend to backend via `/api` routes, using JWT for protected endpoints.
- Example frontend (Next.js) API call:
```ts
const res = await fetch('http://localhost:8000/api/trips/', {
  headers: { Authorization: `Bearer ${token}` },
});
```
- Handle CORS and CSRF as appropriate.

---

## Responsive Design with Tailwind CSS

- Use Tailwind classes (`sm:`, `md:`, `lg:`, `xl:`) for breakpoints.
- Utilize Shadcn-ui components for consistent, accessible UI.
- Example:
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Content */}
</div>
```

---

## SEO Optimization

- Use Next.js `<Head>` for meta tags.
- Implement server-side rendering (SSR) for SEO-critical pages.
- Generate sitemaps and robots.txt.
- Use semantic HTML and accessible components.

Example:
```tsx
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Traveler Website</title>
        <meta name="description" content="Plan and share your travel adventures." />
        ...
      </Head>
      {/* ... */}
    </>
  );
}
```

---

## Deployment Considerations

- **Frontend:** Deploy to Vercel, Netlify, or your server.
- **Backend:** Deploy to Heroku, Railway, or your cloud provider.
- **Database:** Use managed PostgreSQL (Supabase, AWS RDS, etc.)
- **Environment Variables:** Store secrets in `.env` and never commit them.
- **Docker:** Use `docker-compose` for local development and production builds.

Example `docker-compose.yml`:
```yaml
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    env_file:
      - .env
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    env_file:
      - .env
  db:
    image: postgres:latest
    environment:
      POSTGRES_DB: traveler_db
      POSTGRES_USER: traveler_user
      POSTGRES_PASSWORD: your_password
    ports:
      - "5432:5432"
```

---

## Running the Application

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sisovin/traveler-website.git
   cd traveler-website
   ```
2. **Set up environment variables:**
   - Copy `.env.example` to `.env` and fill in the values.

3. **Start PostgreSQL (if not using Docker):**
   - Ensure your DB is running and accessible.

4. **Start Backend (Django):**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

5. **Start Frontend (Next.js):**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

6. **Access the app:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:8000](http://localhost:8000)

---

## Contributing

Pull requests are welcome! Please open an issue first to discuss changes.

---

## License

[MIT](LICENSE)
