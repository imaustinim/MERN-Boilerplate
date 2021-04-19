module.exports = {
    test
}

function test(req, res) {
    console.log(req.body)
    res.status(200).json({
        message: "This is a test"
    })
}