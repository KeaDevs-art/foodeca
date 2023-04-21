import React, { useContext } from "react";

import Navigation from "../../infrastructure/navigation";
import Welcome from "../welcome/screens/welcome/welcome.component";
import { StartContext } from "../../context/start/start.context";

export const GetStarted = () => {
    const { start } = useContext(StartContext);

    return start ? <Navigation /> : <Welcome />
};
