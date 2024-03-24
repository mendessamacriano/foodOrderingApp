import ProductListItem from "@/src/components/ProductListItem";
import React from "react";

import products from "@/src/data/products";
import { FlatList } from "react-native";
import { Stack } from "expo-router";
export default function MenuScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Menu" }} />
			<FlatList
				data={products}
				renderItem={({ item }) => <ProductListItem product={item} />}
				numColumns={2}
				contentContainerStyle={{ gap: 10, padding: 10 }}
				columnWrapperStyle={{ gap: 10 }}
			/>
		</>
	);
}
