import React, { useContext } from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../providers/AuthContext';

import { sx } from './styles';

import ImagesBackground from "../../assets/Background.jpg";
import ImagesGoogle from "../../assets/google.png";



export function LoginScreen() {

    const { signInGoogle } = useContext(AuthContext)

    return (
        <ImageBackground source={ImagesBackground} style={sx.Background}>
            <LinearGradient
                colors={['#ffffff00', '#20202092']}
                style={{
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            />

            <SafeAreaView style={sx.container}>

                <View>

                </View>

                <View style={sx.content}>
                    <Text
                        style={sx.Title}> A sua nova casa {'\n'} está aqui!
                    </Text>
                    <TouchableOpacity
                        style={sx.ButtonGoogle}
                        onPress={signInGoogle}
                    >
                        <Image
                            source={ImagesGoogle}
                            style={sx.ImagesGoogle}
                        />
                        <Text
                            style={sx.TitleButton} >Sign with Google
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        </ImageBackground>
    );
}
