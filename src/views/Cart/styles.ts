import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    linear: {
        flex: 1
    },
    safeArea: {
        flex: 1
    },
    container: {
        marginBottom: 15
    },
    flatlistContainer: {
        marginHorizontal: 30
    },
    billingSection: {
        marginTop: 20
    },
    pricedata: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginVertical: 3
    },
    billingText: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 27,
        color: '#757575'
    },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: '#C0C0C0',
        marginVertical: 5
    },
    billingTotalText: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 27,
        color: '#3C3C3C'
    }
});

export default styles;