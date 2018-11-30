import {devJsonData} from "../assets/Data/devQuizData";
import React from "react";
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    Modal,
    Image,
    AsyncStorage,
    ImageBackground,
} from "react-native";

export default class DevQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            count: 0,
            response: false,
            score: 0,
            coins: 0,
            questionNumber: 0,
            visible: false,
        })
    }



    _nextQuestion = () => {
        this._scoring();
        if (this.state.count === 9) {
            this.setState({visible: true})

        }
        else {
            console.log(this.state.questionNumber, 'next');
            this.setState({
                count: this.state.count + 1,
                response: false,
                questionNumber: false,
                enable: false,
                visible: false,
            })
        }
    };


    _scoring = () => {
        if (this.state.questionNumber === true) {
            this.setState({
                score: this.state.score + 1,
                coins: this.state.coins + 100,
            })
        }
        else {
            return (null)
        }
    };



    render() {

        console.log(this.state.score);
        return (
            <ImageBackground source={require('../assets/Images/wall.jpg')}
                             style={{width: '100%', height: '100%'}}>
            <View style={styles.mainContainer}>
                <View style={styles.questionContainer}>
                    <Text style={{
                        color: '#4267B2',
                        fontSize: 14,
                        fontWeight: 'bold',
                    }}>{devJsonData.questions[this.state.count].title}</Text>
                </View>
                {devJsonData.questions[this.state.count].answer.map((el) => {
                    return (
                        <View style={styles.answersContainer}>
                            <TouchableHighlight
                                style={[styles.answersButtons, {backgroundColor: (el.goodAnswer === true && this.state.response === true) ? "#006400" : "white"}]}
                                onPress={() => {
                                    this.setState({
                                        questionNumber: el.goodAnswer,
                                        response: true,
                                        disable: true,
                                        enable: true,
                                    });

                                }}
                                underlayColor={'white'}
                            >
                                <Text style={{fontSize: 14, fontWeight: '500',}}>{el.nom}</Text>
                            </TouchableHighlight>
                        </View>
                    )
                })
                }

                <View style={styles.buttonNext}>
                    <TouchableOpacity
                        onPress={() => this._nextQuestion()}>
                        <Text style={styles.buttonNextQuestion}>Question Suivante</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.visible}
                    onRequestClose={() => {
                        this.props.navigation.navigate('ChoixQuiz')
                    }}
                >
                    <View style={styles.ModalScore}>
                        <View style={styles.header}>
                            <Image
                                source={require('../assets/Images/result.png')}
                                style={{marginBottom: 30}}
                            />
                        </View>
                        <View style={{flex: 1, justifyContent: 'space-between'}}>
                            <Text style={styles.headerLabel}>Votre score est de {this.state.score} / 10</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'space-around'}}>
                            <Text style={styles.headerLabel}>Vous avez gagner {this.state.coins} coins</Text>
                        </View>
                        <View style={styles.buttonNextGame}>
                            <TouchableOpacity
                                full
                                rounded
                                primary
                                onPress={() => {
                                    this.props.navigation.navigate('ChoixQuiz');
                                    this.setState({visible: false})
                                }}
                            >
                                <Text style={{
                                    color: '#FFF', fontSize: 14,
                                    fontWeight: 'bold'
                                }}>Jouer une autre partie</Text>

                            </TouchableOpacity>
                        </View>
                            <TouchableOpacity
                                full
                                rounded
                                primary
                                onPress={() => {
                                    this.props.navigation.navigate('ProfileScreen');
                                    this.setState({visible: false},

                                )
                                }}
                            >
                                <Text style={{
                                    color: '#FFF', fontSize: 14,
                                    fontWeight: 'bold', justifyContent: 'space-between'
                                }}>Retour à l'accueil</Text>

                            </TouchableOpacity>

                    </View>
                </Modal>
            </View>
            </ImageBackground>

        );
    }
};

const styles = StyleSheet.create({
        mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
        /* CONTAINER QUESTION */
        questionContainer: {
        width: 300,
        height: 150,
        marginTop: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
        /* Answers Container */
        answersContainer: {
        marginTop: 50,
    },
        /* Answers Buttons */
        answersButtons: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
        buttonNext: {
        backgroundColor: '#4267B2',
        width: 150,
        height: 50,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
        buttonNextQuestion: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#4267B2'
    },

        /* VUE SCORE */
        ModalScore: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

        header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70
    },
        headerLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4267B2',
    },

        buttonNextGame: {
        backgroundColor: '#4267b2',
        borderRadius:5,
        width: 170,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },



});