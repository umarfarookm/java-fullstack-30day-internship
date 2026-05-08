# Day 07 – Git Workflows

## Learning Objectives

- Create and manage Git branches for feature development
- Open and review Pull Requests on GitHub
- Resolve merge conflicts confidently
- Follow a team-based Git workflow (feature branch model)
- Write meaningful commit messages and PR descriptions

## Topics Covered

- Branching: `git branch`, `git checkout -b`, `git switch`
- Merging: `git merge`, fast-forward vs three-way merge
- Rebasing: `git rebase` basics and when to use it
- Pull Requests: creating, reviewing, requesting changes, approving
- Merge conflicts: identifying, resolving, and committing
- Git log and history: `git log --oneline --graph`
- `.gitignore` patterns and best practices
- Conventional commit messages
- Branch naming conventions (feature/, bugfix/, hotfix/)

## Hands-On Task

Practice a complete feature branch workflow:
1. Create a new branch `feature/add-about-page` from `main`
2. Make several commits on the feature branch
3. Meanwhile, make a conflicting change on `main` (edit the same file)
4. Attempt to merge the feature branch — resolve the conflict
5. Push the feature branch and create a Pull Request on GitHub
6. Review the PR (add comments), then merge it
7. Delete the feature branch after merge

## Practice / Homework

Set up branch protection rules on your GitHub repository:
- Require at least 1 review before merging
- Require status checks to pass
- Document the rules in your repo's CONTRIBUTING.md

## References

- [Git Branching – Official Docs](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
- [GitHub Pull Requests](https://docs.github.com/en/pull-requests)
- [Conventional Commits](https://www.conventionalcommits.org/)
