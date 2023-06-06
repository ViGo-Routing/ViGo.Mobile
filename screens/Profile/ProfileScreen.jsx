import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../components/Header/Header.jsx'
// import BottomNavigationBar from '../../components/NavBar/BottomNavigationBar.jsx'
import ProfileCard from '../../components/Card/ProfileCard.jsx'
import { Ionicons } from '@expo/vector-icons'
import { themeColors } from '../../assets/theme/index.jsx'
import { useNavigation } from '@react-navigation/native'

const ProfileSreen = () => {
    const navigation = useNavigation();
    const listAccountUtilities = [
        { icon: 'create', label: 'Chỉnh sửa hồ sơ', navigator: 'EditProfile' },
        { icon: 'pricetags', label: 'Khuyến mãi', navigator: 'Promotion' },
        { icon: 'wallet', label: 'Phương thức thanh toán', navigator: 'PaymentMethod' },
        { icon: 'help-circle', label: 'Trợ giúp & yêu cầu hỗ trợ', navigator: 'Help' },
        { icon: 'bookmark', label: 'Địa điểm đã lưu', navigator: 'MyAddresses' },
        { icon: 'shield', label: 'Bảo mật tài khoản', navigator: 'Safety' },
        { icon: 'person', label: 'Quản lý tài khoản', navigator: 'Manage Account' },
    ];
    const listGeneralUtilities = [
        { icon: 'clipboard', label: 'Quy chế', navigator: 'RegulationScreen' },
        { icon: 'document', label: 'Bảo mật & Điều khoản', navigator: 'Screen2' },
        // { icon: 'analytics', label: 'Dữ liệu', navigator: 'Screen1' },
        { icon: 'star', label: 'Đánh giá ứng dụng Gojeck', navigator: 'Screen2' },
        { icon: '', label: '', navigator: '' },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.header}><Header title="Thông tin tài khoản" /></View>
            <ScrollView style={styles.body}>
                <ProfileCard name="Tran Gia Hoang" phoneNumber="123-456-789" imageSource={{ uri: 'https://avatars.githubusercontent.com/u/66261053?v=4' }} />

                <Text style={styles.title}>Tài Khoản</Text>
                {listAccountUtilities.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.list} onPress={() => navigation.navigate(item.navigator)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name={item.icon} size={24} color={themeColors.primary} />
                            <Text style={{ marginLeft: 10 }}>{item.label}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

                <Text style={styles.title}>Thông tin chung</Text>
                {listGeneralUtilities.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.list}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name={item.icon} size={24} color={themeColors.primary} />
                            <Text style={{ marginLeft: 10 }}>{item.label}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.footer}>
                {/* <BottomNavigationBar /> */}
                </View>
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
        backgroundColor: themeColors.linear,
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