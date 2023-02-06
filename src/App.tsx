import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header/Header";
import { Layout } from './shared/Layout/Layout';
import { Content } from "./shared/Content/Content";
import { Ecolors, Text } from "./shared/Text/Text";
import { Break } from "./shared/Break/Break";
import { useToken } from "./hooks/useToken";
import { applyMiddleware, createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "../store/reducer";
import { setTokenThunk } from "../store/token/actions";
import { CardsListContainer } from "./shared/CardsListContainer/CardsListContainer";
import { postRequestAsync } from "../store/list/actions";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Modal } from "./shared/Post/Modal";
import { NotFound } from "./shared/NotFound/NotFound";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
))

function AppComponent() {
    const [mounted, setMounted] = useState(false);
    const [token] = useToken();

    const location = global.location?.pathname + ""
    const path = location.includes("auth") ? "/auth" : "/";
    console.log(path);

    const dispatch = useDispatch();
    useEffect(() => {
        setMounted(true);
    }, [])
    useEffect(() => {
        dispatch(setTokenThunk(token));
        dispatch(postRequestAsync());
    }, [token]);

    return (
        <Layout>
            {mounted && <BrowserRouter>
                <Header />
                <Content>
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/posts" element={<CardsListContainer />} />
                        <Route path="/posts/:id" element={<Modal />} />
                        <Route path="/" element={<Navigate replace to="/posts" />} />
                        <Route path="/auth" element={<Navigate replace to="/posts" />} />
                    </Routes>
                </Content>
            </BrowserRouter>}
        </Layout >
    )
}

export const App = hot(() => {
    return (
        <Provider store={store}>
            <AppComponent />
        </Provider>
    )
});