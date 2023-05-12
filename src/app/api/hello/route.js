export async function GET(request) {
  return new Response('Hello, Next.js!')
}

export async function POST(req){
  const body = req.json()
  console.log(body);
  return new Response (JSON.stringify({hello:'world'}))
}