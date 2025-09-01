"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import styles from "../login/Login.module.css";
import { redirect } from "next/navigation";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleRegister = async () => {
        setErrorMsg("");
        setSuccessMsg("");
        if (password !== confirmPassword) {
            setErrorMsg("Las contraseñas no coinciden");
            return;
        }
        setIsLoading(true);
        try {
            // En supabase-js v2 la firma correcta para este cliente es pasar todo en un solo objeto
            const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
            if (error) {
                console.error("Error registering:", error.message);
                setErrorMsg(error.message);
            } else {
                console.log("Registration started", data);
                setSuccessMsg("Registro iniciado. Revisa tu correo para confirmar.");
                redirect('/login');
            }
        } catch (err) {
            console.error(err);
            setErrorMsg("Error realizando el registro");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.decoratives}>
                <div className={styles.dec1}></div>
                <div className={styles.dec2}></div>
                <div className={styles.dec3}></div>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.logoBox}>
                        <svg className={styles.logoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h1 className={styles.title}>Financial Sage</h1>
                    <p className={styles.subtitle}>Crea tu cuenta</p>
                </div>

                <div className={styles.card}>
                    <form className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <input type="text" name="name" placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} required />
                            <div className={styles.inputIcon}>
                                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        </div>

                        <div className={styles.inputWrapper}>
                            <input type="email" name="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} required />
                            <div className={styles.inputIcon}>
                                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                        </div>

                        <div className={styles.inputWrapper}>
                            <input type="password" name="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} required />
                        </div>

                        <div className={styles.inputWrapper}>
                            <input type="password" name="confirmPassword" placeholder="Confirmar contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={styles.input} required />
                        </div>

                        <button type="button" disabled={isLoading} className={styles.submit} onClick={handleRegister}>
                            {isLoading ? 'Procesando...' : 'Crear Cuenta'}
                        </button>
                        {errorMsg && <p style={{ color: 'var(--color-error)', marginTop: 12 }}>{errorMsg}</p>}
                        {successMsg && <p style={{ color: 'var(--color-success)', marginTop: 12 }}>{successMsg}</p>}

                        <div className={styles.separatorRow}>
                            <div className={styles.separator}></div>
                            <span className={styles.orText}>o</span>
                            <div className={styles.separator}></div>
                        </div>

                        <p>
                            ¿Ya tienes cuenta?{' '}
                            <Link href="/login" className={styles.linkButton}>Inicia sesión</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
