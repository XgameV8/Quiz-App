import {createStackNavigator} from 'react-navigation'
import ChoixQuiz from '../Components/ChoixQuiz'
import ProfileScreen from '../Components/ProfileScreen'
import HomeScreen from '../Components/HomeScreen'
import LoginForm from '../Components/LoginForm'
import ShopCateDev from '../Components/ShopCateDev'
import ShopCateDesign from '../Components/ShopCateDesign'
import Contact from '../Components/Contact'
import DevQuiz from '../Components/DevQuiz'
import MarketingQuiz from "../Components/MarketingQuiz";
import DesignQuiz from "../Components/DesignQuiz";
import FicheMet from "../Components/FicheMet";
import CoursLang from "../Components/CoursLang";
import CGU from "../Components/CGU";
import Classement from "../Components/Classement";
import Rewards from "../Components/Rewards";
import ChoixCours from "../Components/ChoixCours";
import QuizCateDev from '../Components/QuizCateDev';
import DevQuizDiff from '../Components/DevQuizDiff';
import QuizCateDesign from '../Components/QuizCateDesign';







const Navigation = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
        },

        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'Profil',
            },
        },
        ShopCateDev: {
            screen: ShopCateDev
        },

        ShopCateDesign: {
            screen: ShopCateDesign
        },
        DevQuizDiff: {
            screen: DevQuizDiff
        },


        QuizCateDev: {
            screen: QuizCateDev
        },
        QuizCateDesign: {
            screen: QuizCateDesign
        },

        Contact: {
            screen: Contact
        },

        LoginForm: {
            screen: LoginForm
        },
        DevQuiz: {
            screen: DevQuiz,
        },
        MarketingQuiz: {
            screen: MarketingQuiz
        },
        DesignQuiz: {
            screen: DesignQuiz
        },
        ChoixQuiz: {
            screen: ChoixQuiz
        },
        ChoixCours: {
            screen: ChoixCours
        },
        FicheMet: {
            screen: FicheMet
        },
        CoursLang: {
            screen: CoursLang
        },
        CGU: {
            screen: CGU
        },

        Classement: {
            screen: Classement
        },

        Rewards: {
          screen: Rewards
        },
    },

    {
        initialRouteName: "HomeScreen",
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#143b58'
            },
            headerTintColor: "#FFF",
        }
    }
);

export default Navigation