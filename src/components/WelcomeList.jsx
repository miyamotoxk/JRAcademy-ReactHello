import React from 'react'

const WelcomeList = (props) => {
    return (
        props.welcomeList.map((element, index) => {
            return <p key={index}>{`My name is ${element.author}, ${element.content}`}</p>;
        })
    );
}

export default WelcomeList;