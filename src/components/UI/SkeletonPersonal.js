import react, { Fragment } from "react";
//material ui
import { Grid, Skeleton, Box } from "@mui/material";

function SkeletonPersonal() {
  return (
    <Fragment>
      <Grid container sx={{ mb: 1 }}>
        <Grid item xs={12} sm={6}>
          <Skeleton animation="wave" variant="rectangular" height={40} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={40}
            sx={{ ml: 2 }}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 1 }}>
        <Grid item xs={12} sm={12}>
          <Skeleton animation="wave" variant="rectangular" height={40} />
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 1 }}>
        <Grid item xs={12} sm={12}>
          <Skeleton animation="wave" variant="rectangular" height={40} />
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 1 }}>
        <Grid item xs={12} sm={6}>
          <Skeleton animation="wave" variant="rectangular" height={40} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={40}
            sx={{ ml: 2 }}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 1 }}>
        <Grid item xs={12} sm={6}>
          <Skeleton animation="wave" variant="rectangular" height={40} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={40}
            sx={{ ml: 2 }}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={89}
          height={36}
          sx={{ mt: 3, ml: 1 }}
        />
      </Box>
    </Fragment>
  );
}

export default SkeletonPersonal;
