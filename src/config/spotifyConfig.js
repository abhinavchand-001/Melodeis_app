const spotifyConfig = {
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  redirectUri: window.location.origin,
  scopes: [
    'user-read-private',
    'user-read-email',
    'user-top-read'
  ],
  // Replace with your actual Spotify API endpoint
  apiEndpoint: 'https://api.spotify.com/v1'
};

export default spotifyConfig;
