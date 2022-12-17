/* infos */
const urlGit = 'https://github.com/CaduFDev'
const eMail = 'cefamaral22@outlook.com'
const contactWhats = 'https://api.whatsapp.com/send?phone=5514996280970&text=Ol%C3%A1%20Cadu%2C%20olhei%20seu%20site%20e%20achei%20muito%20bacana!'

/* access to div*/
const divGit = document.querySelector('#divGit')
const divEmail = document.querySelector('#divEmail')
const divDocument = document.querySelector('#divDocument')
const divChat = document.querySelector('#divChat')

/* access to git */
function openGit(urlGit){
    const wint = window.open(urlGit,'_blank')
    window.focus
}
 divGit.addEventListener('click',()=>{
    openGit(urlGit)
 })

/* access to copy email */
function copyEmail(){
    const emailCopied = eMail;
    navigator.clipboard.writeText(emailCopied).then(()=>{
        alert('Email copiado!')
    })
    navigator.clipboard.read(emailCopied)
}
divEmail.addEventListener('click',()=>{
    copyEmail();
})

/* access to WhatsApp */
function openWhats(contactWhats){
    const divChat = window.open(contactWhats,'_blank')
    window.focus
}
 divChat.addEventListener('click',()=>{
    openWhats(contactWhats)
 })
