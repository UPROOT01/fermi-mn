import React from "react";

interface UsefulLinksProps {}
interface SingleElementProps {}

const SingleElement: React.FC<SingleElementProps> = () => {
	return (
		<div className="SingleElement">
			<div>
				<img src="" alt="error" />
				<div>Moodle</div>
			</div>
		</div>
	);
};

const UsefulLinksPage: React.FC<UsefulLinksProps> = () => {
	return <main></main>;
};

export default UsefulLinksPage;
