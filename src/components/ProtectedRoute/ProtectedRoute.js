import React from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ logedId, children }) {
  return <>{logedId ? children : <Navigate to="/" />}</>;
}
