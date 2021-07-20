import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import { Server } from '../../services/server'

import { Header } from '../../components/header';
import { CardRecommend } from '../../components/CardRecommend';


import { sx } from './styles'
import { CardSecundario } from '../../components/CardSecundario';

import { useNavigation } from '@react-navigation/native'


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



export function Home() {

    const Data = Server.immobile;
    const recommends = Math.floor(Math.random() * Data.length)

    const DataImmobileBeiraMar = Server.immobile.filter(item => (item.endereco) === "Avenida Beira Mar")


    const SellImmobile = Server.immobile.filter(item => (item.id < 6 && item.immobileTypeSell[1]))


    const navigation = useNavigation();

    function handlerImmobileSelect(immobile: ImmobilePropsData) {
        navigation.navigate('ImmobileSelectScreen', { immobile })
    }

    return (
        <SafeAreaView style={sx.container}>
            <Header />
            <ScrollView>
                <View>
                    <View style={sx.ViewCardRecommended}>
                        <Text style={sx.CardRecommendTitle}>Recomended</Text>
                        <TouchableOpacity>
                            <Text style={sx.CardRecommendMore}>more</Text>
                        </TouchableOpacity>
                    </View>
                    <CardRecommend data={Data[recommends]} onPress={() => handlerImmobileSelect(Data[recommends])} />
                </View>
                <View>
                    <View style={sx.ViewCardRecommended}>
                        <Text style={sx.CardRecommendTitle}>Avenida Beira Mar</Text>
                        <TouchableOpacity>
                            <Text style={sx.CardRecommendMore}>more</Text>
                        </TouchableOpacity>
                    </View>
                    {DataImmobileBeiraMar.map((data) => (
                        <CardSecundario data={data} key={data.id} onPress={() => handlerImmobileSelect(data)} />
                    ))}
                </View>
                <View>
                    <View style={sx.ViewCardRecommended}>
                        <Text style={sx.CardRecommendTitle}>Os melhores a venda</Text>
                        <TouchableOpacity>
                            <Text style={sx.CardRecommendMore}>more</Text>
                        </TouchableOpacity>
                    </View>
                    {SellImmobile.map((data) => (
                        <CardSecundario data={data} key={data.id} onPress={() => handlerImmobileSelect(data)} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

