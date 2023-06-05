import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../components/Header/Header.jsx'
// import BottomNavigationBar from '../../components/NavBar/BottomNavigationBar.jsx'
import ProfileCard from '../../components/Card/ProfileCard.jsx'
import { Ionicons } from '@expo/vector-icons';
import { themeColors } from '../../assets/theme/index.jsx'
import { useNavigation } from '@react-navigation/native'

const ProfileSreen = () => {
    const navigation = useNavigation();
    const listAccountUtilities = [
        { icon: 'create', label: 'Edit Profile', navigator: 'EditProfile' },
        { icon: 'pricetags', label: 'Promotions', navigator: 'Promotion' },
        { icon: 'wallet', label: 'Payment Method', navigator: 'PaymentMethod' },
        { icon: 'help-circle', label: 'Help & My Tickets', navigator: 'Help' },
        { icon: 'bookmark', label: 'Saved Addresses', navigator: 'MyAddresses' },
        { icon: 'shield', label: 'Account Safety', navigator: 'Safety' },
        { icon: 'person', label: 'Manage Account', navigator: 'Manage Account' },
    ];
    const listGeneralUtilities = [
        { icon: 'clipboard', label: 'Regulations', navigator: 'RegulationScreen' },
        { icon: 'document', label: 'Term & Privacy', navigator: 'Screen2' },
        { icon: 'analytics', label: 'Data Attribution', navigator: 'Screen1' },
        { icon: 'star', label: 'Rate ViGo App', navigator: 'Screen2' },

    ];
    return (
        <View style={styles.container}>
            <View style={styles.footer}><Header title="ProfileSreen" /></View>
            <ScrollView style={styles.body}>
                <ProfileCard name="Tran Gia Hoang" phoneNumber="123-456-789" imageSource="" />

                <Text style={styles.title}>Account</Text>
                {listAccountUtilities.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.list} onPress={() => navigation.navigate(item.navigator)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name={item.icon} size={24} color={themeColors.primary} />
                            <Text style={{ marginLeft: 10 }}>{item.label}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

                <Text style={styles.title}>General</Text>
                {listGeneralUtilities.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.list}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name={item.icon} size={24} color={themeColors.primary} />
                            <Text style={{ marginLeft: 10 }}>{item.label}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {/* <View style={styles.footer}><BottomNavigationBar /></View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', // inner items will be added vertically
        flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'space-between' // will create the gutter between body and footer
    },
    body: {
        padding: 20,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    list: {
        paddingTop: 20,
        fontSize: 20,
    },
});

export default ProfileSreen;