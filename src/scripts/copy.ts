export {};

const copyStatus = document.querySelector<HTMLElement>('#copy-status');
let statusTimer: number;

async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const active = document.activeElement;
    const input = document.createElement('textarea');
    input.value = value;
    input.className = 'clipboard-fallback';
    input.setAttribute('readonly', '');
    document.body.append(input);
    input.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch { /* Show manual-copy guidance. */ }
    input.remove();
    if (active instanceof HTMLElement) active.focus({ preventScroll: true });
    return copied;
  }
}

document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach(button => {
  const label = button.querySelector<HTMLElement>('[data-copy-label]');
  const original = label?.textContent ?? '';
  let resetTimer: number;
  let copying = false;
  button.addEventListener('click', async () => {
    if (copying) return;
    copying = true;
    button.setAttribute('aria-busy', 'true');
    const copied = await copyText(button.dataset.copy ?? '');
    copying = false;
    button.removeAttribute('aria-busy');
    const message = (copied ? button.dataset.copySuccess : button.dataset.copyError) ?? '';
    if (label && copied) label.textContent = message;
    if (copyStatus) {
      copyStatus.textContent = message;
      copyStatus.classList.add('is-visible');
      window.clearTimeout(statusTimer);
      statusTimer = window.setTimeout(() => copyStatus.classList.remove('is-visible'), copied ? 3000 : 7000);
    }
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => { if (label) label.textContent = original; }, 2500);
  });
});
