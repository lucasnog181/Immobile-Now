import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';

import { AuthContext } from '../../providers/AuthContext'
import { sx } from './styles';

export function Header() {

    const { user } = useContext(AuthContext)

    return (
        <View style={sx.header}>
            <View style={sx.contentTitle}>
                <Text style={sx.Meet}>Olá,</Text>
                <Text style={sx.User}>{user?.name}</Text>
            </View>
            <Image source={{ uri: `${user?.photoUrl}` }} style={sx.avatarUser} />
        </View>
    );
}

