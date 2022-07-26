## Start with RabbitMQ and ExpressJs

Device - Mac

### Steps

1. Install RabbitMQ using `brew install rabbitmq`
2. Start RabbitMQ using `brew services start rabbitmq`
3. Go to `http://localhost:15672/` and give id `guest` and password `guest` to log in
4. Create a directory and init npm and enable it using `npm init -y`
5. Install `express` and `amqplib` using `npm install express amqplib`
6. Run the `sender.js` to send and `receiver.js` to consume the message using `node sender.js`
