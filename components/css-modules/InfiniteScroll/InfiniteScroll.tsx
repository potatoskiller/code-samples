import { Children, MutableRefObject, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { LoadingTypes } from '@commonTypes/types';
import Loader from '@ui/Loader/Loader';
import { TextInfo } from '@ui/Typography/Typography';
import styles from './InfiniteScroll.module.scss';
import {
  InfiniteScrollProps,
  ScrollBehaviorTypes,
} from './InfiniteScroll.types';

const InfiniteScroll = (props: InfiniteScrollProps) => {
  const {
    children,
    loadMore,
    lastElementId,
    firstElementId,
    emptyMessage,
    loading,
    direction = 'start',
    loadingMessage,
    dataLength,
    className,
    ...rest
  } = props;
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [prevScrollPosition, setPrevScrollPosition] = useState<number>();
  const showMoreLoading = loading === LoadingTypes.pending;
  const showEmptyMessage = !dataLength && emptyMessage;

  const scrollToBottomPosition = (behavior: ScrollBehaviorTypes) => {
    if (containerRef.current) {
      const top: number = containerRef.current.scrollHeight;
      containerRef.current.scrollTo({
        behavior: behavior || 'auto',
        top: top,
      });
    }
  };

  const scrollToPreviousPosition = (behavior: ScrollBehaviorTypes) => {
    if (containerRef.current && prevScrollPosition) {
      const currentScroll =
        containerRef.current.scrollHeight - prevScrollPosition;
      containerRef.current.scrollTo({
        top: currentScroll,
        behavior: behavior || 'auto',
      });
    }
  };

  const onScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const scrollPositionIsTop = scrollTop === 0;
    const scrollPositionIsBottom = scrollHeight - scrollTop === clientHeight;

    if (direction === 'start' && scrollPositionIsTop && !showMoreLoading) {
      setPrevScrollPosition(scrollHeight);
      loadMore();
    }

    if (direction === 'end' && scrollPositionIsBottom && !showMoreLoading) {
      loadMore();
    }
  };

  useEffect(() => {
    if (direction === 'start') {
      scrollToPreviousPosition('auto');
    }
  }, [firstElementId]);

  useEffect(() => {
    if (direction === 'start') {
      scrollToBottomPosition('auto');
    }
  }, [lastElementId]);

  return (
    <div
      {...rest}
      className={
        classNames(styles.container, className, {
          [styles.startDirection]: direction === 'start',
          [styles.endDirection]: direction === 'end',
        })
      }
      ref={containerRef}
      onScroll={onScroll}
    >
      <Loader
        className={styles.loader}
        loadingMessage={loadingMessage}
        visible={showMoreLoading && direction === 'start'}
      />

      {Children?.map(children, (child) => child)}

      <Loader
        className={styles.loader}
        loadingMessage={loadingMessage}
        visible={showMoreLoading && direction === 'end'}
      />

      {
        showEmptyMessage ? (
          <div className={styles.emptyMessage}>
            <TextInfo>{emptyMessage}</TextInfo>
          </div>
        ) : null
      }
    </div>
  );
};

InfiniteScroll.displayName = 'InfiniteScroll';
export default InfiniteScroll;
