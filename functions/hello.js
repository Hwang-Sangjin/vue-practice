exports.handler = async function(event, context) {
    return {
        statusCode : 200,
        body: JSON.stringify({
            name: "JIN",
            age: 28,
            email: "aosdb5640@naver.com"
        })
    }
}