import { ID } from "appwrite";
import { account } from "../utils/appwrite";

export async function addAccount(name, email, password, role, birthday, phone) {
    const newAccount = {
        name,
        email,
        password,
        role,
        birthday,
        phone
    };
    const response = await account.create(
        'MrEdSystem',
        'accounts',
        ID.unique(),
        newAccount
    );

    const account = {
        $id: response.$id,
        $createdAt: response.$createdAt,
        name: response.name,
        email: response.email,
        password: response.password,
        role: response.role,
        birthday: response.birthday,
        phone: response.phone,
    }

    return account;
}