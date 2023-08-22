import { initServer } from './app/index'

async function init() {
  const app = await initServer()
  app.listen(3000, () => console.log(`server started at port : 3000`))
}

init()
