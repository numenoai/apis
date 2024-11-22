#! /bin/sh
#
# This script goes trhough all the subdirs in `LANG` and runs
# the given command

usage() {
    echo "Run a command in all subdirs of a language directory"
    echo ""
    echo "Usage: $0 LANG COMMAND"
    echo "  LANG: The language directory to run in (--ts, --php...)"
    echo "  COMMAND: The command to run"
    echo ""
    echo "Example: $0 --ts npm install"    
    exit 1
}   

if [ $# -lt 2 ]; then
    usage
fi

LANG=${1/--/}

# Check that LANG matches an existing directory
if [ ! -d $LANG ]; then
    echo "Directory ./$LANG does not exist"
    usage
fi

# Go to all subdirs in LANG and run the command
shift
for dir in $(ls -d $LANG/*); do
    # Skip if not a dir
    if [ ! -d $dir ]; then
        continue
    fi
    echo "**** Running in ./$dir ********************************"
    (cd $dir && $@)
    echo ""
done
