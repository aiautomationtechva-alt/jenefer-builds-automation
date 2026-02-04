export function MagicalCursor() {
  return (
    <style>{`
      * {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='black' stroke='white' stroke-width='1' d='M5.5 3.21V20.8l5.71-5.71h8.29L5.5 3.21z'/%3E%3C/svg%3E") 4 4, auto !important;
      }
      
      a, button, [role="button"] {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='black' stroke='white' stroke-width='1' d='M11 1v4h2V1h-2zm6.65 1.93l-1.41 1.41 2.83 2.83 1.41-1.41-2.83-2.83zM12 6a6 6 0 00-6 6c0 2.22 1.21 4.16 3 5.2V19a1 1 0 001 1h4a1 1 0 001-1v-1.8c1.79-1.04 3-2.98 3-5.2a6 6 0 00-6-6zm-2 15v1a1 1 0 001 1h2a1 1 0 001-1v-1h-4zM1 11v2h4v-2H1zm18 0v2h4v-2h-4zM4.93 4.93l2.83 2.83 1.41-1.41-2.83-2.83-1.41 1.41z'/%3E%3C/svg%3E") 16 4, pointer !important;
      }
      
      input, textarea, select {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='black' stroke='white' stroke-width='1' d='M12 2v8H8l4 4 4-4h-4V2h-0z M7 14h2v8H7v-8zm8 0h2v8h-2v-8z'/%3E%3C/svg%3E") 16 16, text !important;
      }
    `}</style>
  );
}
