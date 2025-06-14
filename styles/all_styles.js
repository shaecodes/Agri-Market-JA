import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "./constants";

const syles = StyleSheet.create({
    container: {
        width: "100%",
    },

    title:{
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        color: COLORS.primary,
    },

    compare_button:{
        fontFamily: FONT.regular,
        fontSize: SIZES,
        backgroundColor: COLORS.primary,
        color: COLORS.white,

    }

})