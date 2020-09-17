import React from 'react';
import {Header} from 'react-native-elements';

const MyHeader = props => {
    return (
        <Header 
            centerComponent={{text: props.title, style: {color: '#000', fontSize: 20, fontWeight: 'bold'}}}
            backgroundColor = "#eaf8fe"
        />
    );
}

export default MyHeader;