"use client";
import { CopilotKit } from "@copilotkit/react-core";
// import "@copilotkit/react-core/style.css";
// import "@copilotkit/react-ui/style.css";
import { CopilotSidebar } from "@copilotkit/react-ui";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CopilotKit url="/api/copilot/openai">
          <CopilotSidebar defaultOpen>{children}</CopilotSidebar>
        </CopilotKit>
      </body>
    </html>
  );
}
