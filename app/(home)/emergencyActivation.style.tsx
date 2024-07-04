import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
    },

    header_logoImg: {
        height: 100,
        width: 250,
    },

    mainContent: {},

    mainContent_timerArea: {
        paddingLeft: 15,
        paddingRight: 15,
        gap: 50,
        alignItems: 'center',
    },

    mainContent_timerArea_timerLabel: {
        fontSize: 25,
        textAlign: 'center',
    },

    mainContent_timerArea_timerOutline: {
        height: 300,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainContent_timerArea_timer: {
        fontSize: 50,
    },

    mainContent_timerArea_confirmBtn: {
        backgroundColor: '#0187CB',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        borderRadius: 50,
    },

    mainContent_timerArea_confirmBtnText: {
        color: '#fff',
    }
})