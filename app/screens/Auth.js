import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'
import 'firebase/firestore';
import {auth, provider} from '../../firebase'

function SignIn() {

    const signInWithGoogle = () => {
        auth.signInWithPopup(provider);
    }

    return (
        <Button onClick={signInWithGoogle}>Sign In</Button>
    );
}

function SignOut() {
    return auth.currentUser && (
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
    );
}

export { SignIn, SignOut };