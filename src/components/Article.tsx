import React, { useRef, useEffect, useState } from "react";
import { title } from "process";
import "./Article.css";

interface Props {
	title: string;
	description: string;
	imageUrl: string;
}

const Article: React.FC<Props> = ({ title, description, imageUrl }) => {
	const h2 = useRef<HTMLHeadingElement>(null);
	const measureDiv = useRef<HTMLDivElement>(null);
	const [showDots, setShowDots] = useState(false);
	const [showAll, setShowAll] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		if (h2.current!.offsetHeight < h2.current!.scrollHeight) {
			setShowDots(true);
		}
	}, []);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		const handleResize = () => setWindowWidth(window.innerWidth);

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		// fatelo con angular questo, voglio vedere :)
		if (!showAll) {
			h2.current!.style.height = windowWidth > 700 ? "calc(2 * 1.5em)" : "0";
		} else {
			h2.current!.style.height = measureDiv.current!.clientHeight + "px";
		}
	}, [showAll, windowWidth]);

	return (
		<article
			className="Article"
			onClick={() => {
				setShowAll(!showAll);
			}}
			style={showDots ? { cursor: "pointer" } : {}}
		>
			<img src={imageUrl} alt="error" />
			<div className="text">
				<h1>{title}</h1>
				<h2 ref={h2} className={showAll ? "expanded" : ""}>
					<div ref={measureDiv} className="text">
						{description}
					</div>
				</h2>
				<span className="dots">{showDots && !showAll ? "..." : ""}</span>
			</div>
		</article>
	);
};

export default Article;
