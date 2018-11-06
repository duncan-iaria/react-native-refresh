import React from 'react';
import styled from 'styled-components/native';
import { StyledText } from './';

export const StyledButton = ({ title, onPress, testID }) => {
  return (
    <ButtonWrapper onPress={onPress} testID={testID}>
      <ButtonText textAlign="center">{title}</ButtonText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 6px;

  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : props.theme.buttonColor};
  width: ${props => (props.width ? props.width : props.theme.buttonWidth)};
  height: ${props => (props.height ? props.height : props.theme.buttonHeight)};
`;

const ButtonText = styled.Text`
  color: ${props => (props.buttonTextColor ? props.buttonTextColor : props.theme.buttonTextColor)};
  font-size: ${props => (props.fontSize ? props.fontSize : props.theme.fontSize)};
  text-align: ${props => (props.textAlign ? props.textAlign : 'auto')};
`;
