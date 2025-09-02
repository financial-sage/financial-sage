import React, { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helpText, className = '', ...props }, ref) => {
    const baseStyles = 'w-full rounded-md border px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const stateStyles = error
      ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`${baseStyles} ${stateStyles} ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'error-message' : helpText ? 'help-text' : undefined}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600" id="error-message" role="alert">
            {error}
          </p>
        )}
        {helpText && !error && (
          <p className="text-sm text-gray-500" id="help-text">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
