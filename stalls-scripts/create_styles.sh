COMPONENT=$1

COMPONENTPATH=$2$COMPONENT

echo "@import \"../../../styles/theme\";

.$COMPONENT {
    /* styles here */
}" > $COMPONENTPATH'.scss'

printf "\e[33m$COMPONENT styles created in location $COMPONENTPATH\e[0m\n"
