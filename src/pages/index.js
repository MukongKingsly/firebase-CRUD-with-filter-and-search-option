import React from 'react';

const About = React.lazy(() => import("./About"));
const AddEdit = React.lazy(() => import("./AddEdit"));
const Home = React.lazy(() => import("./Home"));
const View = React.lazy(() => import("./View"));
const Search = React.lazy(() => import("./Search"));

export {
    About, AddEdit, Home, View, Search
}