# Portfolio CMS

A modern, full-stack Portfolio CMS built with **NestJS**, **Nuxt 3**, **PostgreSQL**, and **TailwindCSS**.

## Features

- **Public Portfolio Website**: Showcase your projects, experience, certifications, tools, and contact information
- **Admin Dashboard**: Full CMS to manage all your content
- **JWT Authentication**: Secure admin access
- **Modern Design**: Clean, responsive UI inspired by saweria.co
- **SEO Optimized**: Server-side rendering with Nuxt 3

## Tech Stack

- **Backend**: NestJS v11, Prisma v7, PostgreSQL, JWT, bcrypt
- **Frontend**: Nuxt 3, Vue 3, Pinia, TailwindCSS
- **Database**: PostgreSQL
- **Containerization**: Docker & Docker Compose

## Prerequisites

- Node.js 20+
- Docker & Docker Compose (for database)
- npm or yarn

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/rhnfthn/AirNav-CMS.git
cd AirNav-CMS
```

### 2. Start PostgreSQL with Docker

```bash
docker compose up -d postgres
```

### 3. Backend Setup

```bash
cd backend

# Copy environment file
cp .env.example .env

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed the database
npm run prisma:seed

# Start development server
npm run start:dev
```

### 4. Frontend Setup

```bash
cd frontend

# Copy environment file
cp .env.example .env

# Install dependencies
npm install

# Start development server
npm run dev
```

### 5. Access the application

- **Public Website**: http://localhost:3001
- **Admin Dashboard**: http://localhost:3001/admin
- **API**: http://localhost:3000

### Default Admin Credentials

- **Email**: admin@portfolio.com
- **Password**: admin123

> ⚠️ **Important**: Change these credentials in production!

## Docker Deployment

To deploy the entire stack with Docker:

```bash
docker compose up -d
```

Services:
- Backend: http://localhost:3000
- Frontend: http://localhost:8080
- PostgreSQL: localhost:5432

## Project Structure

```
├── backend/                 # NestJS backend
│   ├── prisma/             # Database schema & migrations
│   └── src/
│       ├── auth/           # Authentication module
│       ├── projects/       # Projects CRUD
│       ├── about/          # About section
│       ├── certifications/ # Certifications CRUD
│       ├── experiences/    # Work experience CRUD
│       ├── tools/          # Tools/skills CRUD
│       └── contact/        # Contact messages
│
├── frontend/               # Nuxt 3 frontend
│   ├── pages/
│   │   ├── admin/         # Admin dashboard pages
│   │   └── ...            # Public pages
│   ├── components/        # Vue components
│   ├── layouts/           # Page layouts
│   └── stores/            # Pinia stores
│
└── docker-compose.yml     # Docker orchestration
```

## API Endpoints

### Public Endpoints
- `GET /projects/published` - Get published projects
- `GET /projects/slug/:slug` - Get project by slug
- `GET /about` - Get about section
- `GET /certifications` - Get all certifications
- `GET /experiences` - Get all experiences
- `GET /tools/grouped` - Get tools grouped by category
- `POST /contact` - Submit contact message

### Protected Endpoints (require JWT)
- `POST /auth/login` - Admin login
- `GET /projects/:id` - Get project by ID
- `POST /projects` - Create project
- `PATCH /projects/:id` - Update project
- `DELETE /projects/:id` - Delete project
- Full CRUD for about, certifications, experiences, tools, and contact messages

## Environment Variables

### Backend
| Variable | Description | Default |
|----------|-------------|---------|
| DATABASE_URL | PostgreSQL connection string | - |
| JWT_SECRET | JWT signing secret | - |
| NODE_ENV | Environment mode | development |

### Frontend
| Variable | Description | Default |
|----------|-------------|---------|
| NUXT_PUBLIC_API_BASE | Backend API URL | http://localhost:3000 |

## License

UNLICENSED - Private project
