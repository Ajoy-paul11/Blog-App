import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    // This function used for Sign-Up
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // Call another method
                return this.login({ email, password })
            }
            // } else {
            //     return userAccount
            // }
        } catch (error) {
            throw error;
        }
    }

    // This function used for Sign-In
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    // To get the current login user
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: Error", error);
        }

        return null;
    }

    // This function used for Logout
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite service :: logout :: Error", error);
        }
    }
}

const authService = new AuthService();

export default authService;