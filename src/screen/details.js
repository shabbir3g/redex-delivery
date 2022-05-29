import { SafeAreaView,StyleSheet, ScrollView, View, Pressable, Linking } from 'react-native'
import React from 'react'
import RedexHeader from '../components/redex-header'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing';
import Text from '../components/text/text';



export default function Details() {
 
    return (
        <SafeAreaView style={styles.container}>
            <RedexHeader backBtn={true} />
            <View style={styles.detilspage}> 
                
                <ScrollView>
                <View>
                    <Text>Hello Details</Text>
                </View>
                
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        flex: 1
    },
    detilspage: {
        backgroundColor: colors.white,
        height: 700,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        flexDirection: 'column',
        alignItems: 'center',
    },
    
})