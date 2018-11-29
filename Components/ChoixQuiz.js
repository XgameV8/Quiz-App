import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import {Button} from "react-native-elements";

export default class ChoixQuiz extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../assets/Images/wall.jpg')}
                             style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../assets/Images/logo.png')}
                    />
                    <Text style={styles.headerLabel}>Veuillez choisir une catégorie de Quiz</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.buttonquiz} onPress={() => this.props.navigation.navigate('DevQuis')}>
                    <Image
                        source={require('../assets/Images/cours_dev.png')}

                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonquiz} onPress={() => this.props.navigation.navigate('DesignQuiz')}>
                    <Image
                        source={require('../assets/Images/cours_design.png')}

                    />
                </TouchableOpacity>


                    <TouchableOpacity style={styles.buttonquiz} onPress={() => this.props.navigation.navigate('MarketingQuiz')}>
                        <Image
                            source={require('../assets/Images/cours_market.png')}

                        />
                    </TouchableOpacity>
                </View>
                </View>

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
        marginTop: 20
    },
    headerLabel: {
        fontSize: 16,
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
        marginLeft:60,
        marginTop:100,
        width: 300,
        height: 80,
        justifyContent:'center',
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
