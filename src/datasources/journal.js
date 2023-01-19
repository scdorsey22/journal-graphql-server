const { RESTDataSource } = require('apollo-datasource-rest')

class JournalAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://us-central1-mi-vida-journal.cloudfunctions.net/'
  }

  async createEntry(text) {
    return this.post(`createEntry`, JSON.stringify({ text }))
  }

  async getEntries() {
    return this.get(`entries`)
  }
}



module.exports = JournalAPI
