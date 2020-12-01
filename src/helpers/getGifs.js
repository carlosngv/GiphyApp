export const getGifs = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=xIH14G8j1Fnj7v8fPdyo7OyimbiM2GX6&limit=10`;
    let response = await fetch(URL);
    let { data } = await response.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    });
    return gifs;
}