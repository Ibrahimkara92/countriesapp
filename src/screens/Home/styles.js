import {StyleSheet,Platform} from 'react-native';
import {colors} from '../../config/colors';



export const homeStyles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    searchInput:{
      alignSelf:'center',
    },
    line:{
        width:400,
        height:2,
        marginTop:15,
        marginBottom:5,
        backgroundColor:colors.gray,
    },
    fabButton:{
        position:'absolute',
        bottom:36,
        end:35,
    },

});

export const countryObjectStyles=StyleSheet.create({
    container:{
      flex:1,

    },
    contentContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',

        paddingHorizontal:16,
        paddingVertical:12,

    },
    countryName:{
        flex:1,
        marginStart:12,

        color:colors.text_color,
    },
    countryFlag:{
        width:32,
        height: 20,


        borderRadius:4,
    },
    customIcon:{
        fontFamily:'arrow',
        color:colors.dark,
        fontSize:18,
    },
})
