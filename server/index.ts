import startServer from './server'

async function main() {
  const port = Number(process.env.PORT || '4000')
  const server = await startServer(port)
  console.log(`Server is running on http://localhost:${server.port}`)
}
main()
