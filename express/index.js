const express = require('express');
const app = express();

const amqp = require('amqplib');
var connection, channel;

connect();

async function connect() {
    try {
        const amqpServer = "amqp://localhost";
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue('rabbit');
    } catch(err) {
        console.log(err);
    }
}

app.get("/send", async (req, res) => {
    const data = {
        name: "Messi",
        occupation: "Footballer"
    }
    await channel.sendToQueue('rabbit', Buffer.from(JSON.stringify(data)));
    await channel.close();
    await connection.close();
    return res.send('done');
})

app.listen(5001, () => {
    console.log(`Server at 5001`)
});