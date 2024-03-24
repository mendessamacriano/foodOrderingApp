import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import products from "@/src/data/products";
import { defaultImage } from "@/src/components/ProductListItem";
import Button from "@/src/components/Button";

const sizes = ["S", "M", "L", "XL"];
const ProductDetails = () => {
	// receive the pressed on product through its ID when coming to screen
	const { id } = useLocalSearchParams();

	const [selectedSize, setSelectedSize] = useState("M");
	// find product that maches the id we receive in our list of pruducts
	const product = products.find((p) => p.id.toString() === id);

	// find if product exists in our list of products
	if (!product) {
		return <Text>Product not found</Text>;
	}

	const addToCart = () => {
		console.warn("Product added to cart", "size : ", selectedSize);
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: product.name || defaultImage }} />

			<Image
				source={{ uri: product.image }}
				style={styles.image}
				resizeMode="contain"
			/>
			<Text style={styles.selectSizeText}>Select size</Text>
			<View style={styles.sizesContainer}>
				{sizes.map((size) => (
					<Pressable
						onPress={() => {
							setSelectedSize(size);
						}}
						style={[
							styles.sizeBox,
							{
								backgroundColor:
									selectedSize === size
										? "gainsboro"
										: "white",
							},
						]}
						key={size}
					>
						<Text
							style={[
								styles.size,
								{
									color:
										selectedSize === size
											? "black"
											: "grey",
								},
							]}
						>
							{size}
						</Text>
					</Pressable>
				))}
			</View>

			<Text style={styles.price}>${product.price}</Text>
			<Button text="Add to cart" onPress={addToCart} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		padding: 10,
	},
	image: {
		width: "100%",
		height: 400,
	},
	selectSizeText: {
		color: "black",
		fontWeight: "bold",
		fontSize: 20,
	},
	price: {
		fontSize: 18,
		fontWeight: "bold",
		color: "black",
		marginTop: "auto",
	},
	sizesContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginVertical: 10,
	},
	sizeBox: {
		width: 50,
		aspectRatio: 1,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
	},
	size: {
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default ProductDetails;
