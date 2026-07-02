import React, { useEffect, useState } from "react";
import "./Popup.css";
import { PopupEnum } from "../../enums/common-enums";

const Dialog: React.FC<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}> = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="dialog-overlay" onClick={() => onOpenChange(false)}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const Button: React.FC<{
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}> = ({ className, onClick, children }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  useEffect(() => {
    const hasOpened = localStorage.getItem(PopupEnum.PopupShown);

    if (!hasOpened) {
      fetch(
        "https://docs.google.com/document/d/e/2PACX-1vQBDy5XvY6XeXrLdG8AXXUUMpqkwfQDOgxXlByOj3H11zElOwlYg9jOJTPuqxmRcPAN8AZfych5m6Hh/pub?output=html"
      )
        .then((res) => res.text())
        .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const contents = doc.querySelector("#contents");

          if (contents) {
            setHtmlContent(contents.innerHTML);
            setIsOpen(true);
            localStorage.setItem(PopupEnum.PopupShown, "true");
          }
        })
        .catch((err) => {
          console.error("Error loading Google Doc:", err);
        });
    }
  }, []);

  return (
    <div className="popup-container">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="popup-dialog">
          {htmlContent && (
            <div
              className="popup-doc-html"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          )}
          <div className="popup-footer">
            <Button
              className="popup-close-button"
              onClick={() => setIsOpen(false)}
            >
              Schließen
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Popup;
