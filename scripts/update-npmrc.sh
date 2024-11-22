#! /bin/sh
#
# This script goes trhough all the subdirs in `ts` and creates 
# a `.npmrc` file with 
# ```
# registry=https://registry.npmjs.org/
# //registry.npmjs.org/:_authToken=${NPM_TOKEN}
# ```

# Check if the NPM_TOKEN is set
if [ -z "$NPM_TOKEN" ]; then
    echo "NPM_TOKEN is not set"
    exit 1
fi

for dir in $(ls -d ts/*); do
    # Skip if not a dir
    if [ ! -d $dir ]; then
        continue
    fi
    echo "registry=https://registry.npmjs.org/" > $dir/.npmrc
    echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> $dir/.npmrc
done