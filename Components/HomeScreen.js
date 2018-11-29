import React from 'react';
import * as firebase from 'firebase';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({
            user: '',
        })
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                this.props.navigation.navigate("ProfileScreen");
                console.log(user);
            }
        })
    }

    async loginWithFacebook() {
        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync
        ('1902257816476632', {permissions: ['public_profile', 'profileURL']})
        if (type === 'success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
                console.log(error);
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../assets/Images/logo.png')}
                        style={{marginBottom: 30}}
                    />
                    <Text style={styles.headerLabel}>Découvre le domaine du Web en t'amusant</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.buttonFacebook} onPress={() => this.loginWithFacebook()}>
                        <Image
                            style={{width: 35, height: 35}}
                            source={require('../assets/Images/fb.png')}
                        />
                        <Text style={styles.label}>Connexion avec Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonInvite}
                                      onPress={() => this.props.navigation.navigate('LoginForm')}>
                        <Text style={styles.label}>Invité</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFCC66',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4267B2',
    },
    buttons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonInvite: {
        width: 150,
        height: 40,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 5,
    },
    buttonFacebook: {
        width: 250,
        height: 50,
        backgroundColor: '#245a9c',
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 15,
        flexDirection: 'row',
    },
    label: {
        fontSize: 16,
        fontWeight: 'normal',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
    },
    img: {
        justifyContent: 'center',
        alignItems: 'center'

    },

});