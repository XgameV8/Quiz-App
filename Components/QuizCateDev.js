import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';

export default class QuizCateDev extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/Images/wall.jpg')}
                             style={{width: '100%', height: '100%'}}>
                <View style={styles.mainContainer}>
                    <View style={styles.title}>
                        <Text style={styles.headerLabel}>Choisir Catégories</Text>
                    </View>
                    <View style={styles.coursContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DevQuizDiff')}>
                            <Image
                                source={require('../assets/Images/bouton_html.png')}

                            />

                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Images/bouton_angular.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Images/bouton_javascript.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.coursContainer}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Images/bouton_python.png')}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Images/bouton_java.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Images/bouton_net.png')}
                            />

                        </TouchableOpacity>
                    </View>
                    <View style={styles.coursContainer}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Images/bouton_php.png')}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Images/bouton_node.png')}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Images/bouton_react.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },

    headerLabel: {
        fontSize: 35,
        fontWeight: 'bold',
        alignItems: 'center',
        color: '#FFF',
        marginTop: 30,
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

    coursContainer: {
        marginTop: 60,
        flexDirection: 'row',
        marginLeft: 20,

    },

    buttonsCours: {
        width: 120,
        height: 120,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
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