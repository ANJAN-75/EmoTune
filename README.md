# 🎵 EmoTune

EmoTune is an AI-powered mood-based music recommendation app that detects a user's facial expression using computer vision and automatically creates a playlist matching their emotion.

The app analyzes facial expressions in real time, identifies moods such as Happy, Sad, or Surprised, and suggests songs accordingly.

---

## 🚀 Features

- 😀 Real-time facial expression detection
- 🎵 Mood-based playlist generation
- ▶️ Custom music player
- ⏯ Play / Pause functionality
- ⏩ Forward / Backward controls
- 🔊 Volume controls
- ⚡ Playback speed adjustment
- 🖼 Song posters and metadata
- 📋 Dynamic playlist selection
- 🔄 Automatically updates songs when mood changes

---

## 🧠 Mood Detection Flow

```txt
Camera Input
      ↓
Face Detection
      ↓
Expression Analysis
      ↓
Mood Detection
      ↓
Fetch Songs
      ↓
Generate Playlist
      ↓
Play Music
```

---

## 🛠 Tech Stack

### Frontend

- React.js
- SCSS
- Context API
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### AI / Computer Vision

- MediaPipe Face Landmarker

---

## 📂 Project Structure

```txt
EmoTune/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Player.jsx
│   │   │   ├── Playlist.jsx
│   │   │
│   │   ├── expression/
│   │   │   ├── FacialExpression.jsx
│   │   │   └── utils/
│   │   │
│   │   ├── hook/
│   │   │   └── useSong.js
│   │   │
│   │   ├── services/
│   │   │   └── song.api.js
│   │   │
│   │   ├── context/
│   │   │   └── song.context.js
│   │   │
│   │   └── pages/
│   │       └── Home.jsx
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   └── server.js
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
```

---

## 📦 Installation

Clone repository:

```bash
git clone https://github.com/yourusername/emotune.git
```

Move into project:

```bash
cd emotune
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Install backend dependencies:

```bash
cd ../backend
npm install
```

---

## ▶️ Running Project

Start backend:

```bash
npm run dev
```

Start frontend:

```bash
npm run dev
```

---

## API Routes

### Get Songs by Mood

```http
GET /api/song?mood=happy
```

Response:

```json
{
    "success": true,
    "songs": [
        {
            "_id":"123",
            "title":"Believer",
            "artist":"Imagine Dragons",
            "mood":"happy",
            "posterUrl":"..."
        }
    ]
}
```

---

## Future Improvements

- ❤️ Like songs
- ⏭ Next / Previous playlist controls
- 🎤 Voice emotion detection
- 🔍 Search songs
- 🔐 Authentication
- ☁ Deploy to cloud
- 🤖 Better AI emotion recognition

---

## Screenshots

Add screenshots here:

```md
![Home](./screenshots/home.png)
```

---

## Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you'd like to improve.

---

## License

MIT License

---

Made with ❤️ using React + Node + AI
