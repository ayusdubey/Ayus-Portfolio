import { readFile } from 'node:fs/promises';
import path from 'node:path';

export async function GET() {
  const resumePath = path.join(process.cwd(), 'Ayus Dubey org..pdf');
  const resumeBuffer = await readFile(resumePath);

  return new Response(resumeBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Ayus Dubey org..pdf"',
      'Content-Length': String(resumeBuffer.byteLength),
      'Cache-Control': 'no-store',
    },
  });
}