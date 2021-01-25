import * as React from 'react';
import {View,Text} from 'react-native';
import {headerStyles as styles} from './style';

class  Header extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.subtitle}>Hangi Ülkeyi Merak Ediyorsun?</Text>
                <View style={styles.line} />
                <Text style={styles.title} >COUNTRIES</Text>

            </View>
        )
    }
}
export default Header;
