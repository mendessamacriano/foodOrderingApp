import { View, Text, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

const CartScreen = () => {
	const { items } = useContext(CartContext);

	return (
		<View>
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
			<Text>CartScreen</Text>
		</View>
	);
};

export default CartScreen;
