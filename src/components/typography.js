import styled from 'styled-components/native';

export const StyledText = styled.Text`
  color: red;
  font-size: ${props => (props.fontSize ? props.fontSize : props.theme.fontSize)};
  text-align: ${props => (props.textAlign ? props.textAlign : 'auto')};
`;
