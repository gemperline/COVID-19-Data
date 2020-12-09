import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./dataCard.css";

function DataCard({ title, cases, total, active, isRed, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`dataCard ${active && "dataCard--selected"} ${
        isRed && "dataCard--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`dataCard__cases ${!isRed && "dataCard__cases--green"}`}>
          {cases}
        </h2>

        <Typography className="dataCard__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DataCard;
