import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
     background: ${({ disabled }) => disabled ? '#999999' : '#D73530'};
     border-radius: 48px;
     padding: 14px 24px;
     justify-content: center;
     align-items: center;
`;