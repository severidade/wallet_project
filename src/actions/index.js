// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENT = 'SAVE_CURRENT';

export const actionSaveEmail = (payload) => (
  {
    type: SAVE_EMAIL, payload,
  }
);

export const actionSaveCurrent = (payload) => (
  {
    type: SAVE_CURRENT, payload,
  }
);
