echo 'Component Name: '

read component

COMPONENTSRC="src/components/common/"
SOURCEPATH="src/"
STORYPATH="stories/"
STYLEPATH+="styles/"
TESTPATH+="tests/"

echo "\e[33m$SOURCEPATH$component\e[0m"

# Check to see if file already exists
if [ -f $SOURCEPATH$component.jsx ]
then
    # file already exists
    echo "\e[33m$component already exists, exiting.\e[0m"
    exit 1
else
    echo '\n \e[33mCreating -> '$component ' files\e[0m'

    sh ./stalls-scripts/create_src.sh $component $COMPONENTSRC$SOURCEPATH

    sh ./stalls-scripts/create_story.sh $component $COMPONENTSRC$STORYPATH

    sh ./stalls-scripts/create_styles.sh $component $COMPONENTSRC$STYLEPATH

    sh ./stalls-scripts/create_tests.sh $component $COMPONENTSRC$TESTPATH

    echo "\n directory now looks like this after file creation: \e[33m

    ├── src/
        ├── components/
            ├── common/
                ├── src/
                    ├── $component.jsx
                    ├── ...other components
                ├── stories/
                    ├── $component.stories.js
                    ├── ...other component stories
                ├── styles/
                    ├── $component.scss
                    ├── ...other components styles
                ├── tests/
                    ├── $component.spec.js
                    ├── ...other components tests\e[0m"

    git status

    git add "$SOURCEPATH$component.jsx" "$STORYPATH$component.stories.js" "$STYLEPATH$component.scss" "$TESTPATH$component.spec.js"

    git status

fi