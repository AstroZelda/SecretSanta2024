let messages = [
    'Hey <span class="accent">Kruhek</span>!',
    '<span class="accent">Happy Secret Santa!</span>',
    'Well I guess it\'s not gonna be hard to guess who did this...',
    'I\'m gonna be honest, I\'m not as creative and artsy as you guys',
    'So this is just a bit of bits and bops I set up together.',
    'But this is just a part of your gift',
    'If you ever need some help for a project,',
    'To set up a website or an app <span class="italic">(provided it\'s not too complex of course :I )</span>',
    'Feel free to ask me!',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    '...',
    'Ahem, anyway.',
    'I hope this at least made you smile a bit,',
    'And I wish you a <span class="accent">terrific year 2025!!!</span>',
    'Goodbye and...',
    'Stay frosty !',
    '...',
    '...',
    'Hey.',
    'What are you doing.',
    'I already said goodbye.',
    'You can stop clicking now.',
    'Hey I really mean it you know!',
    'Please stop...',
    'I have a husband and 2 cats to feed...',
    '...',
    'HEY YO WTF STOP IT ALREADY',
];

let username = '<span class="username">Secret Satan (Veigar): </span>'

function start() {
    document.getElementById('logo').style.display = 'none'
    document.getElementById('chatbox').style.display = 'grid'
}

function nextMessage() {
    if (messages.length > 0) { 
        let message = '<p>' + username + messages.shift() + '</p>'
        let container = document.getElementById('messages')

        let isScrolledToBottom = Math.floor(container.scrollHeight - container.scrollTop) <= container.clientHeight + 1

        container.innerHTML += message

        if (isScrolledToBottom) {    
            container.scrollTop = container.scrollHeight
        }

    } else {
        document.getElementById('chat-input').innerHTML = '<span class="emoji">😐</span>'
    }
}