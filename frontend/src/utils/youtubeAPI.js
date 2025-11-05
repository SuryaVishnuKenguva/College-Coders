export async function fetchAllPlaylistVideos(playlistId, apiKey) {
  let allVideos = [];
  let nextPageToken = "";

  try {
    do {
      const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
      url.searchParams.append("part", "snippet");
      url.searchParams.append("playlistId", playlistId);
      url.searchParams.append("maxResults", "50");
      url.searchParams.append("key", apiKey);
      if (nextPageToken) url.searchParams.append("pageToken", nextPageToken);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("YouTube API request failed");
      }

      const data = await response.json();

      // Normalize data into a simplified structure
      const videos = data.items.map((item, index) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails?.medium?.url,
        position: allVideos.length + index + 1,
        videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
        channelTitle: item.snippet.channelTitle,
      }));

      allVideos = [...allVideos, ...videos];

      nextPageToken = data.nextPageToken || null;
    } while (nextPageToken);

    return allVideos;
  } catch (error) {
    console.error("Error fetching YouTube playlist:", error);
    throw error;
  }
}