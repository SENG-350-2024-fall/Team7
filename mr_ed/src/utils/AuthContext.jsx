import { useContext, useState, useEffect, createContext } from "react";
import { account } from "./appwrite";
import { ID } from "appwrite"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUserStatus();
    }, []);

    const loginUser = async (userInfo) => {
        setLoading(true);
        try{
            let response = await account.createEmailPasswordSession( userInfo.email, userInfo.password);
            let accountDetails = await account.get(response.$id);
            console.log("SESSION:", accountDetails);
            setUser(accountDetails);
        }catch(error){
            console.error(error);
        }
        setLoading(false);
    }

    const logoutUser = () => {
        account.deleteSession('current');
        setUser(null);
    }

    const registerUser = async (userInfo) => {
        setLoading(true);
        try{
            let response = await account.create(
                ID.unique(),
                userInfo.email,
                userInfo.password,
                userInfo.name,
                userInfo.phone,
            );
            await account.createEmailPasswordSession( userInfo.email, userInfo.password);
            let accountDetails = await account.get();
            setUser(accountDetails);
        }catch(error){
            console.error(error);
        }
        setLoading(false);
    }

    const checkUserStatus = async () => {
        try{
            let accountDetails= await account.get();
            setUser(accountDetails);
        }catch(error){}
        setLoading(false);
    }

    const contextData = { 
        user,
        loginUser,
        logoutUser,
        registerUser,
    }
    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <div>loading...</div> : children}
        </AuthContext.Provider>
        )
}
export const useAuth = () => {return useContext(AuthContext)};
export default AuthContext;