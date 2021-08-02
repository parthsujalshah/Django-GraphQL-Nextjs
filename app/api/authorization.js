import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import Router from 'next/router'
import { useState, useContext, createContext } from "react";
import { loginMutation } from "./graphql"

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const auth = userAuthentication();
    return (
        <AuthContext.Provider value={auth}>
            <ApolloProvider client={auth.createApolloClient()}>
                {children}
            </ApolloProvider>
        </AuthContext.Provider>
    );
};


export const useAuthentication = () => {
    return useContext(AuthContext);
};

function userAuthentication() {
    const [authToken, setAuthToken] = useState(null);
    const [username, setUsername] = useState(null);

    const isSignedIn = () => {
        if (authToken) {
            return true;
        }
        return false;
    };

    function createApolloClient() {
        const link = new HttpLink({
            uri: "http://127.0.0.1:8000/graphql/",
            credentials: "include"
        });
        return new ApolloClient({
            link,
            cache: new InMemoryCache()
        });
    };

    const signIn = async ({ username, password }) => {
        const client = createApolloClient();
        const data = await client.mutate({
            mutation: loginMutation,
            variables: { username, password }
        });
        if (data?.data?.tokenAuth?.token) {
            setAuthToken(data?.data?.tokenAuth?.token);
            setUsername(data.data.tokenAuth.payload.username);
            localStorage.setItem("token", JSON.stringify(data?.data?.tokenAuth?.token));
            console.log(data);
            Router.push("/dashboard");
        }
    };

    return {
        signIn,
        createApolloClient,
        isSignedIn
    };

};