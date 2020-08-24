import React from "react";
import { title } from "process";
import "./Article.css";

interface Props {
	title: string;
	description: string;
	imageUrl: string;
}

const Article: React.FC<Props> = ({ title, description, imageUrl }) => {
	return (
		<article className="Article">
			<div className="text">
				<h1>{title}</h1>
				<h2>{description}</h2>
			</div>
			<img src={imageUrl} alt="error" />
		</article>
	);
};

export default Article;
