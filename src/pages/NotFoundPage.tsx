
import { Link } from 'react-router-dom';
import React from 'react';

type NotFoundProps = {};

const NotFoundPage: React.FC<NotFoundProps> = (props: NotFoundProps) => {

  return (
    <div className="lube-view">
      <h4>404 Page Not Found</h4>
      <br/><br/>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
