import React, { useEffect } from "react";
import { Alert } from "react-native";
import { createContext, useState, ReactNode } from "react";

import * as Google from 'expo-google-app-auth';
import AsyncStorage from "@react-native-async-storage/async-storage";


type AuthContextProviderData = {
    children: ReactNode;
};

type AuthContextType = {
    signed: boolean,
    loading: boolean
    user: User | null
    signInGoogle: () => {},
    logout: () => void

}


type User = {
    id?: string | null;
    email?: string | null;
    name?: string | null;
    givenName?: string | null;
    familyName?: string | null;
    photoUrl?: string | null;

}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthContextProviderData) {

    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true);

    async function signInGoogle() {
        try {
            const result = await Google.logInAsync({
                androidClientId: '510314060027-poeg67mli97ihhakdgrqgt5qtsm43qbb.apps.googleusercontent.com',
                iosClientId: '848255901456-hleecd6e1u1au1b7d06vb9v07nhdb4fq.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                await AsyncStorage.setItem('@AuthSocial:user', JSON.stringify(result.user))
                setUser(result.user);
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }



    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@Auth:user') || await AsyncStorage.getItem('@AuthSocial:user')

            if (storageUser) {
                setUser(JSON.parse(storageUser))

            } else if (!storageUser) {
                setLoading(false);
            }
        }

        loadStorageData()
    }, [])



    function logout() {

        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            signInGoogle,
            logout,
            user,
            loading
        }}>
            {children}
        </AuthContext.Provider>

    )

}

