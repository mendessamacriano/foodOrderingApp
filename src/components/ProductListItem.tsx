import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import { Product } from "../types";
import Colors from "@/src/constants/Colors";

export const defaultImage =
	"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
	product: Product;
};
const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: product.image || defaultImage }}
				style={styles.image}
			/>
			<Text style={styles.title}>{product.name}</Text>
			<Text style={styles.price}>${product.price}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	price: {
		color: Colors.light.tint,
		fontSize: 16,
		fontWeight: "600",
		marginVertical: 10,
	},
	image: {
		aspectRatio: 1,
		width: "100%",
	},
});

export default ProductListItem;
