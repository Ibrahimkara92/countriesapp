import {StyleSheet,Platform} from 'react-native';
import {colors} from '../../config/colors';

export const searchInputStyles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        width:300,
        borderWidth:1,
        borderColor:colors.gray,
        borderRadius:Platform.OS='ios'?8:4,
        overflow:'hidden',
    },
    customicon:{
        fontFamily:'icomoon',
        color:colors.dark,
        fontSize:24,
    },
    input:{
        flex:1,
        paddingHorizontal:12,
        paddingVertical:5,
    },
    button:{
        flex:1,
        width: 40,
        backgroundColor:colors.accent,
        alignItems:'center',
        justifyContent:'center',
    }
});
