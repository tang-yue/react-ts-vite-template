module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'style', 'refactor', 'perf', 'test', 'build', 'chore', 'revert']]
    }
}