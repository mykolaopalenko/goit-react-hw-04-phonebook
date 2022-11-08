import styled from '@emotion/styled';

export const ContactFormStyle = styled.form`
  margin-top: 40px;
  margin-bottom: 30px;
  max-width: 350px;
`;
export const ContantLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const ContactInput = styled.input`
  padding: 5px 10px;
  margin-top: 10px;
`;

export const ContactBtn = styled.button`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;
