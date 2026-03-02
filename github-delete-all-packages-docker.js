const deleteButtons = Array.from(document.querySelectorAll("[data-show-dialog-id]"));
const delay = async (delayMs) => {
    return new Promise((res) => {
       setTimeout(() => {
           res();
       }, delayMs); 
    });
}
for (const deleteButton of deleteButtons) {
    deleteButton.click();
    const sha256 = `sha256${deleteButton.id.split('sha256').at(-1)}`;
    console.log('deleteButton.id', deleteButton.id);
    const dialog = document.querySelector(`dialog[id="delete-package-version-${sha256}"]`);
    dialog.querySelector('input[name="verify"]').value = 'codex-openai';
    const btn = dialog.querySelector('button[type="submit"]');
    btn.removeAttribute('disabled');
    btn.click();
    await delay(350);
}
