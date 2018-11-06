import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ShopCate extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.title}>
                    <Text style={styles.headerLabel}>Choisir Catégories</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonsPlay}
                    onPress={() => this.props.navigation.navigate('FicheMet')}>
                    <Text style={styles.buttonsText}>Fiches Métiers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsPlay}
                                  onPress={() => this.props.navigation.navigate('CoursLang')}>
                    <Text style={styles.buttonsText}>Cours</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFCC66',
    },

    headerLabel: {
        fontSize: 35,
        fontWeight: 'bold',
        alignItems: 'center',
        color: '#4267B2',
    },

    buttonsPlay: {
        width: '100%',
        height: '47%',
        backgroundColor: '#4267B2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#FFF',


    },

    buttonsText: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
    },

    title: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});