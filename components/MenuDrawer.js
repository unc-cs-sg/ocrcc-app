import React from 'react';
import {
    View,
    Text,
    Platform,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import styling from './functions';

export default class MenuDrawer extends React.Component {

    navLink(nav, text) {
        return (
            <TouchableOpacity style={styles.pageLinks} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    close = () => {
        this.props.navigation.toggleDrawer();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topLinks}>
                    <TouchableOpacity
                        onPress={this.close.bind(this)}>
                        <Icon
                            name="md-close"
                            color="#fff"
                            size={32}
                            style={styles.closeIcon}
                        >
                        </Icon>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomLinks}>
                    {this.navLink('HomeScreen', 'Home')}
                    {this.navLink('LinksScreen', 'Links')}
                    {this.navLink('SettingsScreen', 'Settings')}
                    {this.navLink('MapScreen', 'Map')}
                    {this.navLink('GetHelpScreen', 'Get Help Now')}
                    {this.navLink('ResourcesScreen', 'Resources')}
                    {this.navLink('SupportWorkshops', 'Support Groups + Workshops')}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styling.primary(),
    },
    topLinks: {
        flex: 1,
        backgroundColor: styling.primary(),
    },
    bottomLinks: {
        flex: 5,
        backgroundColor: styling.primary(),
        paddingTop: 10,
        paddingBottom: 300
    },
    linkTitle: {
        fontSize: 24,
        color: 'white',
        flex: 1
    },
    link: {
        flex: 1,
        fontSize: 20,
        paddingLeft: 20,
        margin: 1,
        textAlign: 'left',
        color: 'white'
    },
    pageLinks: {
        flex: 1,
        // textColor: 'white' 
    },
    closeIcon: {
        paddingLeft: 20,
        paddingTop: 10,
        margin: 1,
    },
})