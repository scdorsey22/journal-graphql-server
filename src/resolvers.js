module.exports = {
  Mutation: {
    createEntry: async (_source, { text }, { dataSources }) => {
      return dataSources.journalAPI.createEntry(text)
    },
  },
  
  Query: {
    entries: async (_source, _args, { dataSources }) => {
      return dataSources.journalAPI.getEntries()
    },
  },
}
