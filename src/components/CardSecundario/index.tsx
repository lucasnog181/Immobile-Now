import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { sx } from './styles';
import { theme } from '../../theme/theme';


type ImmobileCardsProps = RectButtonProps &{
    data: {
        name: string,
        thumbnail: string,
        value: string,
        endereco: string,
        Badrooms: number,
        lenght: string
    }
}



export function CardSecundario({ data, ...rest }: ImmobileCardsProps) {
    return (
        <RectButton style={sx.buttonContainer}  {...rest}>
            <Image
                source={{ uri: `${data.thumbnail}` }}
                style={sx.thumbnailImage}
            />
            <View style={sx.ButtonHeader}>
                <Text>{data.name}</Text>
                <View style={sx.LocationImmobile}>
                    <FontAwesome5
                        name="map-marker"
                        size={13}
                        color={theme.colors.text}
                    />
                    <Text style={sx.LocationImmobileText}>{data.endereco}</Text>
                </View>
                <View style={sx.CardFooter}>
                    <View style={sx.CardFooterItem}>
                        <Ionicons
                            name="bed-sharp"
                            size={18}
                            color={theme.colors.text}
                        />
                        <Text style={sx.CardBodyText}>{data.Badrooms}</Text>
                    </View>
                    <View style={sx.CardFooterItem}>
                        <Ionicons
                            name="ios-car-sport"
                            size={18}
                            color={theme.colors.text}
                        />
                        <Text style={sx.CardBodyText}>{data.Badrooms}</Text>
                    </View>
                    <View style={sx.CardFooterItem}>
                        <MaterialCommunityIcons
                            name="ruler-square"
                            size={18}
                            color={theme.colors.text}
                        />
                        <Text style={sx.CardBodyText}>{data.lenght}</Text>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}
