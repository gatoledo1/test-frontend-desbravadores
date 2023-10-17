import React from "react";
import { ArrowLeft } from "phosphor-react";
import { Button } from "react-bootstrap";
import "../style/input.css";
import { useNavigate } from "react-router-dom";

export const GoTo = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)} className="mt-4 d-flex justify-content-center rounded-3 background-300 border-0">
      <ArrowLeft size={36} />
    </Button>
  );
};
