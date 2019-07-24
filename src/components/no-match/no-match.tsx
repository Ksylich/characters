import React from "react";

import "./no-match";

interface IProps {
    location: any;
}

const NoMatch: React.FC<IProps> = ({ location }) => {
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
};

export default NoMatch;
