import {createStackNavigator} from 'react-navigation'
import ChoixQuiz from '../Components/ChoixQuiz'
import ProfileScreen from '../Components/ProfileScreen'
import HomeScreen from '../Components/HomeScreen'
import LoginForm from '../Components/LoginForm'
import ShopCate from '../Components/ShopCate'
import Contact from '../Components/Contact'
import DevQuiz from '../Components/DevQuiz'
import MarketingQuiz from "../Components/MarketingQuiz";
import DesignQuiz from "../Components/DesignQuiz";
import FicheMet from "../Components/FicheMet";
import CoursLang from "../Components/CoursLang";
import CGU from "../Components/CGU";


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
        ShopCate: {
            screen: ShopCate
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
        FicheMet: {
            screen: FicheMet
        },
        CoursLang: {
            screen: CoursLang
        },
        CGU: {
            screen: CGU
        },
    },

    {
        initialRouteName: "HomeScreen",
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#FFCC66'
            },
            headerTintColor: "#FFF",
        }
    }
);

export default Navigation