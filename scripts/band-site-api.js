class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async getShows() {
        const shows = await axios.get(`${this.baseURL}comments?api_key=${API_KEY}`);
        return shows.data;
    }

    async getComments() {
        const comments = await axios.get(`${this.baseURL}showdates?api_key=${API_KEY}`);
        return comments.data;
    }
}