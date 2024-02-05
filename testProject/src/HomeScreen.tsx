import React, {useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";

const HomeScreen = (): React.JSX.Element => {
    const [status, setStatus] = useState("");
    return <View style={styles.viewStyle}>
        <Text testID={"HomeText"}>{status}</Text>
        <Button testID={"HomeButton"} onPress={() => setStatus("Button Pressed")} title={`Status Button`}/>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "pink"
    }
})
export default HomeScreen;
