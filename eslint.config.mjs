import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...stylistic.configs['recommended-flat'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			}
        },
        plugins: {
			'@stylistic': stylistic,
		},
        rules: {
            '@stylistic/indent': ['error', 'tab'],
			'@stylistic/linebreak-style': ['error', 'unix'],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/array-bracket-spacing': ['error', 'never'],
			'@stylistic/arrow-spacing': 'error',
			'@stylistic/block-spacing': 'error',
			'@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
			'@stylistic/computed-property-spacing': ['error', 'never'],
			'@stylistic/function-call-spacing': ['error', 'never'],
			'@stylistic/key-spacing': ['error', { 'beforeColon': false }],
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/object-curly-spacing': ['error', 'always'],
            'sort-imports': ['error', {
				ignoreCase: false,
				ignoreDeclarationSort: false,
				'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
				'allowSeparatedGroups': true
			}],
        }
    }
)
