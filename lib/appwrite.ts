import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("675d997a002172ea5e45");

export const account = new Account(client);
export const databases = new Databases(client);

export { ID } from "appwrite";
