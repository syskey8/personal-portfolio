import type {NextConfig} from 'next';
import webpack from 'webpack';

const nextConfig: NextConfig = {
	typescript: { ignoreBuildErrors: true },
	eslint: { ignoreDuringBuilds: true },
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'placehold.co', port: '', pathname: '/**' }],
	},
	webpack: (config, { isServer }) => {
		// Ignore optional deps that trigger “Module not found” warnings
		config.plugins.push(
			new webpack.IgnorePlugin({ resourceRegExp: /^@opentelemetry\/exporter-jaeger$/ }),
			new webpack.IgnorePlugin({ resourceRegExp: /^@genkit-ai\/firebase$/ })
		);

		// Don’t bundle handlebars (avoids require.extensions parsing); load at runtime if ever needed
		if (isServer) {
			config.externals = config.externals || [];
			config.externals.push('handlebars');
		}

		// Silence the specific Handlebars warning message
		config.ignoreWarnings = [
			...(config.ignoreWarnings || []),
			(w) => typeof w.message === 'string' && w.message.includes('require.extensions is not supported by webpack'),
		];

		return config;
	},
};

export default nextConfig;