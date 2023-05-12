const handler = (req, res) =>{
    const body = req.body
    console.log(body);
    res.status(200).end()
}

export default handler