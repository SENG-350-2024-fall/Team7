import { Client, Databases, Account } from "appwrite";

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // API Endpoint
    .setProject('67183c55001ce425e1fa')

export const database = new Databases(client)
export const account = new Account(client)