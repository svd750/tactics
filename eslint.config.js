import markdownlintPlugin from "eslint-plugin-markdownlint";
import markdownlintParser from "eslint-plugin-markdownlint/parser.js";

export default [
  {
    files: ['**/*md'],
    plugins: {
      'markdownlint': markdownlintPlugin
    },
    languageOptions: {
      parser: markdownlintParser
    },
    rules: {
      ...markdownlintPlugin.configs.recommended.rules,
      "markdownlint/md013":  ["error", {
        "line_length": 120
      }],
      "markdownlint/md033": ["error", {
        "allowed_elements": ['br', 'hr', 'video']
      }],
    }
  }
]
