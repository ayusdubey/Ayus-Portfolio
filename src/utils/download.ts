export async function downloadFromUrl(url: string, filename: string) {
  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Unable to download the file.');
  }

  const blob = await response.blob();
  const objectUrl = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');

  anchor.href = objectUrl;
  anchor.download = filename;
  anchor.style.display = 'none';

  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  window.URL.revokeObjectURL(objectUrl);
}