interface iInput {
  value: string;
  onChange: (args: any) => void;
}

export interface FieldInputProps {
  input: iInput;
  meta: {
    touched: boolean;
    error: string;
  };
  type: string;
  placeholder?: string;
  as?: any;
  plaintext?: boolean;
  children?: JSX.Element | null;
}