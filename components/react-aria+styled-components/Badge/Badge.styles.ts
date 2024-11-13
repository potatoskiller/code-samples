import styled from 'styled-components';

export const Badge = styled.div`
  border: 1px solid;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.radius.xl2};
  font-weight: 500;

  &.size-sm {
    font-size: 10px;
    line-height: 14px;
    padding: 2px 6px;
  }

  &.size-md {
    font-size: 14px;
    line-height: 20px;
    padding: 2px 10px;
  }

  &.size-lg {
    font-size: 14px;
    line-height: 20px;
    padding: 4px 12px;
  }

  &.color-primary {
    color: ${({ theme }) => theme.colors.brand700};
    border-color: ${({ theme }) => theme.colors.brand200};
    background: ${({ theme }) => theme.colors.brand50};
  }

  &.color-secondary {
    color: ${({ theme }) => theme.colors.gray700};
    border-color: ${({ theme }) => theme.colors.gray200};
    background: ${({ theme }) => theme.colors.gray50};
  }

  &.color-error {
    color: ${({ theme }) => theme.colors.error700};
    border-color: ${({ theme }) => theme.colors.error200};
    background: ${({ theme }) => theme.colors.error50};
  }

  &.color-warning {
    color: ${({ theme }) => theme.colors.warning700};
    border-color: ${({ theme }) => theme.colors.warning200};
    background: ${({ theme }) => theme.colors.warning50};
  }

  &.color-success {
    color: ${({ theme }) => theme.colors.success700};
    border-color: ${({ theme }) => theme.colors.success200};
    background: ${({ theme }) => theme.colors.success50};
  }

  &.color-gray-blue {
    color: ${({ theme }) => theme.colors.grayBlue700};
    border-color: ${({ theme }) => theme.colors.grayBlue200};
    background: ${({ theme }) => theme.colors.grayBlue50};
  }

  &.color-blue-light {
    color: ${({ theme }) => theme.colors.blueLight700};
    border-color: ${({ theme }) => theme.colors.blueLight200};
    background: ${({ theme }) => theme.colors.blueLight50};
  }

  &.color-blue {
    color: ${({ theme }) => theme.colors.blue700};
    border-color: ${({ theme }) => theme.colors.blue200};
    background: ${({ theme }) => theme.colors.blue50};
  }

  &.color-indigo {
    color: ${({ theme }) => theme.colors.indigo700};
    border-color: ${({ theme }) => theme.colors.indigo200};
    background: ${({ theme }) => theme.colors.indigo50};
  }

  &.color-purple {
    color: ${({ theme }) => theme.colors.purple700};
    border-color: ${({ theme }) => theme.colors.purple200};
    background: ${({ theme }) => theme.colors.purple50};
  }

  &.color-pink {
    color: ${({ theme }) => theme.colors.pink700};
    border-color: ${({ theme }) => theme.colors.pink200};
    background: ${({ theme }) => theme.colors.pink50};
  }

  &.color-orange {
    color: ${({ theme }) => theme.colors.orange700};
    border-color: ${({ theme }) => theme.colors.orange200};
    background: ${({ theme }) => theme.colors.orange50};
  }
`;
