export function GET(req, res) {
  const user = [
    { id: 1, name: "Matias" },
    { id: 2, name: "Matias E" },
    { id: 3, name: "Pablo" }
  ];

  console.log(user);

  return new Response(JSON.stringify(user));
}