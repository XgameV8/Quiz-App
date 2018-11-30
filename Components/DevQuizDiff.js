import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import {Button} from "react-native-elements";

export default class ChoixQuiz extends React.Component {

    render() {
        return (

            <ImageBackground source={require('../assets/Images/wall.jpg')}
                             style={{width: '100%', height: '100%'}}>
                <ScrollView>

                    <View style={styles.container}>

                        <View style={styles.header}>
                            <Image
                                source={require('../assets/Images/logo.png')}
                            />
                            <Text style={styles.headerLabel}>Choisissez une difficulté</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonquiz} onPress={() => this.props.navigation.navigate('DevQuiz')}>
                            <View style={styles.imgstar}>
                            <Image
                                   source={require('../assets/Images/1star.png')}
                            />
                            </View>
                            <Text style={styles.textquiz}>Facile</Text>


                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonquiz} onPress={() => this.props.navigation.navigate('ChoixCours')}>
                            <View style={styles.imgstar}>
                                <Image
                                    source={require('../assets/Images/2star.png')}
                                />
                            </View>
                            <Text style={styles.textquiz}>Moyen</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonquiz} onPress={() => this.props.navigation.navigate('ChoixCours')}>
                            <View style={styles.imgstar}>
                                <Image
                                    source={require('../assets/Images/3star.png')}
                                />
                            </View>
                            <Text style={styles.textquiz}>Difficile</Text>

                        </TouchableOpacity>
                        </View>
                </ScrollView>
            </ImageBackground>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,

    },
    headerLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffdc7f',
        marginTop: 50,
    },
    buttonquiz: {
        backgroundColor: '#ffdc7f',
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:60,
        marginTop:50,
        width: 300,
        height: 80,
        flexDirection: 'row',
    },

    textquiz: {
        fontSize: 42,
        color:'#000',
    },
    buttonContactContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContactText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#4267B2'
    },

});
