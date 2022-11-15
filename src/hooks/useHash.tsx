import { useState, useEffect, useCallback } from "react";

const stripHash = (s: string) => s.replace("#", "");

export const useHash = () => {
	const [hash, setHash] = useState<string>(() =>
		stripHash(window.location.hash)
	);

	const hashChangeHandler = useCallback(() => {
		setHash(stripHash(window.location.hash));
	}, []);

	useEffect(() => {
		window.addEventListener("hashchange", hashChangeHandler);
		return () => {
			window.removeEventListener("hashchange", hashChangeHandler);
		};
	}, [hashChangeHandler]);

	const updateHash = useCallback(
		(newHash) => {
			newHash = stripHash(newHash);
			if (newHash !== hash) window.location.hash = "#" + newHash;
		},
		[hash]
	);

	return [hash, updateHash] as const;
};
