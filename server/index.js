const express = require("express")
const gatsby = require("gatsby-plugin-nodejs")

const app = express()

gatsby.prepare({ app }, () => {
  app.get("/api/v1/", (req, res) => {
    res.send("hello world!")
  })
})

const port = process.env.PORT || 1337

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
