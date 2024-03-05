import ProductListItem from "@/src/components/ProductListItem";
import React from "react";

import products from "@/src/data/products";
import { FlatList } from "react-native";
export default function MenuScreen() {
	return (
		<>
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
