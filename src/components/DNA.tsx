import styled, { keyframes } from "styled-components";

const planeMoveTop = keyframes`
  from {
    background-position: 0px -100px, 0px 0px;
  }
  to {
    background-position: 0px 0px, 100px 0px;
  }
`;

const planeMoveBot = keyframes`
  from {
    background-position: 0px 0px, 0px 0px;
  }
  to {
    background-position: 0px -100px, 100px 0px;
  }
`;

const Body = styled.div`
  height: 100%;
  overflow: hidden;
  background: linear-gradient(
    #6084d7 25%,
    #a2cef4 50%,
    #a2cef4 50%,
    #6084d7 100%
  );
  z-index: 1;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 auto;
  perspective: 360px;
  perspective-origin: 50% 50%;

  @media (max-height: 350px) {
    perspective: 210px;
  }
`;

const Plane = styled.div<{ isTop: boolean }>`
  width: 200%;
  height: 130%;
  position: absolute;
  left: -50%;
  background-image: linear-gradient(#3c096c 2px, transparent 1px),
    linear-gradient(to right, #3c096c 2px, transparent 1px);
  background-size: 100px 100px, 100px 100px;
  background-position: -1px -1px, -1px -1px;
  transform: ${({ isTop }) => (isTop ? "rotateX(85deg)" : "rotateX(-85deg)")};
  animation: ${({ isTop }) => (isTop ? planeMoveTop : planeMoveBot)} 2s infinite linear;
  ${({ isTop }) => (isTop ? "bottom: -30%;" : "top: -30%;")}
`;

const Background = () => {
  return (
    <Body>
      <Wrap>
        <Plane isTop={true} />
        <Plane isTop={false} />
      </Wrap>
    </Body>
  );
};

export default Background;
