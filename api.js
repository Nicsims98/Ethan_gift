import { DefaultAsyncHttpClient } from 'async-http-client';

export async function createRoom() {
    const client = new DefaultAsyncHttpClient();
    try {
        const response = await client.prepare("POST", "https://foony2.p.rapidapi.com/create-room")
            .setHeader("x-rapidapi-key", "e698e5a1ccmsh1beed80dbb01f4cp10eaeejsnde2ee2833c47")
            .setHeader("x-rapidapi-host", "foony2.p.rapidapi.com")
            .setHeader("Content-Type", "application/json")
            .setBody(JSON.stringify({ gameId: "foonyflippers", visibility: "private" }))
            .execute()
            .toCompletableFuture();
        
        const responseBody = await response.json();
        console.log(responseBody);
    } catch (error) {
        console.error('Error creating room:', error);
    } finally {
        client.close();
    }
}
