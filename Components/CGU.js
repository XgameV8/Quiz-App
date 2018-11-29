import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    StatusBar,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    For,
    ImageBackground,

} from 'react-native';
export default class CGU extends React.Component {


    render() {
        return (
            <ImageBackground source={require('../assets/Images/wall.jpg')}
                             style={{width: '100%', height: '100%'}}>
            <ScrollView>
            <View style={styles.mainContainer}>
                <Text style={styles.headerLabel}>Condition d'utilisation</Text>

                <View>
                    <Text style={styles.textCGU}>
                    Conditions générales d'utilisation du site
                    ARTICLE 1 : Objet

                    Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement juridique des modalités de mise à disposition des services du site Quizer et leur utilisation par « l'Utilisateur ».

                    Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur souhaitant accéder au site. Elles constituent le contrat entre le site et l'Utilisateur. L’accès au site par l’Utilisateur signifie son acceptation des présentes conditions générales d’utilisation.

                    Éventuellement :

                    En cas de non-acceptation des conditions générales d'utilisation stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par le site.

                    Quizer se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes conditions générales d'utilisation.

                    ARTICLE 2 : Mentions légales


                    L'édition du site Quizer est assurée par la Société Quizer [SAS / SA / SARL, etc.] au capital de 100.

                    Le Directeur de la publication est Monsieur Rudy Logre.

                    Éventuellement :

                    Quizer est une société du groupe Quizer  [SAS / SA / SARL, etc.] au capital de 100 € dont le siège social est situé au [adresse du siège social].

                    L'hébergeur du site Quizer est la Société Quizer [SAS / SA / SARL, etc.] au capital de 100 €.

                    ARTICLE 3 : Définitions


                    La présente clause a pour objet de définir les différents termes essentiels du contrat :

                    Utilisateur : ce terme désigne toute personne qui utilise le site ou l'un des services proposés par le site.

                    Contenu utilisateur : ce sont les données transmises par l'Utilisateur au sein du site.

                    Membre : l'Utilisateur devient membre lorsqu'il est identifié sur le site.

                    Identifiant et mot de passe : c'est l'ensemble des informations nécessaires à l'identification d'un Utilisateur sur le site. L'identifiant et le mot de passe permettent à l'Utilisateur d'accéder à des services réservés aux membres du site. Le mot de passe est confidentiel.


                    ARTICLE 4 : Propriété intellectuelle

                    Les marques, logos, signes et tout autre contenu du site font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.

                    L'Utilisateur sollicite l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus.

                    L'Utilisateur s'engage à une utilisation des contenus du site dans un cadre strictement privé. Une utilisation des contenus à des fins commerciales est strictement interdite.

                    Tout contenu mis en ligne par l'Utilisateur est de sa seule responsabilité. L'Utilisateur s'engage à ne pas mettre en ligne de contenus pouvant porter atteinte aux intérêts de tierces personnes. Tout recours en justice engagé par un tiers lésé contre le site sera pris en charge par l'Utilisateur.

                    Le contenu de l'Utilisateur peut être à tout moment et pour n'importe quelle raison supprimé ou modifié par le site. L'Utilisateur ne reçoit aucune justification et notification préalablement à la suppression ou à la modification du contenu Utilisateur.

                    ARTICLE 5 : Données personnelles


                    Les informations demandées à l’inscription au site sont nécessaires et obligatoires pour la création du compte de l'Utilisateur. En particulier, l'adresse électronique pourra être utilisée par le site pour l'administration, la gestion et l'animation du service.

                    Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Le site est déclaré à la CNIL sous le numéro 1569873.

                    ARTICLE 6 : Responsabilité et force majeure

                    Les sources des informations diffusées sur le site sont réputées fiables. Toutefois, le site se réserve la faculté d'une non-garantie de la fiabilité des sources. Les informations données sur le site le sont à titre purement informatif. Ainsi, l'Utilisateur assume seul l'entière responsabilité de l'utilisation des informations et contenus du présent site.

                    L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite.

                    L'Utilisateur assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline toute responsabilité.

                    Tout usage du service par l'Utilisateur ayant directement ou indirectement pour conséquence des dommages doit faire l'objet d'une indemnisation au profit du site.

                    Une garantie optimale de la sécurité et de la confidentialité des données transmises n'est pas assurée par le site. Toutefois, le site s'engage à mettre en œuvre tous les moyens nécessaires afin de garantir au mieux la sécurité et la confidentialité des données.

                    La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.

                    ARTICLE 7 : Liens hypertextes

                    De nombreux liens hypertextes sortants sont présents sur le site, cependant les pages web où mènent ces liens n'engagent en rien la responsabilité de Quizer qui n'a pas le contrôle de ces liens.

                    L'Utilisateur s'interdit donc à engager la responsabilité du site concernant le contenu et les ressources relatives à ces liens hypertextes sortants.

                    ARTICLE 8 : Évolution du contrat


                    Le site se réserve à tout moment le droit de modifier les clauses stipulées dans le présent contrat.

                    ARTICLE 9 : Durée


                    La durée du présent contrat est indéterminée. Le contrat produit ses effets à l'égard de l'Utilisateur à compter de l'utilisation du service.

                    Éventuellement

                    ARTICLE 10 : Publication par l’Utilisateur

                    Le site permet aux membres de publier des commentaires.

                    Dans ses publications, le membre s’engage à respecter les règles de la Netiquette et les règles de droit en vigueur.

                    Le site exerce une modération a priori sur les publications et se réserve le droit de refuser leur mise en ligne, sans avoir à s’en justifier auprès du membre.

                    Le membre reste titulaire de l’intégralité de ses droits de propriété intellectuelle. Mais en publiant une publication sur le site, il cède à la société éditrice le droit non exclusif et gratuit de représenter, reproduire, adapter, modifier, diffuser et distribuer sa publication, directement ou par un tiers autorisé, dans le monde entier, sur tout support (numérique ou physique), pour la durée de la propriété intellectuelle. Le Membre cède notamment le droit d'utiliser sa publication sur internet et sur les réseaux de téléphonie mobile.

                    La société éditrice s'engage à faire figurer le nom du membre à proximité de chaque utilisation de sa publication.
                    </Text>
                </View>

            </View>
            </ScrollView>
            </ImageBackground>
        );


    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },


    headerLabel: {
        fontSize: 35,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffdc7f',
    },
    textCGU : {

        color: '#FFF'
    }

});