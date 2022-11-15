import { useState } from "react";
import { BuildingsPage } from "./pages/BuildingsPage";
import { GoodsPage } from "./pages/GoodsPage";
import { Header } from "./components/Header";
import { useHash } from "./hooks/useHash";
import "./styles.css";

export default function App() {
	const [hash] = useHash();
	const [page, setPage] = useState<string>(hash || "buildings");

	let pageComponent = null;
	switch (page) {
		case "goods":
			pageComponent = <GoodsPage />;
			break;

		case "buildings":
		default:
			pageComponent = <BuildingsPage />;
	}

	return (
		<div className="App">
			<Header onSetPage={setPage} />
			{pageComponent}
		</div>
	);
}
