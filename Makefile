
SHELL = /bin/bash
.SHELLFLAGS = -o pipefail -c

.PHONY: help
help: ## Print info about all commands
	@echo "Helper Commands:"
	@echo
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "    \033[01;32m%-20s\033[0m %s\n", $$1, $$2}'
	@echo
	@echo "NOTE: dependencies between commands are not automatic. Eg, you must run 'deps' and 'build' first, and after any changes"

.PHONY: deps
deps: 
	@echo "Installing dependencies..."
	@./scripts/run-in-all.sh --ts npm install

.PHONY: build
build:
	@echo "Building all APIS..."
	@./scripts/run-in-all.sh --ts npm run build

.PHONY: publish
publish:
    ## Check we're in a github action
	@if [ -z "${GITHUB_ACTIONS}" ]; then echo "This command is only meant to be run in a Github Action"; exit 1; fi
	@echo "Publishing all APIS..."
	@./scripts/run-in-all.sh --ts npm publish

