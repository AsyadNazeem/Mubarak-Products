import React, { useState } from 'react';
import App from "../App";



function withTheme() {
    document.body.classList.toggle("dark-theme");
}

export default withTheme;
