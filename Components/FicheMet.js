import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';


export default class FicheMet extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.answersContainer}>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Développeur Web</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Intégrateur Web</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Technicien Réseau</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Chef De Projet</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Webdesigner</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Webmarketeur</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Webmaster</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Community Manager</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Graphiste Web</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC66',

    },

    headerLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4267B2',
        marginTop: 50,
    },

    answersContainer: {
        flex: 2,
        alignItems: 'center',

    },
    answersButtons: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#FFF'

    },
    containerShop: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 40,
        marginLeft: 10,

    },


});
