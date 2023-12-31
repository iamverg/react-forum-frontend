import React from "react";
import { Link } from "react-router-dom";
import Page from "./Page";

export default function NotFound() {
  return (
    <Page title="Not found">
      <div className="text-center">
        <h2>Ohh we cannot find that page.</h2>
        <p className="lead text-muted">
          You can always visit the <Link to="/">homepage</Link> to get a fresh
          start
        </p>
      </div>
    </Page>
  );
}
