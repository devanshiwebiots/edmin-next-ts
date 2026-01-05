import SvgIcon from "@/CommonComponent/SVG/SvgIcon";
import { useState, useRef, useEffect } from "react";

const ChatDropMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="dropdown-form position-relative" ref={ref}>
      <button
        type="button"
        className="dropdown-toggle dropdown-form p-0 border-0 bg-transparent"
        onClick={() => setOpen((v) => !v)}
      >
        <i className="icon-plus" />
      </button>

      {open && (
        <div className="dropdown-menu chat-icon show">
          <div className="mb-2 dropdown-item">
            <SvgIcon className="feather" iconId="camera" />
          </div>
          <div className="dropdown-item">
            <SvgIcon className="feather" iconId="paperclip" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatDropMenu;
