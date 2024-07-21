import { Snake, shutdown } from "tgsnake";

const client = new Snake();

async function main() {
  // Set up message handler
  client.on('message', async (ctx) => {
    // This is just to set up the event listener
    // You can add your message handling logic here if needed
  });

  // Run the client
  await client.run();

  // After client.run(), the client should be ready to send messages
  try {
    await client.api.sendMessage("@x", "🛡Defend");
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

main().catch(console.error);

// Handle shutdown
process.on('SIGINT', () => {
  console.log('Shutting down...');
  shutdown(client);
});