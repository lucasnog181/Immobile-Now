import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, Platform, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'


import { Server } from '../../services/server'
import markerIcon from '../../assets/marker.png'


import { sx } from './styles';
import { theme } from "../../theme/theme";

type ImmobilePropsData = {
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



export function Map() {

    const marker = Server.immobile;

    const origin = {
        latitude: -3.7469232,
        longitude: -38.5180033,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }


    const { width, height } = Dimensions.get("window");
    const CARD_WIDTH = width * 0.9;
    const SPACING_FOR_CARD_INSET = 10;


    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0)

    useEffect(() => {
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= marker.length) {
                index = marker.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index;
                    const { coordenadas } = marker[index];
                    _map.current.animateToRegion(
                        {
                            ...coordenadas,
                            latitudeDelta: origin.latitudeDelta,
                            longitudeDelta: origin.longitudeDelta,
                        },
                        350
                    );
                    clearTimeout(regionTimeout);
                }
            }, 10);

        });
    });


    const interpolations = marker.map((marker, index) => {
        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            ((index + 1) * CARD_WIDTH),
        ];

        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.7, 1],
            extrapolate: "clamp"
        });

        return { scale };
    });


    const _map = useRef<any>(null);
    const _scrollView = useRef<any>(null);


    const navigation = useNavigation();

    function handlerImmobileSelect(immobile: ImmobilePropsData) {
        navigation.navigate('ImmobileSelectScreen', { immobile })
    }

    return (
        <View style={sx.container}>
            <MapView
                ref={_map}
                initialRegion={origin}
                provider={PROVIDER_GOOGLE}
                style={sx.mapView}
                showsBuildings
                zoomEnabled={false}
                zoomControlEnabled={false}
            >

                {marker.map((item, index) => {

                    const scaleStyle = {
                        transform: [
                            {
                                scale: interpolations[index].scale,
                            },
                        ],
                    };

                    return (
                        <Marker
                            key={item.id}
                            coordinate={{
                                latitude: item.coordenadas.latitude,
                                longitude: item.coordenadas.longitude,
                            }}
                            title={item.name}
                        >
                            <Animated.View style={[sx.markerWrap]}>
                                <Animated.Image
                                    style={[sx.MarkerStyles, scaleStyle]}
                                    source={markerIcon}
                                    resizeMode="cover"
                                />
                            </Animated.View>
                        </Marker>

                    )
                })}
            </MapView>

            <Animated.ScrollView
                ref={_scrollView}
                horizontal
                pagingEnabled
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                style={sx.placesContainer}
                snapToInterval={CARD_WIDTH + 20}
                contentInset={{
                    top: 0,
                    left: SPACING_FOR_CARD_INSET,
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET
                }}
                contentContainerStyle={{
                    paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
                }}
                snapToAlignment="center"
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: mapAnimation
                                }
                            }
                        }
                    ],
                    { useNativeDriver: true })}
            >
                {marker.map((item) => (
                    <TouchableOpacity style={sx.place} key={item.id} onPress={() => handlerImmobileSelect(item)}>
                        <Image source={{ uri: `${item.thumbnail}` }} style={sx.thumbnail} />
                        <View style={sx.cardHeader}>
                            <Text>{item.name}</Text>
                            <View style={sx.cardBody}>
                                <FontAwesome5
                                    name="map-marker"
                                    size={13}
                                    color={theme.colors.text}
                                />
                                <Text style={sx.cardBodyText}>{item.endereco}</Text>
                            </View>
                            <View style={sx.cardFooter}>
                                <View style={sx.CardFooterItem}>
                                    <Ionicons
                                        name="bed-sharp"
                                        size={18}
                                        color={theme.colors.text}
                                    />
                                    <Text style={sx.CardBodyText}>{item.Badrooms}</Text>
                                </View>
                                <View style={sx.CardFooterItem}>
                                    <Ionicons
                                        name="ios-car-sport"
                                        size={18}
                                        color={theme.colors.text}
                                    />
                                    <Text style={sx.CardBodyText}>{item.Garagen}</Text>
                                </View>
                                <View style={sx.CardFooterItem}>
                                    <MaterialCommunityIcons
                                        name="ruler-square"
                                        size={18}
                                        color={theme.colors.text}
                                    />
                                    <Text style={sx.CardBodyText}>{item.lenght}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </Animated.ScrollView>

        </View>
    );
}

export default Map;
