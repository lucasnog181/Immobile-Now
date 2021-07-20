import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { sx } from './styles';

import { AuthContext } from '../../providers/AuthContext';
import Division from '../../components/Division';

export function Profile() {

    const { logout, user } = useContext(AuthContext)

    return (
        <SafeAreaView>
            <View style={sx.containerProfile}>
                <View style={sx.profileHeader}>
                    <Image
                        source={{ uri: `${user?.photoUrl}` }}
                        style={sx.profileUserAvatar}
                    />
                    <View style={sx.profileHeaderText}>
                        <Text style={sx.profileHeaderNameUser}>{user?.name}</Text>
                        <Text style={sx.profileHeaderEmailUser}>{user?.email}</Text>
                    </View>
                </View>
                <Division />

                <View style={sx.profileBody}>
                    <TouchableOpacity style={sx.ButtonItem}>
                        <View style={sx.ButtonItemLeft}>
                            <View style={sx.ButtonItemIcon}>
                                <Ionicons
                                    name="settings-sharp"
                                    size={24}
                                    olor="#31394C"
                                />
                            </View>
                            <Text style={sx.ButtonItemText}>Settings</Text>
                        </View>
                        <AntDesign
                            name="right"
                            size={18}
                            color="#31394C"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={sx.ButtonItem}>
                        <View style={sx.ButtonItemLeft}>
                            <View style={sx.ButtonItemIcon}>
                                <Ionicons
                                    name="person-circle-outline"
                                    size={24}
                                    olor="#31394C"
                                />
                            </View>
                            <Text style={sx.ButtonItemText}>User Settings</Text>
                        </View>
                        <AntDesign
                            name="right"
                            size={18}
                            color="#31394C"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={sx.ButtonItem}>
                        <View style={sx.ButtonItemLeft}>
                            <View style={sx.ButtonItemIcon}>
                                <Ionicons
                                    name="moon"
                                    size={24}
                                    olor="#31394C"
                                />
                            </View>
                            <Text style={sx.ButtonItemText}>Dark Mode</Text>
                        </View>
                        <AntDesign
                            name="right"
                            size={18}
                            color="#31394C"
                        />
                    </TouchableOpacity>


                    <TouchableOpacity style={sx.ButtonLogout} onPress={logout}>
                        <Text>Sair do App</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
}
