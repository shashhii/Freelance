"use client";

import React from 'react';

export const FireplaceIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M10.6 16.95q.325.275.688.388t.712.112q.725 0 1.313-.462T14 15.65q.125-1.175-.725-1.737T12 12.45q-.125.35-.125.65t.075.65q.075.425.175.8t.025.8q-.125.45-.55.925t-1 .675M2 22V2h20v20zm2-2h2v-2h2.25q-.575-.725-.913-1.525T7 14.95q0-1.15.25-2.162t.913-1.963T10 8.938T13 7q-.275 1.1.238 2.338T15.15 11.6q.825.6 1.338 1.413T17 15q0 .875-.275 1.613T16 18h2v2h2V4H4z"/>
  </svg>
);

export const BroomIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="m19.36 2.72l1.42 1.42l-5.72 5.71c1.07 1.54 1.22 3.39.32 4.59L9.06 8.12c1.2-.9 3.05-.75 4.59.32zM5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l4.88-2.09l7.44 7.44l-2.09 4.88c-2.24-.34-4.64-1.57-6.65-3.58"/>
  </svg>
);

export const RepairIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M9 8h6V6H9zM2 20v-5h4v1h2v-1h8v1h2v-1h4v5zm0-6v-4q0-.825.588-1.412T4 8h3V6q0-.825.588-1.412T9 4h6q.825 0 1.413.588T17 6v2h3q.825 0 1.413.588T22 10v4h-4v-2h-2v2H8v-2H6v2z"/>
  </svg>
);

export const InspectionIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className={className}>
    <path fill="currentColor" d="m15 17.18l-2.59-2.59L11 16l4 4l7-7l-1.41-1.41z"/><path fill="currentColor" d="M30 15h-2.05A12.01 12.01 0 0 0 17 4.05V2h-2v2.05A12.01 12.01 0 0 0 4.05 15H2v2h2.05A12.01 12.01 0 0 0 15 27.95V30h2v-2.05A12.01 12.01 0 0 0 27.95 17H30ZM17 25.95V23h-2v2.95A10.02 10.02 0 0 1 6.05 17H9v-2H6.05A10.02 10.02 0 0 1 15 6.05V9h2V6.05A10.02 10.02 0 0 1 25.95 15H23v2h2.949A10.02 10.02 0 0 1 17 25.95"/>
  </svg>
);

export const SafetyIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m3.538-6.462Q17 14.075 17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17t3.538-1.463M13.65 14.35L11.5 12.2V9h1v2.8l1.85 1.85z"/>
  </svg>
);
