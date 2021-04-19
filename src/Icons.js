import React from 'react';
import { faHourglass, faPlus, faChartLine, faChartPie, faEllipsisH, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddMeasurementIcon = () => (
  <span>
    <FontAwesomeIcon icon={faHourglass} size="lg"/>
    <sup><FontAwesomeIcon icon={faPlus} size="sm"/></sup>
  </span>
);

export const ListMeasurementIcon = () => (
    <span>
      <FontAwesomeIcon icon={faChartLine} size="lg"/>
    </span>
);

export const ProgressIcon = () => (
    <span>
      <FontAwesomeIcon icon={faChartPie} size="lg"/>
    </span>
);

export const MoreIcon = () => (
    <span>
      <FontAwesomeIcon icon={faEllipsisH} size="lg"/>
    </span>
);

export const RightIcon = () => (
  <span>
    <FontAwesomeIcon icon={faAngleRight} size="md"/>
  </span>
);
