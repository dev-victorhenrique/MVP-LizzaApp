import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5168C',
    },
    
    header: {
        flex: 1,
        paddingTop: statusBarHeight,
        paddingRight: 15,
        paddingLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        paddingRight: 15,
        paddingLeft: 15,
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

    modalContent: {
        height: 400,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
    },

    modalContent_warningText: {
        fontSize: 25,
        textAlign: 'center',
    },

    modalContent_modalControlArea: {
        width: '100%',
        gap: 25,
    },

    modalContent_modalControlArea_confirmBtn: {
        width: '100%',
        borderWidth: 1,
        padding: 20,
        borderRadius: 5,
    },

    modalContent_modalControlArea_confirmBtnText: {
        color: '#C5168C',
    },
    
    modalContent_modalControlArea_cancelBtn: {
        backgroundColor: '#C5168C',
        width: '100%',
        padding: 20,
        borderRadius: 5,
    },

    modalContent_modalControlArea_cancelBtnText: {
        color: '#fff',
    }
})