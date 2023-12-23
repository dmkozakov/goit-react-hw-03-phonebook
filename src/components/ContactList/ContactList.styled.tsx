import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 480px;
    width: 100%;
    gap: 12px;
  }

  button {
    width: 88px;
    height: 32px;
    font-size: 16px;

    :hover {
      background-color: #361da5;
    }

    :active {
      background-color: #1f0592;
    }
  }
`;
