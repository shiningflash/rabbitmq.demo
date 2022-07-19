const amqp = require('amqplib/callback_api');

// Step 1: Create connection
amqp.connect('amqp://localhost', (connError, connection) => {
    if (connError) {
        throw connError;
    }
    // Step 2: Create channel
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        // Step 3: Assert queue
        const QUEUE = 'test queue';
        channel.assertQueue(QUEUE);

        // Step 4: Send message to the queue
        channel.sendToQueue(QUEUE, Buffer.from('Hello! it worked!!!'));
        console.log(`Message sent to ${QUEUE}`);
    })
})