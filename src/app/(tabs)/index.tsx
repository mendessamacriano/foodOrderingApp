import { StyleSheet, Image } from "react-native";

import products from "@/src/data/products";
import { Text, View } from "@/src/components/Themed";
import Colors from "@/src/constants/Colors";

const product = products[0];
export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Image source={{ uri: product.image }} style={styles.image} />
			<Text style={styles.title}>{product.name}</Text>
			<Text style={styles.price}>${product.price}</Text>
		</View>
	);
}

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
