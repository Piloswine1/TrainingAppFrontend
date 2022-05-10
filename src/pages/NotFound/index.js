import { Grid, Container, Typography } from "@mui/material";

export function NotFound() {
  
    return (
      <Container maxWidth="sm" >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              404
            </Typography>
            <Typography variant="h3" gutterBottom>
              Page not found.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }