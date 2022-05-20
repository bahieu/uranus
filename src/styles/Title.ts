import styled from 'styled-components';

type StyleTitle = {
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  marginTop?: string;
  marginBottom?: string;
};
interface StyleDescription extends StyleTitle {}

export const Title = styled.h1<StyleTitle>`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '34px')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '34px')};
  color: ${({ theme, color }) => (!color ? theme.text : color)};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : '0.67em'};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0.67em')};
`;

export const Description = styled.p<StyleDescription>`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '34px')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '34px')};
  color: ${({ theme, color }) => (!color ? theme.desTextColor : color)};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : '0.67em'};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0.67em')};
`;
