echo 'Component Name: '
read component

COMPONENTSRC="src/components/common/"
SOURCEPATH="src/"
STORYPATH="stories/"
STYLEPATH+="styles/"
TESTPATH+="tests/"

# Check to see if file already exists
if [ -f $COMPONENTSRC$SOURCEPATH$component.jsx ]
then
    # file already exists
    printf "\e[33m$component already exists, exiting.\e[0m\n"
    exit 1
else
    printf "\e[33mCreating Component -> '$component'... \e[0m\n"

    # Create jsx file
    sh ./stalls-scripts/create_src.sh $component $COMPONENTSRC$SOURCEPATH

    # Create story file
    sh ./stalls-scripts/create_story.sh $component $COMPONENTSRC$STORYPATH

    # Create styles file
    sh ./stalls-scripts/create_styles.sh $component $COMPONENTSRC$STYLEPATH

    # Create test file
    sh ./stalls-scripts/create_tests.sh $component $COMPONENTSRC$TESTPATH

    # Update index file
    node ./stalls-scripts/create-index.js

    printf "\n Directory now looks like this after file creation:

    \e[0m├── \e[33msrc/
        \e[0m├── \e[33mcomponents/
            \e[0m├── \e[33mcommon/
                \e[0m├── \e[33msrc/
                    \e[0m├── \e[33m$component.jsx
                    \e[0m├── \e[33m...other components
                \e[0m├── \e[33mstories/
                    \e[0m├── \e[33m$component.stories.js
                    \e[0m├── \e[33m...other component stories
                \e[0m├── \e[33mstyles/
                    \e[0m├── \e[33m$component.scss
                    \e[0m├── \e[33m...other components styles
                \e[0m├── \e[33mtests/
                    \e[0m├── \e[33m$component.spec.js
                    \e[0m├── \e[33m...other components tests\e[0m\n"

    # git status
    FULLCOMPSRC="$COMPONENTSRC$SOURCEPATH$component.jsx"
    FULLCOMPSTORY="$COMPONENTSRC$STORYPATH$component.stories.js"
    FULLCOMPSTYLES="$COMPONENTSRC$STYLEPATH$component.scss"
    FULLCOMPTEST="$COMPONENTSRC$TESTPATH$component.spec.js"
    UPDATEDINDEX="src/components/common/src/index.js"

    git add $FULLCOMPSRC $FULLCOMPSTORY $FULLCOMPSTYLES $FULLCOMPTEST $UPDATEDINDEX

    git status

fi