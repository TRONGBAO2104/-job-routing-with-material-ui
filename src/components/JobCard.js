import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";
import TagList from "./TagList";
// import { useNavigate } from "react-router-dom";

// Modal Box from MUI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 2,
};

function JobCard({ job }) {
  // const navigate = useNavigate();

  const [open, setOpen] = useState(null);
  const handleOpen = (job) => {
    console.log();
    setOpen(job);
    // navigate(`/job/${job.id}`);
  };
  const handleClose = () => {
    setOpen();
  };

  return (
    <Card sx={{ maxWidth: 345, height: 300, position: "relative" }}>
      <CardActionArea sx={{ height: 200 }}>
        <CardContent sx={{ position: "absolute", top: 0 }}>
          <Typography gutterBottom variant="h6" component="div">
            {job.title}
          </Typography>

          <TagList job={job} />

          <Divider variant="middle" sx={{ mb: 1 }} />

          <Typography variant="body2" color="text.secondary">
            {job.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {/* <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => navigate(`/job/${job.id}`)}
        >
          Learn More
        </Button> */}
        <div>
          <Button
            onClick={() => handleOpen(job)}
            variant="contained"
            size="small"
          >
            Learn More
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box
              sx={{
                ...style,
                width: 500,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ mt: 2 }}
              >
                {job.title}
              </Typography>

              <Divider variant="middle" sx={{ mb: 1 }} />

              <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
                {job.description}
              </Typography>

              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mt: 2 }}
              >
                Skills
              </Typography>

              <TagList job={job} />

              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mt: 2 }}
              >
                City: {job.city}
              </Typography>
            </Box>
          </Modal>
        </div>
      </CardActions>
    </Card>
  );
}

export default JobCard;
