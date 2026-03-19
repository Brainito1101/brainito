"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Mail, X } from "lucide-react";
import styles from "./auth-modal.module.css";
import { useEffect, useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [email, setEmail] = useState("");

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.leftSection}>
            <h2 className={styles.title}>
              Welcome to <span className={styles.purpleText}>Brainito AI</span>
            </h2>
            <p className={styles.subtext}>
              Track your marketing performance, discover growth opportunities, and generate AI - powered reports instantly.
            </p>
            
            <div className={styles.vectorWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/vectors/signin_vector.svg" 
                alt="Welcome illustration" 
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.dotActive}`} />
              <div className={styles.dot} />
              <div className={styles.dot} style={{ opacity: 0.5 }} />
            </div>
          </div>

          <div className={styles.rightSection}>
            <Dialog.Close asChild>
              <button className={styles.closeButton} aria-label="Close">
                <X size={20} />
              </button>
            </Dialog.Close>

            <h1 className={styles.welcomeTitle}>Welcome</h1>
            <p className={styles.signInText}>Sign in to access your AI Marketing reports</p>

            <div className={styles.form}>
              <div className={styles.inputGroup}>
                <div className={styles.inputLabelWrapper}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <span className={styles.link}>
                    We&apos;ll send you a link to <span className={styles.purpleLink}>sign in</span>
                  </span>
                </div>
                <div className={styles.inputWrapper}>
                  <Mail className={styles.inputIcon} size={22} />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.separator}>
                <div className={styles.line} />
                <span className={styles.separatorText}>Or continue with email</span>
                <div className={styles.line} />
              </div>

              <button className={styles.googleButton}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className={styles.googleIcon} />
                Continue with Google
              </button>

              <button className={styles.primaryButton}>
                Continue with email
              </button>

              <p className={styles.termsText}>
                By continuing, you agree to our <a href="#" className={styles.termsLink}>Terms & Privacy</a>.
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
