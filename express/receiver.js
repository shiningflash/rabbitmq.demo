const express = require('express');
const app = express();

const amqp = require('amqplib');
var connection, channel;

connect();

async function connect() {
    try {
        const amqpServer = 'amqp://localhost';
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue('rabbit');

        channel.consume('rabbit', data => {
            console.log(`Received: ${Buffer.from(data.content)}`);
            channel.ack(data);
        })
    } catch (err) {
        console.log(err);
    }
}

app.listen(5002, (req, res) => {
    console.log('Server at 5002');
});