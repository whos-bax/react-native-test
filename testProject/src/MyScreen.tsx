import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";

const MyScreen = () :React.JSX.Element => {
    const [status, setStatus] = useState("");
    useEffect(() => {
        setStatus("Hello")
        // const timer = setTimeout(() => {
        //     setStatus("Bye")
        // }, 1000);
        // return () => clearTimeout(timer);
    }, []);
    return (
        <View>
            <Text testID={"MyText"}>{status}</Text>
        </View>
    )
}
export default MyScreen
