import styled from 'styled-components';
import { Button as AriaButton } from 'react-aria-components';

export const Button = styled(AriaButton)`
  outline: none;
  cursor: pointer;
  background: none;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: ${(props) => props.theme.radius.md};
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;

  .loader-overlay {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .loader {
      width: 20px;
      height: 20px;
    }
  }

  &:has(.loader-overlay) {
    cursor: default;
    pointer-events: none;

    .inner {
      visibility: hidden;
    }
  }

  .inner {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &.size-sm {
      padding: 8px 12px;
      gap: 6px;
      font-size: 14px;
      line-height: 20px;
    }

    &.size-md {
      padding: 10px 14px;
      gap: 6px;
      font-size: 14px;
      line-height: 20px;
    }

    &.size-lg {
      padding: 10px 16px;
      gap: 8px;
      font-size: 16px;
      line-height: 24px;
    }

    &.size-xl {
      padding: 12px 18px;
      gap: 8px;
      font-size: 16px;
      line-height: 24px;
    }

    &.size-2xl {
      padding: 16px 22px;
      gap: 12px;
      font-size: 18px;
      line-height: 28px;

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }

  .icon {
    width: 20px;
    height: 20px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &:disabled .icon svg path {
    stroke: ${({ theme }) => theme.colors.gray400};
  }

  &.variant-contained {
    border: 1px solid;

    &.color-primary {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.brand600};
      border-color: ${({ theme }) => theme.colors.brand600};
      box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);

      &:hover {
        border-color: ${({ theme }) => theme.colors.brand700};
        background-color: ${({ theme }) => theme.colors.brand700};
      }

      &:focus-within {
        box-shadow:
          0 0 0 4px rgba(158, 119, 237, 0.24),
          0 1px 2px 0 rgba(16, 24, 40, 0.05);
      }

      &:disabled {
        cursor: default;
        background-color: ${({ theme }) => theme.colors.gray100};
        border-color: ${({ theme }) => theme.colors.gray200};
        color: ${({ theme }) => theme.colors.gray400};
      }
    }

    &.color-secondary {
      color: ${({ theme }) => theme.colors.gray700};
      background-color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors.gray300};
      box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray50};
      }

      &:focus-within {
        box-shadow:
          0 0 0 4px rgba(152, 162, 179, 0.14),
          0 1px 2px 0 rgba(16, 24, 40, 0.05);
      }

      &:disabled {
        cursor: default;
        background-color: ${({ theme }) => theme.colors.white};
        border-color: ${({ theme }) => theme.colors.gray200};
        color: ${({ theme }) => theme.colors.gray400};
      }
    }

    &.color-destructive {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.error600};
      border-color: ${({ theme }) => theme.colors.error600};
      box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);

      &:hover {
        border-color: ${({ theme }) => theme.colors.error700};
        background-color: ${({ theme }) => theme.colors.error700};
      }

      &:focus-within {
        box-shadow:
          0 0 0 4px rgba(240, 68, 56, 0.24),
          0 1px 2px 0 rgba(16, 24, 40, 0.05);
      }

      &:disabled {
        cursor: default;
        background-color: ${({ theme }) => theme.colors.gray100};
        border-color: ${({ theme }) => theme.colors.gray200};
        color: ${({ theme }) => theme.colors.gray400};
      }
    }
  }

  &.variant-text {
    border: none;
    &.color-primary {
      color: ${({ theme }) => theme.colors.brand700};

      &:hover {
        background-color: ${({ theme }) => theme.colors.brand50};
        color: ${({ theme }) => theme.colors.brand800};
      }

      &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.gray400};
        background-color: transparent;
      }
    }

    &.color-secondary {
      color: ${({ theme }) => theme.colors.gray600};
      &:hover {
        color: ${({ theme }) => theme.colors.gray700};
        background-color: ${({ theme }) => theme.colors.gray50};
      }
      &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.gray400};
        background-color: transparent;
      }
    }

    &.color-destructive {
      color: ${({ theme }) => theme.colors.error700};
      &:hover {
        background-color: ${({ theme }) => theme.colors.error50};
        color: ${({ theme }) => theme.colors.error800};
      }
      &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.gray400};
        background-color: transparent;
      }
    }
  }

  &.variant-link {
    border: none;
    padding: 0;
    &.color-primary {
      color: ${({ theme }) => theme.colors.brand700};

      &:hover {
        color: ${({ theme }) => theme.colors.brand800};
      }

      &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.gray400};
        background-color: transparent;
      }
    }

    &.color-secondary {
      color: ${({ theme }) => theme.colors.gray600};
      &:hover {
        color: ${({ theme }) => theme.colors.gray700};
      }

      &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.gray400};
        background-color: transparent;
      }
    }

    &.color-destructive {
      color: ${({ theme }) => theme.colors.error700};
      &:hover {
        color: ${({ theme }) => theme.colors.error800};
      }

      &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.gray400};
        background-color: transparent;
      }
    }
  }

  &.variant-outlined {
    border: 1px solid;

    &.color-primary {
      border-color: ${({ theme }) => theme.colors.brand300};
      background: ${({ theme }) => theme.colors.brand50};
      color: ${({ theme }) => theme.colors.brand700};

      &:hover {
        color: ${({ theme }) => theme.colors.brand800};
        background: ${({ theme }) => theme.colors.brand100};
      }

      &:focus-within {
        box-shadow:
          0 0 0 4px rgba(158, 119, 237, 0.24),
          0 1px 2px 0 rgba(16, 24, 40, 0.05);
      }

      &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.gray400};
        border-color: ${({ theme }) => theme.colors.gray200};
        background-color: ${({ theme }) => theme.colors.white};
      }
    }

    &.color-secondary {
      color: ${({ theme }) => theme.colors.gray600};
      border-color: ${({ theme }) => theme.colors.gray300};
      background: ${({ theme }) => theme.colors.white};

      &:hover {
        color: ${({ theme }) => theme.colors.gray800};
        background: ${({ theme }) => theme.colors.gray50};
      }

      &:focus-within {
        box-shadow:
          0 0 0 4px rgba(158, 119, 237, 0.24),
          0 1px 2px 0 rgba(16, 24, 40, 0.05);
      }

      &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.gray400};
        border-color: ${({ theme }) => theme.colors.gray200};
        background-color: ${({ theme }) => theme.colors.white};
      }
    }

    &.color-destructive {
      color: ${({ theme }) => theme.colors.error700};
      border-color: ${({ theme }) => theme.colors.error300};
      background: ${({ theme }) => theme.colors.white};

      &:hover {
        color: ${({ theme }) => theme.colors.error800};
        background: ${({ theme }) => theme.colors.error50};
      }

      &:focus-within {
        box-shadow:
          0 0 0 4px rgba(240, 68, 56, 0.24),
          0 1px 2px 0 rgba(16, 24, 40, 0.05);
      }

      &:disabled {
        cursor: default;
        color: ${({ theme }) => theme.colors.gray400};
        border-color: ${({ theme }) => theme.colors.gray200};
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
