import * as React from 'react';
import {View,Text,Platform,TouchableOpacity,TouchableNativeFeedback,Image} from 'react-native';
import {countryObjectStyles as styles } from './styles';
import PropTypes from 'prop-types';

class CountryObject extends  React.Component{
    render() {
        const TouchableComponent=Platform.OS==='ios'?TouchableOpacity:TouchableNativeFeedback;

        // get this information from the props;
        const {name,nativeName,alpha2Code}=this.props.country;
        return (
            <TouchableComponent style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image
                        style={styles.countryFlag}
                        resizeMode='cover'
                        source={{uri:`https://www.countryflags.io/${alpha2Code}/flat/64.png`}}
                    />
                    <Text style={styles.countryName}>
                        {`${name}(${nativeName})`}
                    </Text>
                    <Text style={styles.customIcon}>&#xea42;</Text>
                </View>
            </TouchableComponent>
        );
    }
}
CountryObject.propTypes={
    country:PropTypes.object,
}
export default CountryObject;
