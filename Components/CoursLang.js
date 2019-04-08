import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

export default class CoursLang extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.answersContainer}>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>HTML</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>CSS</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>JavaScript</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>PHP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Java</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>React Native</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>C#</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>C++</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width: 45, height: 45}}
                                       source={require('../assets/Images/Shop.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerShop}>
                            <TouchableOpacity style={styles.answersButtons}>
                                <Text>Unity</Text>
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

    answersContainer: {
        flex: 2,
        alignItems: 'center',
        marginTop: 10

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
