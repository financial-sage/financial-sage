"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './TransactionModal.module.scss';
import { TransactionForm, type TransactionFormData } from '../transactions/TransactionForm';
import { addTransaction } from '@/lib/supabase/transactions';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useTransactionContext } from '@/contexts/TransactionContext';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerButtonRef: React.RefObject<HTMLButtonElement | null>;
}

export default function TransactionModal({ isOpen, onClose, triggerButtonRef }: TransactionModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { addTransactionToList } = useTransactionContext();

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      // Wait for animation to complete before removing from DOM
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (formData: TransactionFormData) => {
    setIsLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/auth/login');
        return;
      }

      const result = await addTransaction(session.user.id, {
        amount: formData.amount,
        description: formData.description,
        category_id: formData.category_id,
        type: formData.type,
        date: formData.date,
        status: formData.status,
      });

      if (result.error) {
        throw result.error;
      }

      // Si la transacción se creó exitosamente, agregarla a la lista local
      if (result.data && !Array.isArray(result.data)) {
        addTransactionToList(result.data);
      }

      // Close modal on success
      onClose();
      
    } catch (error: any) {
      console.error('Error al agregar la transacción:', error.message);
      alert('Error al agregar la transacción: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getModalPosition = () => {
    if (!triggerButtonRef.current) return {};
    
    const buttonRect = triggerButtonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    
    return {
      '--trigger-x': `${buttonCenterX}px`,
      '--trigger-y': `${buttonCenterY}px`,
      '--trigger-width': `${buttonRect.width}px`,
      '--trigger-height': `${buttonRect.height}px`,
    } as React.CSSProperties;
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`${styles.modalOverlay} ${isVisible ? styles.visible : ''}`}
      onClick={handleBackdropClick}
      style={getModalPosition()}
    >
      <div 
        ref={modalRef}
        className={`${styles.modalContainer} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Nueva Transacción</h2>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m6 6 12 12M6 18 18 6"/>
            </svg>
          </button>
        </div>
        
        <div className={styles.modalContent}>
          {isLoading && (
            <div className="loading-overlay">
              <div className="spinner"></div>
            </div>
          )}
          <TransactionForm 
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
