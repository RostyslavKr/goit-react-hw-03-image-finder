import styled from '@emotion/styled';

export const ImageLoader = styled.span`
  border: 2px solid #fff;
  width: 100px;
  height: 100px;
  background: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 30%;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    border: 50px solid;
    border-color: transparent #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
