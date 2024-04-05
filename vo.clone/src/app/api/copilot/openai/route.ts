import { CopilotBackend , OpenAIAdapter } from "@copilotkit/backend";

export const runtime = "edge";

export async function POST(req: Request) : Promise <Response>{
    const copilotkit = new CopilotBackend();

    return copilotkit.response(req , new OpenAIAdapter());
}