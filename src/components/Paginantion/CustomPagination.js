import { Pagination } from "@mui/material";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({ setPages, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    console.log(page);
    setPages(page);
    window.scroll(0, 0);
  };
  
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
          sx={{
            "& button": {
              width: "50px",
              color: "white",
            },
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
