const clientId = 'a3829f5cb05f42d5b523bad47e0ce11d';
const redirectUri = 'http://localhost:3000/'; // Update for production
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;

    // Check URL for access token
    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expiresMatch) {
      accessToken = tokenMatch[1];
      const expiresIn = Number(expiresMatch[1]);

      // Clear the token after it expires
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);

      // Clear URL params
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${encodeURIComponent(redirectUri)}`;
      window.location = accessUrl;
    }
  }
};

export default Spotify;