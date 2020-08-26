import React, { useState } from "react";
import logoOutline from "../assets/logo_outline.svg";
import logoText from "../assets/logo_text.svg";
import "./HeaderBar.css";
import { link } from "fs";

interface Props {}

const links: {
	title: string;
	link?: string;
	child?: { children: { title: string; link: string }[] };
}[] = [
	{ title: "Home" },
	{
		title: "Settings",
		child: {
			children: [
				{ title: "heyla", link: "" },
				{ title: "heyla", link: "" },
				{ title: "heyla", link: "" },
				{ title: "heyla", link: "" },
			],
		},
	},
];

const isLastOpen = (array: { [index: number]: boolean }) => {
	if (array[links.length - 1] === undefined) {
		return false;
	}

	return array[links.length - 1];
};

const HeaderBar: React.FC<Props> = () => {
	const [linksState, setLinksState] = useState(() => {
		const obj: { [index: number]: boolean } = {};

		links.forEach((link, index) => {
			if (link.child !== undefined) {
				obj[index] = false;
			}
		});

		return obj;
	});
	const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<div className="header-main">
			<div className="header-container">
				<div className="header-logo-container">
					<img className="header-logo-img" src={logoOutline} alt="error" />
					<img className="header-logo-text" src={logoText} alt="error" />
				</div>
				{links.map((link, index) => {
					if (link.child === undefined) {
						return <span>{link.title}</span>;
					} else {
						return (
							<>
								<span
									className="header-spaced"
									onClick={() =>
										setLinksState({
											...linksState,
											[index]: !linksState[index],
										})
									}
								>
									{link.title}
								</span>
								<span
									onClick={() =>
										setLinksState({
											...linksState,
											[index]: !linksState[index],
										})
									}
									className={linksState[index] ? "header-rotated" : ""}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 0 24 24"
										width="24"
									>
										<path d="M0 0h24v24H0z" fill="none" />
										<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
									</svg>
								</span>
							</>
						);
					}
				})}
				<span
					className="header-hamburger"
					onClick={() => setMobileMenu(!mobileMenu)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 0 24 24"
						width="24"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
					</svg>
				</span>
			</div>
			<div
				className={
					"header-mobile-menu" +
					(mobileMenu ? "" : " header-mobile-hidden") +
					(isLastOpen(linksState) ? "" : " header-mobile-lastopen")
				}
			>
				{links.map((link, index) => {
					if (link.child === undefined) {
						return (
							<>
								{" "}
								<span className="header-spaced">Home</span>
								<br />
								<br />
							</>
						);
					} else {
						return (
							<>
								<span
									className="header-spaced"
									onClick={() =>
										setLinksState({
											...linksState,
											[index]: !linksState[index],
										})
									}
								>
									Area riservata
								</span>
								<span
									onClick={() =>
										setLinksState({
											...linksState,
											[index]: !linksState[index],
										})
									}
									className={linksState[index] ? "header-rotated" : ""}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 0 24 24"
										width="24"
									>
										<path d="M0 0h24v24H0z" fill="none" />
										<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
									</svg>
								</span>
								<div
									className={
										linksState[index] ? "header-menu" : "header-hidden"
									}
								>
									{link.child.children.map((child) => (
										<>
											<p>
												<span>{child.title}</span>
											</p>
										</>
									))}
								</div>
							</>
						);
					}
				})}
			</div>
		</div>
	);
};

export default HeaderBar;
