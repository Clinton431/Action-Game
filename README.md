# Action Game

A fast-paced action game built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring real-time gameplay, user authentication, and score tracking.

## Features

- **Real-time Gameplay**: Smooth, responsive action game mechanics
- **User Authentication**: Secure login and registration system
- **Score Tracking**: Personal best scores and global leaderboards
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Live score updates and game state synchronization

## Tech Stack

**Frontend:**
- React.js with Hooks
- CSS3 with animations
- Axios for API calls
- Socket.io-client for real-time features

**Backend:**
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- Socket.io for real-time communication
- bcrypt for password hashing

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mern-action-game.git
   cd mern-action-game
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/actiongame
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=development
   ```

   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_SOCKET_URL=http://localhost:5000
   ```

## Running the Application

1. **Start MongoDB**
   ```bash
   mongod
   ```

2. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

3. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```

The game will be available at `http://localhost:3000`

## Game Controls

- **Arrow Keys** or **WASD**: Move character
- **Spacebar**: Jump/Action
- **Mouse Click**: Shoot/Attack
- **ESC**: Pause game
- **R**: Restart level

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Game Data
- `GET /api/scores` - Get leaderboard
- `POST /api/scores` - Submit score
- `GET /api/scores/user/:id` - Get user scores
- `GET /api/game/stats` - Get game statistics

### Real-time Events
- `connection` - User connects to game
- `join-game` - Join game session
- `game-update` - Game state updates
- `score-update` - Score changes
- `disconnect` - User disconnects

## Project Structure

```
mern-action-game/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
└── README.md
```

## Database Schema

### User Model
```javascript
{
  username: String,
  email: String,
  password: String,
  highScore: Number,
  gamesPlayed: Number,
  createdAt: Date
}
```

### Score Model
```javascript
{
  userId: ObjectId,
  username: String,
  score: Number,
  level: Number,
  gameMode: String,
  createdAt: Date
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Scripts

**Backend:**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests

**Frontend:**
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Deployment

### Production Build
```bash
cd frontend
npm run build
```

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
PORT=5000
```

### Deployment Platforms
- **Frontend**: Netlify, Vercel, or serve from Express
- **Backend**: Heroku, Railway, or DigitalOcean
- **Database**: MongoDB Atlas

## Troubleshooting

**Common Issues:**

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env`

2. **Port Already in Use**
   - Kill process: `lsof -ti:5000 | xargs kill -9`
   - Or change PORT in `.env`

3. **CORS Issues**
   - Verify frontend URL in backend CORS configuration

4. **Socket Connection Failed**
   - Check REACT_APP_SOCKET_URL matches backend port

## Performance Optimization

- Game loop optimized for 60 FPS
- Sprite batching for efficient rendering
- MongoDB indexing on frequently queried fields
- Client-side prediction for smooth gameplay
- Asset preloading and caching

## Future Enhancements

- [ ] Multiplayer game modes
- [ ] Power-ups and special abilities
- [ ] Level editor
- [ ] Achievements system
- [ ] Social features (friends, chat)
- [ ] Mobile app version

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Game assets from [OpenGameArt](https://opengameart.org/)
- Sound effects from [Freesound](https://freesound.org/)
- Special thanks to the MERN stack community

## Contact

Clinton Nyakoe - clintonnyakoe@gmail.com

Project Link: [https://github.com/clinton431/Action-game](https://github.com/clinton431/Action-game)
