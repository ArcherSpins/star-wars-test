import { Grid } from "@mui/material";
import React from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch() {
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <Grid container justifyContent="center" className="content">
                <h1>We got some mistake, we apologize</h1>
            </Grid>
        );
      }
  
      return (
        <div>{this.props.children}</div>
      ); 
    }
}