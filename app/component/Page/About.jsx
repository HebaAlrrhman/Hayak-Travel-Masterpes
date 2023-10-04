import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/'

export default function About() {
    return (
        <ScrollView >
            <View style={styles.contanier}>
                <Image
                    source={require('../../assets/Hayakk.png')}
                />
            </View>

            <View style={styles.contanierText}>
                <Text style={styles.text}>
                
                Hayak Tourism, refers to the activities and travel to different places for leisure,
                 recreation inside jordan only . 

                </Text>

                <Text style={styles.text}>
                 It involves visiting destinations outside one's usual environment,
                  engaging in various activities, and experiencing different cultures and attractions.
                  Conveying the idea of ​​the Jordanian Arab civilization.
                </Text>

        
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    contanier: {
        height: 300,
        backgroundColor: COLORS.lightWhite,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contanierText: {
        padding: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 10,
        marginTop: 30,
    },
    bold: {
        fontWeight: '700',
    }
});