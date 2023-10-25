export interface IContainerProps {
    children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = ({ children }) => (
    <div className="container mx-auto">{children}</div>
);