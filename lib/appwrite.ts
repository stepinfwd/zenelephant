// import { Client, Account, Databases, Storage } from 'appwrite';

// // Initialize the Appwrite client
// const client = new Client();

// client
//   .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
//   .setProject('67f41a400004ed4e24c6');              // Your project ID

// // Export API instances
// export const account = new Account(client);
// export const databases = new Databases(client);
// export const storage = new Storage(client);
// export default client;



import { Client, Databases } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject('67f41a400004ed4e24c6');

// Export databases API instance
export const databases = new Databases(client);