import * as React from 'react';
import {View,Text,Platform,TouchableOpacity,TouchableNativeFeedback} from 'react-native';
import {fabButtonStyles as styles} from './styles';
import PropTypes from 'prop-types';
class  FabButton extends  React.Component{
    render() {
        const TouchableComponent=Platform.OS==='ios'?TouchableOpacity:TouchableNativeFeedback;

        const {onPress,style}=this.props;
        return (
            <View style={[styles.container,style]}>
                <TouchableComponent onPress={onPress} style={styles.touchable}>
                    <View style={styles.touchableContent}>
                        <Text style={styles.customIcon}>
                            &#xe984;
                        </Text>
                    </View>

                </TouchableComponent>

            </View>
        );
    }
}
FabButton.propTypes={
    onPress:PropTypes.func,
    style:PropTypes.any
}
export default FabButton;
