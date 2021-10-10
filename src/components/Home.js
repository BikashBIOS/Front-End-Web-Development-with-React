//Solving the 2nd issue

import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from "react-animation-components";

import { Loading } from "./LoadingComponent"; //loading the main component
import { baseUrl } from "../shared/baseUrl"; //loading the base component

function About(props) {
    function RenderLeader({ leader }) {
      return (
        <Media className="mt-5">  //make the table of 5
          <Media left className="mr-5">  //make the rows of 5
            <Media object src={baseUrl + leader.image} alt={leader.name} />
          </Media>
          <Media body>
            <Media heading>{leader.name}</Media>
            <p>{leader.designation}</p>
            {leader.description}
          </Media>
        </Media>
      );
    }
}
