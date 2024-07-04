import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight

export const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#000',
        flex: 1,
        backgroundColor: '#C5168C',
    },
    
    header: {
        flex: 1,
        paddingTop: statusBarHeight,
        paddingRight: 25,
        paddingLeft: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    header_userArea: {
        marginTop: 10,
    },
    
    header_appStatusArea: {
        marginTop: 10,
    },

    mainContent: {
        backgroundColor: '#fff',
        flex: 4,
        paddingRight: 25,
        paddingLeft: 25,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 100,
    },

    mainContent_showUsername: {
        fontSize: 25,
    },

    mainContent_emergencyBtn: {
        height: 200,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainContent_emergencyBtn_vector: {
        width: 250,
    },

    mainContent_emergencyBtn_text: {
        color: '#fff',
        fontSize: 20,
    },
    
    footer: {
        backgroundColor: '#fff',
        padding: 25,
        gap: 20,
    },

    footer_logoImgArea: {
        width: '100%',
        paddingBottom: 20,
        borderBottomWidth: 1,
    },

    footer_logoImgArea_logoImg: {
        height: 50,
        width: 100,
        alignSelf: 'center'
    },

    footer_contactInformationsArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    footer_contactInformationsArea_supportPhone: {},

    footer_contactInformationsArea_websiteURL: {},
})