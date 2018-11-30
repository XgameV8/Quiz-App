import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView,AsyncStorage,ImageBackground} from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';




export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: 0,
        }
    }


    render() {



        return (
            <ImageBackground source={require('../assets/Images/wall.jpg')}
                             style={{width: '100%', height: '100%'}}>
            <ScrollView>



                <View style={styles.container}>
                    <View style={styles.coinsContainer}>
                            <Image
                                source={require('../assets/Images/money.png')}

                            />



                            <Text style={styles.quantityCoins}>{this.state.coins}</Text>

                        <View style={styles.xpContainer}>

                            <TouchableOpacity
                            >
                                <Image
                                    source={require('../assets/Images/xp_bar.png')}

                                />
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.userContainer}>

                        <Image
                            source={require('../assets/Images/user.png')}
                        />
                    </View>



                        <TouchableOpacity style={styles.buttonquiz} onPress={() => this.props.navigation.navigate('ChoixQuiz')}>
                            <Text style={styles.textquiz}>Jouer</Text>
                        </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonquiz} onPress={() => this.props.navigation.navigate('ChoixCours')}>
                        <Text style={styles.textquiz}>Cours</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonquiz} >
                        <Image
                            source={require('../assets/Images/lock_petit.png')}
                        />
                    </TouchableOpacity>


                    <View style={styles.ContainerEnd}>
                        <View>
                            <TouchableOpacity style={styles.buttonContact}
                                              onPress={() => this.props.navigation.navigate('Contact')}>
                                <Text style={styles.buttonContactText}>Contact Staff</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.buttonCondition}
                                          onPress={() => this.props.navigation.navigate('CGU')}>
                            <Text style={styles.buttonContactText}>Condition d'utilisation</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    coinsContainer: {
        marginTop: 20,
        marginLeft: 20,
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    quantityCoins: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 7,
        color:'#ffdc7f'
    },

    userContainer: {
        alignItems: 'center',
        justifyContent:'center'
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
        marginTop:30,
        width: 300,
        height: 80,
        justifyContent:'center',
    },

    textquiz: {
        fontSize: 42,
        color:'#000',
    },

    buttonsText: {
        color: '#FFF',
        fontSize: 35,
        fontWeight: 'bold',
    },


    ContainerEnd: {
        marginTop: 20,
        alignItems: 'center',

    },

    buttonsCours: {
        width: 100,
        height: 80,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    buttonsCoursText: {
        color: '#4267b2',
        fontSize: 18,
        fontWeight: 'bold',
    },


    buttonContactText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },

    buttonContact: {
        width: 150,
        height: 40,
        marginTop: 50,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
    },


    buttonCondition: {
        width: 250,
        height: 50,
        marginTop: 20,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },


    xpContainer: {
        justifyContent:'space-between',
        marginLeft:170



    }

});