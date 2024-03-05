import { Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

import { Product } from "../types";
import Colors from "@/src/constants/Colors";
import { Link } from "expo-router";

export const defaultImage =
	"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
	product: Product;
};
const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<Link href={`/${product.id}`} asChild>
			<Pressable style={styles.container}>
				<Image
					source={{ uri: product.image || defaultImage }}
					style={styles.image}
					resizeMode="contain"
				/>
				<Text style={styles.title}>{product.name}</Text>
				<Text style={styles.price}>${product.price}</Text>
			</Pressable>
		</Link>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 20,
		flex: 1,
		maxWidth: "50%",
	},
	title: {
		fontSize: 14,
		fontWeight: "600",
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
