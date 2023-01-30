import React, { useEffect } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header/Header";
import { Layout } from './shared/Layout/Layout';
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList/CardsList";
import { Ecolors, Text } from "./shared/Text/Text";
import { Break } from "./shared/Break/Break";
import { useToken } from "./hooks/useToken";
import { applyMiddleware, createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "../store/reducer";
import { setTokenThunk } from "../store/token/actions";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
))

function AppComponent() {
    const [token] = useToken();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTokenThunk(token));
    }, [token]);

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <br />
                <Text size={20} mobileSize={28} color={Ecolors.orange}>
                    Label1
                </Text>
                <Break size={8} inline />
                <Text size={20} bold>
                    Label1
                </Text>
                <Break size={8} inline />
                <Text size={20} mobileSize={16} color={Ecolors.green}>
                    Label1
                </Text>
            </Content>
        </Layout>
    )
}

export const App = hot(() => (
    <Provider store={store}>
        <AppComponent />
    </Provider>
));