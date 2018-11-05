import styled, { css } from 'styled-components/native';

export const Page = styled.View`
  display: flex;
  flex: 1;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : props.theme.pageBackgroundColor};
`;

export const Flex = styled.View`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: salmon;
  flex: 1;

  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `};

  ${props =>
    props.row &&
    css`
      flex-direction: row;
    `};
`;

export const ButtonGroup = styled.View`
  display: flex;
  align-items: center;
`;
