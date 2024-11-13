import { useRef, ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './FileUploader.module.scss';
import { FileUploaderProps } from './FileUploader.types';

const FileUploader = ({
  children,
  acceptFiles,
  onFileUpload,
  multiple = true,
  className,
  ...rest
}: FileUploaderProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const acceptedFiles = acceptFiles?.join(',');

  const loadFile = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const files: File[] = Array.from(target?.files || []);
    if (files) {
      onFileUpload(files);
    }
  };

  const upload = () => {
    fileRef?.current?.click();
  };

  return (
    <div
      {...rest}
      className={classNames(styles.container, className)}
    >
      <div onClick={upload}>{children}</div>
      <input
        accept={acceptedFiles}
        id='fileUpload'
        multiple={multiple}
        ref={fileRef}
        type='file'
        onChange={loadFile}
      />
    </div>
  );
};

export default FileUploader;
