import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import RefreshIcon from "@material-ui/icons/Refresh";
import TimerIcon from "@material-ui/icons/Timer";
import { Link } from "react-router-dom";

import "./AddNewKid.css";

export default class Home extends Component {
  render() {
    return (
      <Grid className="AddnNewKidGrid" container spacing={1}>
        <Grid item xs={12}>
          <Paper className="AddNewKid" elevation={3}>
            <Grid item xs={12}>
              <div className="MenuBtns">
                <Button
                  className="MenuBtns"
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<PersonAddIcon />}
                  style={{ marginRight: "5px" }}
                >
                  Save
                </Button>

                <Button
                  className="MenuBtns"
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginRight: "5px" }}
                  startIcon={<RefreshIcon />}
                >
                  Reset
                </Button>

                <Button
                  className="MenuBtns"
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<PhotoCamera />}
                  component={Link}
                  to={"/addnewkid/takephotopage"}
                >
                  Add Picture
                </Button>

                <form className="Timer" noValidate>
                  <TimerIcon
                    id="time"
                    label="Timer"
                    type="time"
                    defaultValue="00:10:00"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </form>
              </div>
              <form className="KidsName" noValidate autoComplete="off">
                <div>
                  <TextField id="standard-basic" label="Add Name" />
                </div>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
