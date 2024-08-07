import { defineConfig } from '@vscode/test-cli';

const isCI = process.env['CI'] !== undefined;

export default defineConfig({
	files: 'out/test/**/*.test.js',
	coverage: {
		reporter: ['mocha-junit-reporter', 'spec'],
		output: './coverage',
	},
	mocha: {
		reporter: isCI ? 'mocha-junit-reporter' : 'spec',
		reporterOptions: {
			mochaFile: './junit.xml',
		}
	}
});
