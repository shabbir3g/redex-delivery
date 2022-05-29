import { StyleSheet, SafeAreaView, View, Pressable } from 'react-native'
import Text from '../components/text/text'
import RedexHeader from '../components/redex-header'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { useNavigation } from '@react-navigation/native';
import BoxIcon from '../svg/BoxIcon.tsx';

const OrderBtn = () => {
    const navigation = useNavigation();

    return(
        <Pressable onPress={() => {
            navigation.navigate('Details');
        }}  >
            
               <Text style={styles.orderNowBtn} >Order Now</Text>
        </Pressable>
    );

}

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <RedexHeader />
            <View style={styles.home}>
               <View style={styles.boxIcon}> 
                <BoxIcon />
               </View>
               <Text preset='h1'>Non-Contact</Text>
               <Text preset='h1'>Deliveries</Text>
               <Text style={{textAlign: 'center', marginTop: 20, paddingHorizontal: 30}}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.</Text>
               <OrderBtn />
               <Text style={styles.dissmissBtn}>Dismiss</Text>
            </View>
            
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        flex: 1
    },
    home: {
        backgroundColor: colors.white,
        height: 700,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    boxIcon: {
        backgroundColor: '#fff',
        width: 80,
        height: 80,
        borderRadius: 50,
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    orderNowBtn: {
        backgroundColor: colors.green,
        flexDirection: 'column',
        color: colors.white,
        width: 400,
        textAlign: 'center',
        padding: 12,
        marginTop: 40,
       textTransform: 'uppercase',
       fontSize: 18,
    },
    dissmissBtn: {
        flexDirection: 'column',
        color: colors.lightPurple,
        width: 400,
        textAlign: 'center',
        padding: 12,
        marginTop: 20,
       textTransform: 'uppercase',
       fontSize: 18,
    }
   
})