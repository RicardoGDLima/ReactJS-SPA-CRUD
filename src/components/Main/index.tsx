import { ReactNode } from "react";

import { Header } from "../Header";

import { Container } from "./styles";

interface MainProps {
    children: ReactNode
}

export function Main({ children }: MainProps) {

    return (
        <Container>
             <Header icon="home" title="Início" subtitle="Projeto crud" />
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    {children}
                </div>
            </main>
        </Container>
    )
}