import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import { sx } from './styles';

export function HeaderDetails() {

    const [like, setLiked] = useState(false)

    function handlerLiked() {
        setLiked(!like)
    }

    const navigation = useNavigation();


    function handlerBackHome() {
        navigation.navigate("Home")
    }

    return (
        <View style={sx.containerHeaserDetails}>
            <View style={sx.Button}>
                <TouchableOpacity onPress={handlerBackHome}>
                    <Entypo
                        name="chevron-left"
                        size={26} color="#a399a7"
                    />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={sx.Text}>Details</Text>
            </View>
            <View style={sx.Button}>
                <TouchableOpacity onPress={handlerLiked}>
                    {like ? (
                        <Ionicons
                            name="heart"
                            size={26}
                            color="red"
                        />
                    ) : (
                        <Ionicons
                            name="heart-outline"
                            size={26}
                            color="#a399a7"
                        />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}
