import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helpText, className = '', ...props }, ref) => {
   
    return (
      <div className={styles.webflowStyleInput}>
        <input ref={ref} {...props} aria-invalid={error ? 'true' : 'false'}/>
      </div>
    );
    // return (
    //   <div className="space-y-1">
    //     {label && (
    //       <label className="block text-sm font-medium text-gray-700">
    //         {label} {...props} aria-describedby={error ? 'error-message' : helpText ? 'help-text' : undefined}
    //       </label>
    //     )}
    //     <input
    //       ref={ref}
    //       className={`${baseStyles} ${stateStyles} ${className}`}
    //       aria-invalid={error ? 'true' : 'false'}
    //       aria-describedby={error ? 'error-message' : helpText ? 'help-text' : undefined}
    //       {...props}
    //     />
    //     {error && (
    //       <p className="text-sm text-red-600" id="error-message" role="alert">
    //         {error}
    //       </p>
    //     )}
    //     {helpText && !error && (
    //       <p className="text-sm text-gray-500" id="help-text">
    //         {helpText}
    //       </p>
    //     )}
    //   </div>
    // );
  }
);

Input.displayName = 'Input';

export default Input;
