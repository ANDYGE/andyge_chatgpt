
export default ({ message: { message, type } }) => {
    const isMe = type === 'user'
    return (
        <div className={`chat ${isMe ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={`/${isMe ? 'me' : 'gpt'}.jpg`} />
                </div>
            </div>
            <div className={`chat-bubble ${isMe ? 'chat-bubble-primary' : 'chat-bubble-accent'}`}>{message}</div>
        </div>
    )
}