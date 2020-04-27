import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const MeowText = styled.text`
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: normal;
    font-size: 25px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.15px;
`;

const Image = styled.img`
    width: 100%;
    margin-bottom: 16px;
    max-width: 500px;
`;

const AnswerButton = styled.button`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 16px;
    border-radius: 4px;
    outline: none;
    font-family: IBM Plex Mono;
    font-size: 14px;
    font-weight: bold;
    font-color: #333333;
    text-align: center;
    background-color: #f2f2f2;
    :active {
        background-color: #b2b2b2;
    }
`;

class AppPage extends React.Component {
    constructor() {
        super();

        this.state = {
            url: null,
        };
    }

    componentDidMount() {
        this.fetchCat();
    }

    fetchCat = () => {
        fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => this.setState({ url: data.file }));
    }

    onButtonClick = () => {
        this.fetchCat();
    }

    render() {
        const { url } = this.state;

        return (
            <Wrapper>
                <MeowText>
                    {"Meow"}
                </MeowText>

                <Image src={`${url}`} />

                <AnswerButton key={`MeowBtn`}
                              onClick={() => this.onButtonClick()}>
                    {"Meow"}
                </AnswerButton>
            </Wrapper>
        );
    }
}

export default AppPage;
