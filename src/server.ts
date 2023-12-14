import app from './app'
import config from './app/config'

import mongoose from 'mongoose'

async function main() {
  await mongoose.connect(config.database_url as string)
}

main()

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})
