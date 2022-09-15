import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Layout } from './shared/Layout';
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { Dropdown } from "./shared/Dropdown";
import { Ecolors, Text } from "./shared/Text";
import { Break } from "./shared/Break";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { userContext, UserContextProvider } from "./shared/context/userContext";
import { usePosts } from "./hooks/usePosts";

function AppCompunent() {
    const [token] = useToken();
    
    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <Layout>
                    <Header />
                    <Content>
                        <CardsList/>
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
            </UserContextProvider>    
        </tokenContext.Provider>
    )
}

export const App = hot(() => <AppCompunent />);