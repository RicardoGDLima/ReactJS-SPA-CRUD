import { Container } from "./styles"

interface HeaderProps {
    icon: string;
    title: string;
    subtitle: string;
}

export function Header({ icon, title, subtitle }: HeaderProps) {
    return (
        <Container>
            <header className="header d-none d-sm-flex flex-column">
                <h1 className="mt-3">
                    <i className={`fa fa-${icon}`}></i> {title}
                </h1>
                <p className="lead text-muted">{subtitle}</p>
            </header>
        </Container>
    )
}