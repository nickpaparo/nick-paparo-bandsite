class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = `https://unit-2-project-api-25c1595833b2.herokuapp.com/`;
  }

  async getShows() {
    try {
      const shows = await axios.get(
        `${this.baseURL}showdates?api_key=${this.apiKey}`
      );
      return shows.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getComments() {
    try {
      const comments = await axios.get(
        `${this.baseURL}comments?api_key=${this.apiKey}`
      );
      return comments.data;
    } catch (error) {
      console.log(error);
    }
  }

  async postComment(comment) {
    try {
      const newComment = await axios.post(
        `${this.baseURL}comments?api_key=${this.apiKey}`, comment);
      return newComment.data;
    } catch (error) {
      console.log(error);
    }
  }
}
