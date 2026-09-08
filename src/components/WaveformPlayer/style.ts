import styled from "styled-components";

export const Waveform = styled.div`
  position: relative;
  min-height: 76px;
  width: 100%;
`;

export const Wave = styled.div<{ $isVisible: boolean }>`
  position: relative;
  z-index: 1;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 180ms ease;
`;

export const StaticWave = styled.div`
  position: absolute;
  inset: 13px 0;
  opacity: 0.55;
  background: repeating-linear-gradient(
    90deg,
    ${({ theme }) => theme.colors["blue-500"]} 0 2px,
    transparent 2px 6px
  );
  clip-path: polygon(
    0 48%, 4% 31%, 8% 61%, 12% 20%, 16% 72%, 20% 37%, 24% 58%,
    28% 12%, 32% 78%, 36% 43%, 40% 66%, 44% 25%, 48% 71%, 52% 34%,
    56% 62%, 60% 18%, 64% 76%, 68% 39%, 72% 60%, 76% 29%, 80% 70%,
    84% 42%, 88% 64%, 92% 32%, 96% 55%, 100% 45%, 100% 55%, 0 55%
  );
`;
