import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/core'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderDetails } from '../../components/HeaderDetails';
import { ScrollView } from 'react-native-gesture-handler';

import ImageModal from 'react-native-image-modal';

import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


import { sx } from './styles';
import { theme } from '../../theme/theme';

interface Params {
    immobile: {
        name: string,
        endereco: string,
        about: string,
        lenght: string,
        value: string,
        Badrooms: number,
        Garagen: number,
        thumbnail: string,

        immobileTypeSell: Array<{
            key: number,
            title: string,
        }>

        immobileState: Array<{
            key: number,
            title: string,
        }>

        coordenadas: {
            latitude: number,
            longitude: number,
        },
        images: Array<{
            id: number;
            url: string;
        }>;
    }
}

export function ImmobileSelect() {

    const route = useRoute()
    const { immobile } = route.params as Params

    return (
        <SafeAreaView>
            <HeaderDetails />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ScrollView style={sx.Container}
                    showsVerticalScrollIndicator={false}
                >
                    <View >
                        <Image
                            source={{ uri: `${immobile.thumbnail}` }}
                            style={sx.Images}
                        />
                    </View>

                    <View style={sx.HeaderCardHeader}>
                        <Text style={sx.HeaderCardTitleName}>
                            {immobile.name}
                        </Text>
                        <Text style={sx.HeaderCardTitleValue}>
                            {immobile.value}
                        </Text>
                    </View>

                    <View style={sx.HeaderCardHeaderLocation}>
                        <MaterialCommunityIcons
                            name="map-marker"
                            size={16}
                            color={theme.colors.text}
                        />
                        <Text style={sx.HeaderCardHeaderLocationText}>{immobile.endereco}</Text>
                    </View>

                    <View style={sx.HeaderCardHeaderInformation}>
                        <View style={sx.CardFooterItem}>
                            <Ionicons
                                name="bed-sharp"
                                size={18}
                                color={theme.colors.text}
                            />
                            <Text style={sx.CardBodyText}>{immobile.Badrooms}</Text>
                        </View>
                        <View style={sx.CardFooterItem}>
                            <Ionicons
                                name="ios-car-sport"
                                size={18}
                                color={theme.colors.text}
                            />
                            <Text style={sx.CardBodyText}>{immobile.Garagen}</Text>
                        </View>
                        <View style={sx.CardFooterItem}>
                            <MaterialCommunityIcons
                                name="ruler-square"
                                size={18}
                                color={theme.colors.text}
                            />
                            <Text style={sx.CardBodyText}>{immobile.lenght}</Text>
                        </View>
                    </View>


                    <View style={sx.CardDescription}>
                        <Text style={sx.CardDescriptionTitle}>Description</Text>
                        <Text style={sx.CardDescriptionDescription}>{immobile.about}</Text>
                    </View>

                    <View style={sx.ModalImageContainer}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {immobile.images.map((image, index) => (
                                <ImageModal
                                    key={index}
                                    resizeMode='cover'
                                    imageBackgroundColor="transparent"
                                    style={sx.ModalImage}
                                    source={{
                                        uri: `${image.url}`,
                                    }}
                                />
                            ))}
                        </ScrollView>
                    </View>

                    <TouchableOpacity style={sx.Button}>
                        <Text style={sx.ButtonTitle} >Entar em contato</Text>
                    </TouchableOpacity>

                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}
