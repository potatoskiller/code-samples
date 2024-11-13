import { TooltipPropsTypes } from './Tooltip.types.ts';
import { OverlayArrow } from 'react-aria-components';
import * as Styles from './Tooltip.styles';

const Tooltip = (props: TooltipPropsTypes) => {
  return (
    <Styles.Container
      delay={props.openDelay || 200}
      closeDelay={props.closeDelay || 400}
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
    >
      <Styles.Trigger>{props.children}</Styles.Trigger>
      <Styles.Tooltip className={props.className} placement={props.placement} shouldFlip>
        {props.withArrow && (
          <OverlayArrow>
            <svg width={8} height={8} viewBox="0 0 8 8">
              <path d="M0 0 L4 4 L8 0" />
            </svg>
          </OverlayArrow>
        )}
        {props.content}
      </Styles.Tooltip>
    </Styles.Container>
  );
};

export default Tooltip;
