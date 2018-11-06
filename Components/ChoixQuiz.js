import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Button} from "react-native-elements";

export default class ChoixQuiz extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../assets/Images/logo.png')}
                    />
                    <Text style={styles.headerLabel}>Veuillez choisir une catégorie de Quiz</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.buttonsPlay}
                        onPress={() => this.props.navigation.navigate('DevQuiz')}>
                        <Text style={styles.buttonContactText}>Développement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsPlay}
                                      onPress={() => this.props.navigation.navigate('DesignQuiz')}>
                        <Text style={styles.buttonContactText}>Design</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsPlay}
                                      onPress={() => this.props.navigation.navigate('MarketingQuiz')}>
                        <Text style={styles.buttonContactText}>Marketing</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC66',
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
        color: '#4267B2',
        marginTop: 50,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 80
    },
    buttonsPlay: {
        width: 140,
        height: 80,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
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
