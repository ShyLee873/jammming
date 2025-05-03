# Jammming 🎵

Jammming is a React-based web application that allows users to search the Spotify library, create custom playlists, and save them to their Spotify account.

Built as part of the Codecademy Full-Stack Developer Path, it demonstrates working with React components, unidirectional data flow, state management with hooks, the Spotify Web API and nostalgic MySpace-eque styling.

![image](https://github.com/user-attachments/assets/c559ce6e-a481-40b0-b2b9-e422f50de00e)


---

## 🚀 Features

- 🔍 Search for tracks using the Spotify API
- ➕ Add or remove tracks to a custom playlist
- ✏️ Rename the playlist dynamically
- 💾 Save the playlist directly to your Spotify account
- 🔐 Uses OAuth token flow to access the user's Spotify data
- 📸 Displays user profile image
- 🖼 Displays album art
---


## 🛠️ Tech Stack

- React (with hooks)
- JavaScript (ES6+)
- Spotify Web API
- CSS

---

## Getting Started

1. Clone this repo:
```
git clone https://github.com/your-username/jammming.git
cd jammming
```

2. Install Dependencies
`npm install`

3. Add a `.env` file:
`REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id`

🔑 Where do I get the Client ID?
Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard), create an app, and copy your Client ID from there.
Make sure to set the redirect URI in the Spotify app settings to:
`http://localhost:3000`

4. Run the app:
`npm start`
The app will open at http://localhost:3000

---

## 🔒 Notes on Security
- OAuth token is stored only in memory for the session.
- .env file is gitignored to protect sensitive keys.

---

## 🧪 Tests

Component-level unit tests written with:

- Jest
- React Testing Library

To run tests:

`npm test`

---

## 📦 Future Features

- [x] Pressing Enter triggers search
- [x] Include track previews
- Show only tracks not already in playlist
- Display loading spinner while saving
- Persist search term after login redirect
- Fetch and display user's saved playlists

---

## 🧑‍💻 Author
Created by S Lertjuntharangool
