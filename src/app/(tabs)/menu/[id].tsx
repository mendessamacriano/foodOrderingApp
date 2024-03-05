import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ProductDetails = () => {
	const product = useLocalSearchParams();
	return (
		<View>
			<Text>ProductDetails {product.id}</Text>
		</View>
	);
};

export default ProductDetails;
