const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.json({msg:'HI'})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))