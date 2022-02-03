module.exports = {
	reactStrictMode: true,
	distDir: "./build",
	swcMinify: false,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		config.experiments = { topLevelAwait: true, layers: true };
		return config;
	},
};
