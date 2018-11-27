module.exports = {
  test: async (ctx, next) => {
    ctx.response.body = { id: 1 }
  }
}
