import ProductListItem from "@/src/components/ProductListItem";
import React from "react";

import products from "@/src/data/products";
export default function MenuScreen() {
	return (
		<>
			<ProductListItem product={products[0]} />
			<ProductListItem product={products[1]} />
		</>
	);
}
