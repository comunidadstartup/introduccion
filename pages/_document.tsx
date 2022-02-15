import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<meta property="og:title" content="Comunidad Startup" />
				<meta
					property="og:description"
					content="Una startup para startups y por el desarrollo de las startups. Nuestro éxito es el éxito de vuestra startup"
				/>
				<meta property="og:image:width" content="1280" />
				<meta property="og:image:height" content="640" />
				<meta property="og:image" content="/media/ogimage.png" />
				<meta property="og:type" content="website" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
