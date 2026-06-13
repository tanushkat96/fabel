
<p align="center">
  <img src="./assests/a1e5982c00ac49f595c46dac93f4e93d.png" alt="Fabel Logo" width="350"/>
</p>

<p align="center">
  <strong>AI-powered social reading platform</strong>
</p>
<p align="center">
  Discover • Organize • Discuss • Explore
</p>
Fabel is an AI-powered social reading platform that helps readers discover books, organize their personal library, save highlights, and connect with fellow readers through community discussions.

## Features

### Book Discovery
Explore books through a visually rich masonry dashboard
Search and filter books by genre, author, and keywords
AI-powered personalized book recommendations
Detailed book previews and summaries

### Personal Library
    - Organize books into:
    - Want to Read
    - Currently Reading
    - Completed
    - Track reading progress
    - Manage favorite books

### Community
    - Join discussions around books and genres
    - Share reviews and thoughts
    - Discover what other readers are reading

### AI Integration
    - Personalized recommendations
    - Smart book discovery
    - Reading insights and suggestions
    - Context-aware reading assistant

### Highlights & Bookmarks
    - Save favorite passages
    - Bookmark important sections
    - Access all saved content from one place
## Tech Stack

**Frontend:** 
   - Next.js 15
   - TypeScript
   - Tailwind CSS
   - Shadcn UI
   - Framer Motion
   - TanStack Query
   - Axios
   - React Hook Form
   - Zod
   - React Masonry CSS

**Backend:**
   - Node.js
   - Express.js
   - JWT
   - Bcrypt
   - Socket.io

**Database:**
   - MongoDB Atlas
   - Mongoose

**AI & RAG:**
   - Google Gemini 2.5 Flash
   - Google Gemini Embeddings
   - MongoDB Atlas Vector Search
   - RAG (Retrieval-Augmented Generation)

**Storage:**
- Cloudinary





## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js (v18+)
- npm
- MongoDB Atlas account
- Google Gemini API key
- Cloudinary account

---

### Clone Repository

```bash
git clone https://github.com/tanushkat96/fabel.git

cd fabel
```

---

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend will run on:

```text
http://localhost:3000
```

---

### Backend Setup

```bash
cd server

npm install

npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

---

### Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

GEMINI_API_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

### Running the Application

Open two terminals.

#### Terminal 1

```bash
cd client
npm run dev
```

#### Terminal 2

```bash
cd server
npm run dev
```

---

## Project Structure

```text
fabel/
├── assets/
├── client/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── store/
│   ├── types/
│   └── utils/
│
├── server/
│   ├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── services/
│
└── README.md
```
##  Vision

Fabel aims to combine the best aspects of Goodreads, Kindle highlights, and AI-powered discovery into a unified reading platform. It enables readers to discover new books, organize personal libraries, save meaningful highlights, engage in community discussions, and receive intelligent recommendations tailored to their interests.

The goal is to create a modern digital space where reading is not only personal but also interactive, insightful, and community-driven.

---

##  License

This project is built for learning, portfolio, and educational purposes.

All third-party content, including book metadata, cover images, and recommendations, remains the property of their respective owners. Fabel is a non-commercial project developed to showcase full-stack development, AI integration, and modern web application architecture.