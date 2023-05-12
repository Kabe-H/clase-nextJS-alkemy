export async function POST(req) {
  const body = await req.json();
  console.log(req.cookies.get('cookie'));

  return new Response(JSON.stringify({ hellos: "world" }));
}
