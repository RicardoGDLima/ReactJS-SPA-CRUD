import { Container } from "./styles"

interface HeaderProps {
    icon: string;
    title: string;
    subtitle: string;
}

export function Header({ icon, title, subtitle }: HeaderProps) {
   
    return (
        <Container>
            <div className="header d-none d-sm-flex flex-column">
                <h1 style={{fontSize: "1.8em" }} className="mt-3">
                    <i className={`fa fa-${icon}`}></i> {title}
                </h1>
                <p className="lead text-muted">{subtitle}</p>
            </div>
        </Container>
    )
}