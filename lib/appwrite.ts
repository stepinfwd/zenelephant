import { Client, Databases } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject('process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID');

// Export databases API instance
export const databases = new Databases(client);