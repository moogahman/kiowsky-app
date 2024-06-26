# Working with git

## Branching
Trunk based strategy is what is used mostly across the entire system. Developers use shortlived side branches for individual commits which should be merge to main ASAP once approved.

## Branch Naming
Good branch names following a pattern/standard is important for a quick grasp of the work being executed and facilitates future searches in your git branch history.

A branch must follow this convention:
```zsh
<category>/short-description
```

The main branch categories are (can be expanded upon if neccessary):
```zsh
1. feature - for any new feature
2. bugfix - for any bug fix
3. upkeep - maintenance updates such as TS types, config, openapi spec update. Improvements that aren't related to a feature.
4. hotfix (only when checking out from a tag or main branch)
5. refactor - an improvement to existing code without altering functionality
6. spike - any discovery spike work. Low chance of getting merged to main branch.
7. poc - any proof of concept work.
```

## Commit Messages
Should always be included, be short and descriptive. 

## Pull requests
Should be opened immediately. Due to the commit based branch stratergy, messages are usually not required. 

## Reviewers
At least 1 dev lead must review the pull request before merge to main is available.


