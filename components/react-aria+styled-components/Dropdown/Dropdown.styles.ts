import styled from 'styled-components';
import { Popover } from 'react-aria-components';

export const DropdownTrigger = styled.div``;

export const Content = styled(Popover)`
  border-radius: ${(props) => props.theme.radius.md};
  border: 1px solid ${(props) => props.theme.colors.gray200};
  background: ${(props) => props.theme.colors.white};
  box-shadow:
    0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
`;
