import { HTMLAttributes, ReactNode } from 'react';

export type FileUploaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  multiple?: boolean;
  acceptFiles?: string[];
  onFileUpload: (files: File[]) => void;
};
