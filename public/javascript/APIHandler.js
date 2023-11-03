class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const result = await axios.get(this.BASE_URL + "/characters");
    return result.data;
  }

  async getOneRegister(id) {
    const result = await axios.get(this.BASE_URL + "/characters/" + id);
    return result.data;
  }

  async createOneRegister(character) {
    const result = await axios.post(this.BASE_URL + "/characters", character);
    return result;
  }

  async updateOneRegister(character) {
    const result = await axios.put(
      this.BASE_URL + "/characters/" + character.id,
      character
    );
    return result;
  }

  async deleteOneRegister(id) {
    const result = await axios.delete(this.BASE_URL + "/characters/" + id);
    return result.data;
  }
}
