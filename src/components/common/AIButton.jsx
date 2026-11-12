import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';
import './AIButton.css';

const HINT_STORAGE_KEY = 'ai_assistant_hint_seen';
const HINT_SHOW_DELAY_MS = 4000;
const HINT_VISIBLE_DURATION_MS = 10000;

/**
 * Floating AI assistant launcher fixed at the bottom-right corner.
 * Displays an optional one-time session hint bubble and dispatches
 * `window.openAIChat()` or a custom `"ai:open"` event on activation.
 */
export const AIButton = ({ onClick, className = '' }) => {
  const [showHint, setShowHint] = useState(false);
  const showTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  const markHintSeen = useCallback(() => {
    try {
      window.sessionStorage.setItem(HINT_STORAGE_KEY, '1');
    } catch {
      // Ignore storage access errors in restricted browsing contexts
    }
  }, []);

  const clearHintTimers = useCallback(() => {
    if (showTimerRef.current !== null) {
      window.clearTimeout(showTimerRef.current);
      showTimerRef.current = null;
    }
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const dismissHint = useCallback(() => {
    clearHintTimers();
    setShowHint(false);
    markHintSeen();
  }, [clearHintTimers, markHintSeen]);

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = window.sessionStorage.getItem(HINT_STORAGE_KEY) === '1';
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen) {
      return undefined;
    }

    showTimerRef.current = window.setTimeout(() => {
      showTimerRef.current = null;
      markHintSeen();
      setShowHint(true);

      hideTimerRef.current = window.setTimeout(() => {
        hideTimerRef.current = null;
        setShowHint(false);
      }, HINT_VISIBLE_DURATION_MS);
    }, HINT_SHOW_DELAY_MS);

    return clearHintTimers;
  }, [clearHintTimers, markHintSeen]);

  const handleLauncherClick = (event) => {
    dismissHint();

    if (typeof onClick === 'function') {
      onClick(event);
      return;
    }

    if (typeof window !== 'undefined') {
      if (typeof window.openAIChat === 'function') {
        window.openAIChat();
      } else {
        event.currentTarget.dispatchEvent(
          new CustomEvent('ai:open', { bubbles: true, composed: true })
        );
      }
    }
  };

  return (
    <div className={`ai-launcher ${className}`.trim()}>
      {showHint && (
        <div className="ai-bubble" role="status" aria-live="polite">
          <p className="ai-bubble-text">
            Ask me about Akhilesh&apos;s projects, skills or experience.
          </p>
          <button
            type="button"
            className="ai-bubble-close"
            onClick={dismissHint}
            aria-label="Close AI assistant hint"
          >
            <X size={14} aria-hidden="true" />
          </button>
        </div>
      )}

      <button
        type="button"
        className="ai-btn"
        data-ai-open
        data-label="Ask AI"
        aria-label="Open AI assistant"
        onClick={handleLauncherClick}
      >
        <svg
          className="ai-btn-icon"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />
        </svg>

        <span className="ai-sparkle" aria-hidden="true">
          <svg
            className="ai-sparkle-star"
            viewBox="0 0 24 24"
            width="11"
            height="11"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

