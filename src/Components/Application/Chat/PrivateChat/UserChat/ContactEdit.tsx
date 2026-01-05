import { DropClassTypes } from "@/Type/Application/Chat/ChatType";
import { useState } from "react";

const ContactEdit: React.FC<DropClassTypes> = ({ dropClass }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`contact-edit ${dropClass}`} style={{ position: "relative" }}>
      <button
        type="button"
        className="btn btn-link p-0"
        onClick={() => setOpen((v) => !v)}
      >
        <i className="fa fa-bars" />
      </button>

      {open && (
        <ul
          className="dropdown-menu show"
          style={{ right: 0, left: "auto" }}
        >
          <li className="dropdown-item">View details</li>
          <li className="dropdown-item">Send messages</li>
          <li className="dropdown-item">Add to favorites</li>
        </ul>
      )}
    </div>
  );
};

export default ContactEdit;
