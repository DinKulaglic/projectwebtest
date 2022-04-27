import React from "react";

import { Paper, TextField } from "@mui/material";
class SearchField extends React.Component {
  state = {
    searchTerm: " ",
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault.Default();
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "20px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Explore..."
            onChange={this.handleChange}
          ></TextField>
        </form>
      </Paper>
    );
  }
}

export default SearchField;
