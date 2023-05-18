# HOW SET-UP GITHUB RELEASE AND CHANGELOG

Setting up GitHub release and changelog workflows involves configuring GitHub Actions and utilizing automated tools to streamline the release and changelog generation process. Here's a step-by-step guide to help you with the setup:

## Automate versioning and changelog generation

- To automate versioning and changelog generation, you can integrate your workflows with tools like semantic versioning or conventional commit standards. This allows automatic version incrementation based on commit messages and generating changelogs accordingly.

### Installation & Initialization using Conventional Commit standards

```
    yarn add release-it @release-it/conventional-changelog @commitlint/config-conventional @commitlint/cli --include=dev
```

```
    yarn add husky --include=dev
```

```
./node_modules/husky/lib/bin.js install
```

```
touch .husky/commit-msg && chmod a+x .husky/commit-msg
```
* Create a new file to commit and push
```
git add . && git commit -m "feat: <subject> <message>
```
