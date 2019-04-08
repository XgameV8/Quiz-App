import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'native-base';
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

export default class Contact extends React.Component {


    render() {
        return (

            <View style={styles.mainContainer}>
                <View style={styles.questionTitle}>
                    <Text style={styles.headerLabel}>Nous Contacter</Text>
                </View>
                <View style={styles.formContainer}>
                    <FormLabel>Email</FormLabel>
                    <FormInput/>
                    <FormValidationMessage>{'Champs Requis'}</FormValidationMessage>
                    <FormLabel>Message </FormLabel>
                    <FormInput/>
                    <FormValidationMessage>{'Champs Requis'}</FormValidationMessage>
                    <Button
                        style={{marginTop: 40, backgroundColor: '#4267B2'}}
                        full
                        rounded
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                    >
                        <Text style={{color: '#FFF'}}>Envoyer</Text>
                    </Button>
                </View>
            </View>
        );


    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFCC66',
    },

    questionTitle: {
        alignItems: 'center',
        fontSize: 17,
        marginTop: 20,

    },
    headerLabel: {
        fontSize: 35,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4267B2',
    },

    formContainer: {
        marginTop: 80
    }

});