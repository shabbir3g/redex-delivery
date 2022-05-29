import { View, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import backgroundImage from '../../assets/Media.png'

export default function RedexHeader({ backBtn, title = "THE Redex" }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
         {!backBtn && (
            <View style={styles.logo}> 
                <View style={styles.spaceExtra}></View>
                <Image
                    source={require('../../assets/D.png')}
                />
            </View>

            ) 
            }
            {backBtn && (
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
                    <View style={styles.detailsHeader}> 
                        <Pressable style={{ marginRight: spacing[4] }} onPress={() => {
                            navigation.goBack();
                        }}>
                            <AntDesign name="left" size={24} color="white" />
                        </Pressable>
                    </View>
                </ImageBackground>

            ) 
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing[5],
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    logo: {
        backgroundColor: '#CDFFB6',
        padding: 15,
        borderRadius: 50,
        heigth: 400
    },
    background: {
        height: 300,
        width: 400

    }
    
})