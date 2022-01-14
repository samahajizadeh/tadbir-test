import react, { Fragment } from "react";
//material ui
import { Grid, Skeleton, Box } from "@mui/material";

function SkeletonContactInfo_Confirm() {
  return (
    <Fragment>
      <Grid
        container
        sx={{ mb: 1 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Skeleton animation="wave" sx={{ mb: 2 ,ml:2}} />
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
          height={35}
          sx={{ mt: 3, ml: 1 }}
        />
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

export default SkeletonContactInfo_Confirm;
