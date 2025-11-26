import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div
      className={`
        w-full
        max-w-6xl        /* ancho máximo para que el contenido respire */
        mx-auto          /* centra todo */
        p-6              /* padding consistente */
        animate-fade     /* animación suave al entrar */
        ${className}
      `}
    >
      {children}
    </div>
  );
}
