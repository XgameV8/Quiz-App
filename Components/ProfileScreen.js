import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView,} from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import DevQuiz from './DevQuiz.js';



export default class ProfileScreen extends React.Component {







    render() {

        const barWidth = Dimensions.get('screen').width - 200;
        const progressCustomStyles = {
            backgroundColor: 'white',
            borderRadius: 5,
        };

        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.coinsContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ShopCate')}>
                            <Image
                                source={require('../assets/Images/coin.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ShopCate')}>
                            <Text style={styles.quantityCoins}>{this.props.coins}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userContainer}>
                        <Image
                            source={require('../assets/Images/user.png')}
                        />
                        <Text style={{fontSize: 17, color: '#FFF'}}>{this.props.displayName}</Text>
                    </View>
                    <View style={styles.achievementsMainContainer}>
                        <View style={styles.achievementsContainer}>
                            <ProgressBarAnimated
                                {...progressCustomStyles}
                                width={barWidth}
                                value={20}
                                backgroundColorOnComplete="#6CC644"
                            />
                            <View style={styles.img}>
                                <Image
                                    source={require('../assets/Images/podium.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.achievementsContainer}>
                            <ProgressBarAnimated
                                {...progressCustomStyles}
                                width={barWidth}
                                value={20}
                                backgroundColorOnComplete="#6CC644"
                            />
                            <Image
                                source={require('../assets/Images/trophy.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={styles.buttonsPlay}
                            onPress={() => this.props.navigation.navigate('ChoixQuiz')}>
                            <Text style={styles.buttonsText}>Jouer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.coursMainContainer}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#4267B2'}}>Cours disponibles</Text>
                    </View>
                    <View style={styles.coursContainer}>
                        <TouchableOpacity
                            style={styles.buttonsCours}>
                            <Image
                                source={require('../assets/Images/code.png')}
                            />
                            <Text style={styles.buttonsCoursText}>Dev</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonsCours}>
                            <Image
                                source={require('../assets/Images/design.png')}
                            />
                            <Text style={styles.buttonsCoursText}>Design</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonsCours}>
                            <Image
                                source={require('../assets/Images/market.png')}
                            />
                            <Text style={styles.buttonsCoursText}>Marketing</Text>
                        </TouchableOpacity>
                    </View>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcc66',
    },

    coinsContainer: {
        marginTop: 20,
        marginLeft: 20,
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    quantityCoins: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 7,

    },

    userContainer: {
        marginTop: 50,
        alignItems: 'center',
    },

    achievementsMainContainer: {
        marginTop: 50,
        flexDirection: 'column',
    },

    achievementsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },

    buttonsContainer: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    buttonsPlay: {
        width: 250,
        height: 70,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,


    },

    buttonsText: {
        color: '#FFF',
        fontSize: 35,
        fontWeight: 'bold',
    },

    coursMainContainer: {
        marginTop: 70,
        alignItems: 'center',

    },

    coursContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',

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
        marginTop: 30,
        backgroundColor: '#4267B2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    img: {

        marginBottom: 10,
    }

});