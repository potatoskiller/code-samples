import styled from 'styled-components';
import { Button, TooltipTrigger, Tooltip as AriaTooltip } from 'react-aria-components';

export const Container = styled(TooltipTrigger)``;

export const Trigger = styled(Button)`
  appearance: none;
  background-color: inherit;
  border: inherit;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Tooltip = styled(AriaTooltip)`
  appearance: none;
  border: inherit;
  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 16px;
  border-radius: ${(props) => props.theme.radius.md};
  font-size: 12px;
  max-width: 292px;
  transform: translate3d(0, 0, 0);
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);

  &[data-placement='top'] {
    margin-bottom: 8px;
    --origin: translateY(4px);
  }

  &[data-placement='bottom'] {
    margin-top: 8px;
    --origin: translateY(-4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement='right'] {
    margin-left: 8px;
    --origin: translateX(-4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(90deg);
    }
  }

  &[data-placement='left'] {
    margin-right: 8px;
    --origin: translateX(4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  & .react-aria-OverlayArrow svg {
    display: block;
    fill: var(--highlight-background);
  }

  &[data-entering] {
    animation: slide 200ms;
  }

  &[data-exiting] {
    animation: slide 200ms reverse ease-in;
  }

  @keyframes slide {
    from {
      transform: var(--origin);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
