COMPONENT=$1
COMPONENTPATH=$2$COMPONENT

functional_component () {
echo "import React from 'react';
import PropTypes from 'prop-types';
import '../styles/$COMPONENT.css';

const $COMPONENT = (props) => {

    // NOTE: To use state in a functional component, use React Hooks API
    // FIRST: replace the ''import React'' line with...
    // import React, { useState } from ''react'';

    // THEN: uncomment the next line:
    // const [ state, setState ] = useState('');

    // NOTE: for more information on how to use React Hooks, see the documentation
    // https://reactjs.org/docs/hooks-intro.html

    console.log('$COMPONENT -> props', props);

    return (
        <div className=\"$COMPONENT\">$COMPONENT</div>
    );
};

$COMPONENT.propTypes = {
    /**
     * The classname to apply to the root node
     */
    classname: PropTypes.string.isRequired,
};

$COMPONENT.defaultProps = {
    className: '',
};

export default $COMPONENT;" > $COMPONENTPATH'.jsx'
}


class_component () {
    echo "import React from 'react';
import PropTypes from 'prop-types';
import '../styles/$COMPONENT.css';

class $COMPONENT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //  ...put state here
        }
    }

    render() {
        return <div className=\"$COMPONENT\">$COMPONENT</div>;
    }
}

$COMPONENT.propTypes = {
    /**
     * The classname to apply to the root node
     */
    classname: PropTypes.string.isRequired,
};

$COMPONENT.defaultProps = {
    className: '',
};

export default $COMPONENT;" > $COMPONENTPATH'.jsx'
}

while true; do

    echo 'Is this a "functional" or "class" component: '
    read componentType

	case $componentType in

		"functional") functional_component
            break	;;

		"class") class_component
            break   ;;

		*)	echo "\e[33mYou must specify either functional or class\e[0m"
			continue	;;

	esac

done

echo "\e[33m$COMPONENT created in location $COMPONENTPATH\e[0m"
