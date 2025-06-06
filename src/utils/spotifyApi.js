import spotifyConfig from '../config/spotifyConfig';

const fetchSpotifyData = async (endpoint) => {
  try {
    const response = await fetch(`${spotifyConfig.apiEndpoint}/${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('spotifyToken')}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    throw error;
  }
};

export const getTopTracks = async () => {
  return fetchSpotifyData('browse/top-tracks');
};

export const getNewReleases = async () => {
  return fetchSpotifyData('browse/new-releases');
};

export default fetchSpotifyData;
