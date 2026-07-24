export function buildMailtoUrl(input: { to: string; name: string; email: string; subject: string; message: string }) {
  const body = `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`;

  return `mailto:${input.to}?subject=${encodeURIComponent(input.subject)}&body=${encodeURIComponent(body)}`;
}
