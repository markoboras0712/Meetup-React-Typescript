import { SerializedError } from '@reduxjs/toolkit';

export interface UserData {
  id?: string | undefined | null;
  displayName: string | null | undefined;
  email: string | null | undefined;
  authenticated?: boolean;
  refreshToken?: string | null;
  error?: SerializedError;
  userPhoto?: string | null | undefined;
  loading?: boolean | undefined;
}
