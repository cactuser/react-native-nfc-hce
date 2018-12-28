export function supportNFC(): { support: boolean; enabled: boolean };
export function startListenNFCStatus(): (
  callback: (status: object) => void
) => void;
export function stopListenNFCStatus(): (
  callback: (status: object) => void
) => void;
export function setCardContent(content: string): void;
export function setAppState(content: string): void;
export function setNfcDefaultTicket(content: string): void;
