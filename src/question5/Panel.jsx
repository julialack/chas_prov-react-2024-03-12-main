import React, { useState } from "react";


export default function Panel({ children, title, collapsible }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div>
      <h2>{title}</h2>
      {collapsible && (
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "Visa" : "Dölj"}
        </button>
      )}
      {!isCollapsed && children}
    </div>
  );
}

