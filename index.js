const fetchData = async (username, tagline) => {
    const api_url = `https://api.kyroskoh.xyz/valorant/v1/mmr/na/${username}/${tagline}?show=combo&display=0`;

    try {
        const response = await fetch(api_url);
        const res = await response.text();

        const resParse = res.split('-');
        const rank = resParse[0].trim();

        return rank
    } catch (error) {
        console.error(error);
    }
};

document.getElementById('fetchButton').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const tagline = document.getElementById('tagline').value;
    
    try {
        const res = await fetchData(username, tagline);
        document.getElementById('rankDisplay').textContent = `Rank: ${res}`;
    } catch (error) {
        console.error(error);
    }
});