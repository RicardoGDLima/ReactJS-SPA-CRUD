import { ReactNode } from "react";

import { Header } from "../Header";

import { Container } from "./styles";

interface MainProps {
    children: ReactNode
}

export function Main({ children }: MainProps) {

    return (
        <>
            <Header icon="home" title="Início" subtitle="Projeto CRUD" />

            <Container>
                <div className="content container-fluid">
                    <div className="p-3 mt-3">
                        {children}
                    </div>
                </div>
            </Container>
        </>
    )
}