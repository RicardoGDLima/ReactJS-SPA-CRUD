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
            <div className="content container-fluid">
                <Container>
                    <div className="p-3 mt-3">
                        {children}
                    </div>
                </Container>
            </div>
        </>
    )
}