import styled from '@emotion/styled';

export const ContactFormSection = styled.div`
  margin-bottom: 44px;
  font-size: 20px;

  h1 {
    margin-left: 40px;
    margin-bottom: 28px;
    color: #eac645;
  }

  p {
    margin-bottom: 12px;
    font-weight: 700;
  }

  input {
    max-width: 280px;
    width: 100%;
    height: 36px;

    font-size: inherit;
  }

  button {
    display: block;
    width: 220px;
    height: 40px;

    font-size: inherit;

    :hover {
      background-color: #361da5;
    }

    :active {
      background-color: #1f0592;
    }
  }
`;
