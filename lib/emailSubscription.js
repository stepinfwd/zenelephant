import { databases } from './appwrite';
import { ID } from 'appwrite';

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;

// Save email subscription
export async function saveEmailSubscription(email) {
  try {
    return await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      { email }
    );
  } catch (error) {
    console.error('Save email subscription error:', error);
    throw error;
  }
}