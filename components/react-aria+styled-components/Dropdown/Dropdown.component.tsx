import * as Styles from './Dropdown.styles';
import { useRef } from 'react';
import { DropdownProps } from './Dropdown.types';

const Dropdown = ({
  children,
  trigger,
  placement = 'bottom',
  offset,
  crossOffset,
  isOpen,
  onVisibilityChange,
}: DropdownProps) => {
  const triggerRef = useRef(null);

  return (
    <>
      <Styles.DropdownTrigger
        onClick={() => onVisibilityChange?.(!isOpen)}
        className="dropdown-trigger"
        ref={triggerRef}
        aria-expanded={isOpen}
      >
        {trigger}
      </Styles.DropdownTrigger>

      <Styles.Content
        className="dropdown-content"
        isOpen={isOpen}
        placement={placement}
        offset={offset}
        crossOffset={crossOffset}
        triggerRef={triggerRef}
        onOpenChange={onVisibilityChange}
      >
        {children}
      </Styles.Content>
    </>
  );
};

export default Dropdown;
