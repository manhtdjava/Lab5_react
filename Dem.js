import React from "react";
import { Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { tang, giam } from "./store";

const Dem = () => {
    const cont = useSelector(state => state.dem);
    const dispath = useDispatch();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Dem: {cont}</Text>
            <Button title="Tang" onPress={() => dispath(tang)} />
            <Button title="Giam" onPress={() => dispath(giam)} />

        </View>
    )
}
export default Dem