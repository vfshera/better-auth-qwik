import type { Session, User } from "better-auth";

export type SharedMapType = {
  user: User | null;
  session: Session | null;
  isAuthenticated: boolean;
};
