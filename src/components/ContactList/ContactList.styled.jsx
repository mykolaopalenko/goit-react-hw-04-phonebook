import styled from '@emotion/styled';

export const PhoneTitle = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin-top: 30px;
`;

export const Item = styled.li`
  display: flex;
  max-width: 350px;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ContactName = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactStyle = styled.p`
  margin-left: 10px;
`;

export const DeleteBtn = styled.button`
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  margin-right: 0px;

  &:hover {
    background-color: gray;
  }
`;

export const Message = styled.p`
  margin-top: 10px;
  font-size: 30px;
`;